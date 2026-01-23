export const PolicyVisualizer = () => {
  const [timeBucket, setTimeBucket] = useState(1);
  const [timeBucketUnit, setTimeBucketUnit] = useState('day');
  const [caggStartOffset, setCaggStartOffset] = useState(30);
  const [caggEndOffset, setCaggEndOffset] = useState(2);
  const [retentionOffset, setRetentionOffset] = useState(90);
  const [caggRetentionOffset, setCaggRetentionOffset] = useState(365);
  const [copied, setCopied] = useState(false);

  const timeUnits = ['hour', 'day', 'week', 'month'];

  const convertToHours = (value, unit) => {
    const multipliers = { hour: 1, day: 24, week: 168, month: 720 };
    return value * multipliers[unit];
  };

  const timeBucketHours = convertToHours(timeBucket, timeBucketUnit);
  const caggStartHours = convertToHours(caggStartOffset, timeBucketUnit);
  const caggEndHours = convertToHours(caggEndOffset, timeBucketUnit);
  const retentionHours = convertToHours(retentionOffset, timeBucketUnit);
  const caggRetentionHours = convertToHours(caggRetentionOffset, timeBucketUnit);

  const errors = [];

  if (caggEndHours <= timeBucketHours) {
    errors.push("Set your end_offset to be older than one time bucket interval");
  }
  if (caggStartHours <= caggEndHours) {
    errors.push("Your start_offset must be greater than end_offset");
  }
  if (retentionHours < caggStartHours) {
    errors.push("Don't drop raw data within your refresh interval");
  }
  if (caggRetentionHours < caggStartHours) {
    errors.push("Don't drop downsampled data within your refresh interval");
  }
  if (caggRetentionHours < retentionHours) {
    errors.push("Drop raw data before downsampled data");
  }

  const generateSql = () => {
    const pluralize = (count, unit) => count !== 1 ? `${unit}s` : unit;
    return `-- Add refresh policy
SELECT add_continuous_aggregate_policy('continuous_aggregate_name',
  start_offset => INTERVAL '${caggStartOffset} ${pluralize(caggStartOffset, timeBucketUnit)}',
  end_offset => INTERVAL '${caggEndOffset} ${pluralize(caggEndOffset, timeBucketUnit)}',
  schedule_interval => INTERVAL '1 hour');

-- Add retention policy for raw data
SELECT add_retention_policy('hypertable_name',
  drop_after => INTERVAL '${retentionOffset} ${pluralize(retentionOffset, timeBucketUnit)}');

-- Add retention policy for downsampled data
SELECT add_retention_policy('continuous_aggregate_name',
  drop_after => INTERVAL '${caggRetentionOffset} ${pluralize(caggRetentionOffset, timeBucketUnit)}');`;
  };

  // Calculate dynamic constraints
  const minEndOffset = timeBucket + 1;
  const minStartOffset = caggEndOffset + 1;
  const minRetention = caggStartOffset + 1;
  const minCaggRetention = Math.max(retentionOffset + 1, caggStartOffset + 1);

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSql());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 my-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Time bucket interval</label>
          <div className="flex gap-2">
            <input type="number" min="1" value={timeBucket} onChange={(e) => setTimeBucket(parseInt(e.target.value) || 1)} className="w-20 px-2 py-1 border rounded" />
            <select value={timeBucketUnit} onChange={(e) => setTimeBucketUnit(e.target.value)} className="px-2 py-1 border rounded">
              {timeUnits.map(unit => <option key={unit} value={unit}>{unit}(s)</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Refresh end_offset: {caggEndOffset} {timeBucketUnit}{caggEndOffset !== 1 ? 's' : ''}</label>
          <input type="range" min={minEndOffset} max="30" value={caggEndOffset} onChange={(e) => setCaggEndOffset(parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Refresh start_offset: {caggStartOffset} {timeBucketUnit}{caggStartOffset !== 1 ? 's' : ''}</label>
          <input type="range" min={minStartOffset} max="365" value={caggStartOffset} onChange={(e) => setCaggStartOffset(parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Raw data retention: {retentionOffset} {timeBucketUnit}{retentionOffset !== 1 ? 's' : ''}</label>
          <input type="range" min={minRetention} max="730" value={retentionOffset} onChange={(e) => setRetentionOffset(parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Downsampled retention: {caggRetentionOffset} {timeBucketUnit}{caggRetentionOffset !== 1 ? 's' : ''}</label>
          <input type="range" min={minCaggRetention} max="1825" value={caggRetentionOffset} onChange={(e) => setCaggRetentionOffset(parseInt(e.target.value))} className="w-full" />
        </div>
        <div className="relative">
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{generateSql()}</code></pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

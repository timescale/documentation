export const PricePlanBadge = ({ plans: propPlans }) => {
  const PLANS = ['free', 'performance', 'scale', 'enterprise'];

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  let plans = propPlans;

  if (!plans && typeof window !== 'undefined') {
    const frontmatter = window.__mintlify_frontmatter__;
    if (frontmatter && frontmatter.price_plans) {
      plans = frontmatter.price_plans;
    }
  }

  if (!plans || !plans.length) {
    return null;
  }

  const validPlans = plans.filter(p => PLANS.includes(p));

  if (validPlans.length === 0) {
    return null;
  }

  return (
    <a href="/deploy-and-operate/tiger-cloud/understand/pricing-and-account-management" className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-6 no-underline hover:bg-green-100 transition-colors">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="shrink-0">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
      </svg>
      Available on: {validPlans.map(plan => capitalize(plan)).join(', ')}
    </a>
  );
};


export const CTALink = ({
  text,
  href = "#"
}) => {
  return (
    <a href={href} className="border-none cursor-pointer group/item">
      <div className='inline-block'>
        <div className="items-center flex gap-2">
          <div
            className='flex justify-center items-center flex-none h-7 w-7 bg-black dark:border dark:border-white' style={{borderRadius: '3px'}}
          >
            <div className='flex justify-center items-center peer transition duration-300 -translate-x-0 group-hover/item:translate-x-0.5'>
              <Icon icon="arrow-right" size={18} color="white" />
            </div>
          </div>
          <div>
            <p
              className='font-semibold leading-normal text-base text-black dark:text-white'
            >
              {text}
            </p>
            <div
              className='h-0.5 bg-black dark:bg-white transition-all duration-300 w-0 group-hover/item:w-full'
            />
          </div>
        </div>
      </div>
    </a>
  );
};

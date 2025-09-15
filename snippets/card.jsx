

export const CardComponent = ({children, icon, title, href, cta}) => {
  return (
    <a href={href} className="group/item flex gap-3 flex-col my-2 pt-6 px-6 pb-9 rounded-2xl bg-white dark:bg-background-dark border border-gray-950/10 dark:border-white/10 overflow-hidden w-full cursor-pointer hover:!border-primary dark:hover:!border-primary-light">
      <div className="bg-[#F8F9FF] inline-flex items-center justify-center rounded-lg self-start w-[50px] h-[50px]">
        <Icon icon={icon} size={24} color="#6447FB" />
      </div>
      <h2 className="text-3xl text-black dark:text-white font-semibold">{title}</h2>
      <div className="text-neutral-700 dark:text-neutral-400">{children}</div>
      {cta && <div className="mt-5">{cta}</div>}
    </a>
  )
}

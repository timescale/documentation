

export const CardComponent = ({children, title, href, cta, bgImage}) => {
  return (
    <a href={href} className="group/item flex gap-3 flex-col my-2 pt-6 px-6 pb-9 rounded-3xl bg-white dark:bg-background-dark overflow-hidden w-full cursor-pointer"
    style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right', backgroundSize: 'cover'}}>
      
      <h2 className="text-3xl text-black dark:text-white font-semibold">{title}</h2>
      <div className="text-neutral-700 dark:text-neutral-400">{children}</div>
      {cta && <div className="mt-5">{cta}</div>}
    </a>
  )
}

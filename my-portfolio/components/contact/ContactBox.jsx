function ContactBox({title, description, icon, link}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex bg-[var(--text-black)] rounded-[7px] cursor-pointer px-5 py-3 pb-5 lg:min-w-145 w-auto justify-between hover:bg-[var(--gray)] shadow-md text-white hover:text-[var(--text-black)] items-center gap-5">
                <div className="flex flex-col">
                    <p className="text-[var(--yellow)] text-[1.5em] font-black">{title}</p>
                    <p className="text-[1em] font-black">{description}</p>
                </div>
                <div className="self-end text-2xl">{icon}</div>
            </div>
        </a>
    )
}

export default ContactBox

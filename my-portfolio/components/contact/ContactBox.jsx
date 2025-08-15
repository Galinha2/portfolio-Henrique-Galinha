function ContactBox({title, description, icon}) {
    return (
        <div className="flex bg-[var(--text-black)] rounded-[7px] px-5 py-3 pb-5 lg:min-w-145 w-auto justify-between">
            <div className="flex flex-col">
                <p className="text-[var(--yellow)] text-[1.5em] font-black">{title}</p>
                <p className="text-white text-[1em] font-black">{description}</p>
            </div>
            <div className="self-end text-white text-2xl">{icon}</div>
        </div>
    )
}

export default ContactBox

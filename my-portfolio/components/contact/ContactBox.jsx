function ContactBox({title, description, icon}) {
    return (
        <div className="flex bg-[var(--text-black)] rounded-[7px] px-5 py-3 pb-5 min-w-145 w-auto justify-between">
            <div className="flex flex-col">
                <h3 className="text-[var(--yellow)]">{title}</h3>
                <h5 className="text-white">{description}</h5>
            </div>
            <div className="self-end text-white text-2xl">{icon}</div>
        </div>
    )
}

export default ContactBox

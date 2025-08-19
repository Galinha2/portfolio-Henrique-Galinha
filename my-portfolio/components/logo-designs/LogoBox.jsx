function LogoBox({className, logo}) {
    return (
        <div className={`bg-white shadow-md flex items-center justify-center w-30 h-30 ${className} rounded-[20px]`}>
            <img className="p-2" src={logo} alt="Logo Design" />
        </div>
    )
}

export default LogoBox

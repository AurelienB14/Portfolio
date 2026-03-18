export default function LogoText({children, logo, text}) {
    return <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="icon" className="flex w-[80px] h-[80px] hover:w-[100px] hover:h-[100px] transition duration-300 cursor-pointer"/>
        <p>{text}</p>
    </div>
}
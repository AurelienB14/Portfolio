export default function Button({text, link, scroll, className}) {
    const handleClick = () => {
        if (scroll) {
            document.getElementById(scroll).scrollIntoView()
        }
        if (link) {
            window.open(link, "_blank")
        }
    }
    return <button
        className={`h-[35px] px-1 bg-[#0081ce] hover:bg-[#3eb489] transition duration-300 rounded-full text-[12px] font-bold cursor-pointer whitespace-nowrap ${className}`}
        onClick={handleClick}>
        {text}
    </button>
}
export default function Button(children) {
    const handleClick = () => {
    if (children.scroll) {
      document.getElementById(children.scroll).scrollIntoView({behavior: "smooth"})
    }
    if (children.link) {
      window.open(children.link, "_blank")
    }
  }
    return <button
        className="
        h-[40px] sm:h-[35px] w-full sm:w-auto px-1
        bg-[#0081ce] hover:bg-[#3eb489] transition duration-300 rounded-full
        text-[12px] font-bold cursor-pointer whitespace-nowrap"
        onClick={handleClick}>
        {children.text}
        </button>;
}
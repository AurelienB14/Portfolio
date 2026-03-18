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
        h-[35px] hover:h-[45px] px-1 hover:px-6
        bg-[#0081ce] hover:bg-[#3eb489] transition duration-300 rounded-full
        text-[12px] font-bold cursor-pointer whitespace-nowrap"
        onClick={handleClick}>
        {children.text}
        </button>;
}
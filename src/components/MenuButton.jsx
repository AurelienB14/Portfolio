import { useState } from "react"
import menuhide from "../assets/menuhide.svg"
import menushow from "../assets/menushow.svg"

export default function MenuButton() {
    const [menu, setMenu] = useState(false)
    return <img
        src={menu ? menushow : menuhide}
        alt="menu" 
        className="w-[40px] h-[40px] cursor-pointer flex sm:hidden transition duration-300"
        onClick={() => setMenu(!menu)}></img>
}
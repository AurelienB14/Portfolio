export default function LogoText({children, logo, text, niveau}) {
    const niveaux = {
        1: {text: "Notions", color: "#888888"},
        2: {text: "Débutant", color: "#e5a000"},
        3: {text: "Intermédiaire", color: "#3eb489"},
        4: {text: "Avancé", color: "#0081ce"}
    }
    const niv = niveaux[niveau]
    return <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="icon" className="flex w-[60px] h-[60px] transition duration-300"/>
        <span className="text-[14px] text-[#FFFFFF]">{text}</span>
        {niv && <span style={{color: niv.color, fontSize:"12px"}}>{niv.text}</span>}
    </div>
}
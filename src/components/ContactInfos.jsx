export default function ContactInfos({logo: Logo, text, link, image, span=false}) {
    if (image) {
        return <div className="flex flex-row items-center gap-[20px]">
            <img className='h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[60px] md:w-[60px]' src={image} color="#0081ce"/>
            <a target="_blank" className="underline" href={link}>{text}</a>
        </div>
    } else if (span) {
        return <div className="flex flex-row items-center gap-[20px]">
            <Logo size={20} color="#0081ce"/>
            <p className="!text-[#aaaaaa] !text-[14px]">{text}</p>
        </div>
    }
    else if (link) {
        return <div className="flex flex-row items-center gap-[20px]">
            <Logo size={20} color="#0081ce"/>
            <a target="_blank" className="underline" href={link}>{text}</a>
        </div>
    } else {
        return <div className="flex flex-row items-center gap-[20px]">
            <Logo size={20} color="#0081ce"/>
            <p>{text}</p>
        </div>
    }
}
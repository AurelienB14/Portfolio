import SubTitleSection from './SubTitleSection.jsx'
import Button from './Button.jsx'
import CardSection from './CardSection.jsx'
import ContactInfos from './ContactInfos.jsx'

import { FiCalendar, FiTool } from "react-icons/fi"

export default function ProjectDiv({title, image, texte, date, technologies, type, link, buttontext}) {
    const types = {
        "stage": {text: "stage", color: "#e5a000"},
        "ecole": {text: "École", color: "#3eb489"},
        "personnel": {text: "Personnel", color: "#0081ce"},
    }
    const t = types[type]
    return <CardSection noPadding={true} className='relative flex flex-col justify-between overflow-hidden w-[300px] gap-[10px] pb-[25px]'>
        <img src={image} alt="image projet"/>
        <span id="projecttype" className='absolute top-[10px] left-[10px] text-[15px] px-[10px] py-[2px] rounded-full' style={{backgroundColor: t.color}}>{t.text}</span>
        <div className='flex flex-col px-[25px] gap-[10px]'>
            <SubTitleSection text={title}/>
            <span className='text-[#FFFFFF] text-[15px]'>{texte}</span>
        </div>
        <div className='flex flex-col px-[25px] gap-[10px]'>
            <ContactInfos span={true} logo={FiCalendar} text={date}/>
            <ContactInfos span={true} logo={FiTool} text={technologies}/>
            <Button className='w-fit !px-[15px] !py-[5px]' text={buttontext} link={link}/>
        </div>
    </CardSection>
}
import SubTitleSection from './SubTitleSection.jsx'
import Button from './Button.jsx'

export default function ProjectDiv({title, image, texte, date, technologies, link}) {
    return <div className='flex flex-col w-[400px] gap-[15px]'>
        <SubTitleSection text={title}/>
        <img src={image} alt="image projet" />
        <p>{texte}</p>
        <p>Date : {date}</p>
        <p>Technologies: <br /> {technologies}</p>
        <Button text="Lien" link={link}/>
    </div>
}
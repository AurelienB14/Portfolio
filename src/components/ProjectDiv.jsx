import SubTitleSection from './SubTitleSection.jsx'
import Button from './Button.jsx'

export default function ProjectDiv({title, image, texte, date, tech, technologies, link}) {
    return <div className='flex flex-col sm:w-[250px] md:w-[300px] lg:w-[400px] xl:[] gap-[15px]'>
        <SubTitleSection text={title}/>
        <img src={image} alt="image projet" />
        <p>{texte}</p>
        <p>Date : {date}</p>
        <p>{tech} : <br /> {technologies}</p>
        <Button text="Lien" link={link}/>
    </div>
}
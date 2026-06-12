import SubTitleSection from './SubTitleSection.jsx'
import Button from './Button.jsx'

export default function ProjectDiv({title, image, texte, date, tech, technologies, link, buttontext}) {
    return <div className='flex flex-col justify-between sm:w-[250px] md:w-[300px] lg:w-[400px] gap-[15px]'>
        <SubTitleSection text={title}/>
        <img src={image} alt="image projet" />
        <p>{texte}</p>
        <p>Date : {date}</p>
        <p>{tech} : <br /> {technologies}</p>
        <Button text={buttontext} link={link}/>
    </div>
}
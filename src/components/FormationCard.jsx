import CardSection from './CardSection.jsx'
import ContactInfos from './ContactInfos.jsx'

import { FiAward, FiMapPin, FiClock, FiCheck } from "react-icons/fi"

export default function FormationCard({logo: Logo, nom, debut, fin, infos, ville, obtenu}) {
    return <CardSection className="flex flex-col gap-[15px] flex-1">
        <div className="flex flex-row items-center gap-[20px]">
            <Logo size={25} color="#0081ce"/>
            <h3 className='text-[20px]'>{nom}</h3>
        </div>
        <span className='text-[15px] text-[#0081ce99]'>{debut} - {fin}</span>
        <div className="border-t border-[#0081ce44]"/>
        <ContactInfos logo={FiAward} text={infos}/>
        <ContactInfos logo={FiMapPin} text={ville}/>
        {obtenu ? (
            <div className="flex flex-row items-center gap-[20px]">
                <FiCheck size={20} color="#0081ce"/>
                <span className='rounded-xl text-[#3eb489] text-[15px] bg-[#3eb48922] pl-[5px] pr-[5px]'>Obtenu</span>
            </div>
        ) : (
            <div className="flex flex-row items-center gap-[20px]">
                <FiClock size={20} color="#0081ce"/>
                <span className='rounded-xl text-[#0081ce] text-[15px] bg-[#0081ce22] pl-[5px] pr-[5px]'>En cours</span>
            </div>
        )}
    </CardSection>
}
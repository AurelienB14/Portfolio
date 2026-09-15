import { use, useState } from 'react'

import Button from './components/Button.jsx'
import TitleSection from './components/TitleSection.jsx'
import SubTitleSection from './components/SubTitleSection.jsx'
import DivSection from './components/DivSection.jsx'
import MenuButton from './components/MenuButton.jsx'
import LogoText from './components/LogoText.jsx'
import ProjectDiv from './components/ProjectDiv.jsx'
import CardSection from './components/CardSection.jsx'
import FormationCard from './components/FormationCard.jsx'
import ContactInfos from './components/ContactInfos.jsx'
import LineSection from "./components/LineSection.jsx"

import photoprofil from "./assets/photoprofil.jpg"
import logo from "./assets/logo.svg"

import css3logo from "./assets/competences/css3-logo.svg"
import figmalogo from "./assets/competences/figma-logo.svg"
import gitlogo from "./assets/competences/git-logo.svg"
import githublogo from "./assets/competences/github-logo.svg"
import html5logo from "./assets/competences/html5-logo.svg"
import jslogo from "./assets/competences/js-logo.svg"
import linkedinlogo from "./assets/competences/linkedin-logo.svg"
import phplogo from "./assets/competences/php-logo.svg"
import pythonlogo from "./assets/competences/python-logo.svg"
import symfonylogo from "./assets/competences/symfony-logo.svg"
import reactlogo from "./assets/competences/react-logo.svg"
import sasslogo from "./assets/competences/sass-logo.svg"
import tailwindlogo from "./assets/competences/tailwind-logo.svg"
import vitejslogo from "./assets/competences/vitejs-logo.svg"
import vscodelogo from "./assets/competences/vscode-logo.svg"
import wordpresslogo from "./assets/competences/wordpress-logo.svg"

import associationimage from "./assets/projets/association-image.png"
import partielimage from "./assets/projets/partiel-image.png"
import stagecoolairimage from "./assets/projets/stagecoolair-image.png"
import portfoliofictifimage from "./assets/projets/portfoliofictif-image.png"
import greenfallsotimage from "./assets/projets/greenfallsot-image.png"
import portfolioimage from "./assets/projets/portfolio-image.png"
import studiogamingimage from "./assets/projets/studiogaming-image.png"
import resurgences34image from "./assets/projets/resurgences34-image.png"
import pepsimage from "./assets/projets/peps-image.png"
import tabledecocoimage from "./assets/projets/tabledecoco-image.png"
import lineaimage from "./assets/projets/linea-image.png"

import cv from "./assets/cvaurelienbrochetta.pdf"

import { FiMail, FiMapPin, FiUser, FiGithub, FiLinkedin} from "react-icons/fi"
import { FaIdCard, FaCar } from "react-icons/fa"
import { FiBook, FiHome } from "react-icons/fi"

function App() {
  const [filter, setFilter] = useState("tous")
  const [menu, setMenu] = useState(false)

  const projects = [
    {title: "Linea", image: lineaimage, texte: "Jeu mobile développé et publié sur le Play Store. Le joueur contrôle un cube et doit éliminer des ennemis.", date: "juin-septembre 2026", technologies: "Godot - Python", type: "personnel", link: "https://play.google.com/store/apps/details?id=com.soochie14.linea", buttontext: "Lien Play Store"},
    {title: "Stage Table de Coco", image: tabledecocoimage, texte: "Conception et développement du site internet d'un restaurant de burgers.", date: "juillet 2026", technologies: "VSCode - HTML - CSS - JS", type: "stage", link: "https://stage-tablecoco-aurelien-brochetta.vercel.app/index.html", buttontext: "Lien site internet"},
    {title: "Stage Association PEPS", image: pepsimage, texte: "Refonte et amélioration du site d'une association d'accompagnement social.", date: "juin-juillet 2026", technologies: "Artisteer 4 - VSCode - HTML - CSS", type: "stage", link: "https://association-peps30.fr/", buttontext: "Lien site internet"},
    {title: "Stage Résurgences 34", image: resurgences34image, texte: "Mise à jour du site internet et formation du personnel à l'outil de gestion de mots de passe Keepass.", date: "mai-juin 2026", technologies: "Google Site - Keepass", type: "stage", link: "https://sites.google.com/view/resurgences34/", buttontext: "Lien site internet"},
    {title: "Studio Gaming", image: studiogamingimage, texte: "Développement en équipe d'une plateforme de jeux vidéo avec gestion CRUD complète.", date: "avril-juin 2026", technologies: "VSCode - Symfony - React", type: "ecole", link: "https://github.com/AurelienB14/Projet-de-specialite", buttontext: "Lien GitHub"},
    {title: "Site Portfolio", image: portfolioimage, texte: "Conception et développement de mon portfolio personnel, présentant mes compétences et projets.", date: "mars 2026", technologies: "VSCode - React - Tailwind - CSS - Vite - Figma", type: "personnel", link: "https://portfolio-aurelien-brochetta.vercel.app", buttontext: "Lien site internet"},
    {title: "Greenfall : Seeds of Tomorrow", image: greenfallsotimage, texte: "Développement en équipe d'un jeu vidéo sur le thème de la température.", date: "février 2026", technologies: "Godot - Python", type: "ecole", link: "https://aurelienb14.itch.io/greenfall-seeds-of-tomorrow", buttontext: "Lien Itch.io (pc)"},
    {title: "Site Portfolio fictif", image: portfoliofictifimage, texte: "Intégration d'un portfolio fictif en équipe, mettant en pratique les techniques Sass/SCSS.", date: "décembre 2025", technologies: "VSCode - HTML - CSS - Sass/SCSS", type: "ecole", link: "https://github.com/AurelienB14/IntegrationWeb", buttontext: "Lien GitHub"},
    {title: "Stage Coolair", image: stagecoolairimage, texte: "Création du site vitrine d'une entreprise spécialisée dans la rénovation.", date: "avril-mai 2025", technologies: "WordPress", type: "stage", link: "https://stage.aurelien-brochetta.mds-montpellier.yt/", buttontext: "Lien site internet"},
    {title: "Site de partiel", image: partielimage, texte: "Création en équipe d'un site WordPress pour une campagne électorale fictive.", date: "mars 2025", technologies: "WordPress", type: "ecole", link: "https://aurelien-brochetta.mds-montpellier.yt/partiel/", buttontext: "Lien site internet"},
    {title: "Site d'association", image: associationimage, texte: "Création en équipe d'un site WordPress pour une association.", date: "février 2025", technologies: "WordPress", type: "ecole", link: "https://aurelien-brochetta.mds-montpellier.yt/", buttontext: "Lien site internet"},
]

  const buttons = [
    {text:"Tous", type:"tous", color: "#0081ce", textcolor:"#FFFFFF"},
    {text:"Stage", type:"stage", color: "#e5a000", textcolor:"#000000"},
    {text:"École", type:"ecole", color: "#3eb489", textcolor:"#000000"},
    {text:"Personnel", type:"personnel", color:"#0081ce", textcolor:"#000000"},
  ]

  return (
    <>
      <div className='flex flex-col mx-auto'>
        <div className='fixed w-full flex justify-between flex-col sm:flex-row px-5 z-50'>
          <div className='flex justify-between items-center flex-row'>
            <img src={logo} alt="logo" className='w-[50px] h-[50px] cursor-pointer' onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}/>
            <MenuButton menu={menu} setMenu={setMenu}/>
          </div>
          <div id="menuButtons" className='flex flex-row justify-end gap-1 sm:gap-5'>
            <div className='hidden sm:flex flex-col items-center sm:flex-row gap-5 w-auto'>
              <Button text="À propos" scroll="About"/>
              <Button text="Compétences" scroll="Competences"/>
              <Button text="Projets" scroll="Projects"/>
              <Button text="Formations" scroll="Formations"/>
              <Button text="Contact" scroll="Contact"/>
            </div>
            <CardSection className={`flex sm:hidden flex-col items-center gap-1 w-[150px] ${menu ? 'flex' : 'hidden'}`}>
              <Button className="w-full" text="À propos" scroll="About"/>
              <Button className="w-full" text="Compétences" scroll="Competences"/>
              <Button className="w-full" text="Projets" scroll="Projects"/>
              <Button className="w-full" text="Formations" scroll="Formations"/>
              <Button className="w-full" text="Contact" scroll="Contact"/>
            </CardSection>
          </div>
        </div>

        <DivSection id="Hero" className="mt-50">
          <div className='flex items-center flex-col align-center gap-[25px]'>
            <div className='flex items-center flex-col align-center gap-[10px]'>
              <h1 className="text-[50px] text-center">Aurélien BROCHETTA</h1>
              <h2 className="text-[45px] text-center">Étudiant développeur web</h2>
            </div>
              <Button text="Compétences" scroll="Competences"/>
          </div>
        </DivSection>

        <LineSection/>

        <DivSection id="About">
          <TitleSection text="À propos"/>
          <CardSection className='flex flex-col lg:flex-row gap-[20px] md:gap-0'>
            <div className='flex lg:w-1/2 md:px-[25px]'>
              <img src={photoprofil} className='w-full h-full object-cover' alt="Photo de profil"/>
            </div>
            <div className='flex flex-col lg:w-1/2 gap-[10px]'>
              <SubTitleSection text="Mon parcours"/>
              <p className='!text-[15px]'>Passionné par l’informatique, j’ai découvert la programmation à l’âge de 14 ans, pendant le confinement. 
              J'ai appris à coder seul. Ce fut une révélation pour moi. L’informatique est un milieu dans lequel je m’épanouis désormais.</p>
              <div className="border-t border-[#0081ce44]"/>
              <SubTitleSection text="Mes compétences"/>
              <p className='!text-[15px]'>Au cours des deux premières années de mon cursus, j’ai pu acquérir de bonnes compétences en développement web, gestion de projet, marketing et design graphique.
              J'ai le domaine très enrichissant de la cybersécurité, et je suis tout à fait conscient de l’importance de ce domaine dans la sécurisation des données sensibles recueillies au sein des sociétés publiques et privées.
              Cette troisième année de formation va me permettre d'approfondir mes connaissances en développement web et en conception d'applications.</p>
              <div className="border-t border-[#0081ce44]"/>
              <SubTitleSection text="Mon projet"/>
              <p className='!text-[15px]'>J’envisage de devenir développeur full-stack. 
              Un stage ou une alternance me permettrait de découvrir davantage le monde professionnel et de développer mes compétences au contact de professionnels expérimentés.</p>
            </div>
          </CardSection>
        </DivSection>

        <LineSection/>

        <DivSection id="Competences">
          <TitleSection text="Compétences"/>
          <CardSection className='flex flex-col gap-[25px]'>
            <div className='flex flex-col gap-[20px]'>
              <SubTitleSection text="Front-end"/>
              <div className='flex flex-row justify-center gap-[25px] flex-wrap'>
                <LogoText logo={html5logo} text="HTML" niveau={3}/>
                <LogoText logo={css3logo} text="CSS" niveau={3}/>
                <LogoText logo={jslogo} text="JavaScript" niveau={2}/>
                <LogoText logo={reactlogo} text="React" niveau={3}/>
                <LogoText logo={tailwindlogo} text="Tailwind" niveau={3}/>
                <LogoText logo={sasslogo} text="SASS" niveau={1}/>
              </div>
            </div>
            <div className="border-t border-[#0081ce44]"/>
            <div className='flex flex-col gap-[20px]'>
              <SubTitleSection text="Back-end"/>
              <div className='flex flex-row justify-center gap-[25px] flex-wrap'>
                <LogoText logo={pythonlogo} text="Python" niveau={4}/>
                <LogoText logo={phplogo} text="PHP" niveau={2}/>
                <LogoText logo={symfonylogo} text="Symfony" niveau={2}/>
              </div>
            </div>
            <div className="border-t border-[#0081ce44]"/>
            <div className='flex flex-col gap-[20px]'>
              <SubTitleSection text="Outils"/>
              <div className='flex flex-row justify-center gap-[25px] flex-wrap'>
                <LogoText logo={vscodelogo} text="Visual Studio Code" niveau={4}/>
                <LogoText logo={githublogo} text="GitHub" niveau={3}/>
                <LogoText logo={gitlogo} text="Git" niveau={2}/>
                <LogoText logo={vitejslogo} text="Vitejs" niveau={2}/>
                <LogoText logo={wordpresslogo} text="Wordpress" niveau={3}/>
                <LogoText logo={figmalogo} text="Figma" niveau={3}/>
              </div>
            </div>
          </CardSection>
        </DivSection>

        <LineSection/>

        <DivSection id="Projects">
          <TitleSection text="Projets réalisés"/>
          <div className='flex flex-row gap-[10px]'>
            {buttons
              .map((btn, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(btn.type)}
                  className="px-[12px] py-[5px] sm:px-[20px] sm:py-[8px] text-[12px] sm:text-[14px] font-bold cursor-pointer"
                  style={filter === btn.type ?
                    {background: btn.color, color: btn.textcolor, borderRadius: "20px", border: "1px solid "+btn.color} :
                    {background: btn.color+"22", color: btn.color, borderRadius: "20px", border: "1px solid "+btn.color}
                }
                onMouseEnter={e => {e.target.style.background = btn.color, e.target.style.color = btn.textcolor = btn.textcolor}}
                onMouseLeave={e => {
                    if (filter !== btn.type) {
                      e.target.style.background = btn.color+"22", e.target.style.color = btn.textcolor = btn.color}
                    }}
                >
                {btn.text}
                </button>
              ))
            }
          </div>
          <div className='flex flex-row justify-center gap-[40px] flex-wrap items-stretch'>
            {projects
              .filter(p => filter === "tous" || p.type === filter)
              .map((p, index) => <ProjectDiv key={index} {...p}/>)
            }
          </div>
        </DivSection>

        <LineSection/>

        <DivSection id="Formations">
          <TitleSection text="Formations"/>
          <div className='flex flex-col items-stretch sm:flex-row gap-[25px]'>
            <FormationCard logo={FiBook} nom="My Digital School" debut="2024" fin="2027" infos="Bachelor Web & Multimedia" ville="Montpellier" obtenu={false}/>
            <FormationCard logo={FiHome} nom="Lycée Jacques Prévert" debut="2021" fin="2024" infos="Baccalauréat général - Maths & NSI" ville="Saint-Christol-Lès-Alès" obtenu={true}/>
          </div>
        </DivSection>

        <LineSection/>

        <DivSection id="Contact">
          <TitleSection text="Contact"/>
          <CardSection>
            <div className='flex flex-col justify-center gap-[25px] w-full'>
              <SubTitleSection text="Infos"/>
              <div className='flex flex-col gap-[15px] w-min'>
                <ContactInfos logo={FiMail} text="aurelien.brochetta@gmail.com"/>
                <ContactInfos logo={FiMapPin} text="Montpellier, France"/>
                <ContactInfos logo={FiUser} text="20 ans"/>
                <div className="border-t border-[#0081ce44]"/>
                <ContactInfos logo={FaIdCard} text="Permis B"/>
                <ContactInfos logo={FaCar} text="Véhicule personnel"/>
                <div className="border-t border-[#0081ce44]"/>
                <ContactInfos logo={FiLinkedin} text="Aurélien Brochetta" link="https://www.linkedin.com/in/aur%C3%A9lien-brochetta-427409333/"/>
                <ContactInfos logo={FiGithub} text="AurelienB14" link="https://github.com/AurelienB14"/>
                <div className="border-t border-[#0081ce44]"/>
                <div className='flex flex-row justify-between'>
                  <a href={cv} download="CV_Aurelien_Brochetta.pdf">
                    <Button text="Télécharger mon CV"/>
                  </a>
                  <a href={cv} target="_blank">
                    <Button text="Voir mon CV"/>
                  </a>
                </div>
              </div>
            </div>
          </CardSection>
          
        </DivSection>

        <LineSection/>

        <CardSection className='flex flex-col p-[75px] gap-[50px] mb-1'>
          <div className='flex w-full flex-row flex-wrap justify-center sm:justify-between gap-[50px] sm:gap-0'>
            <div className='flex w-full sm:w-[200px] justify-center items-center'>
              <img src={logo} alt="logo" className='w-[200px] h-[200px]'/>
            </div>
            <div className='flex flex-col items-center gap-[10px]'>
              <a href="#Hero">Hero</a>
              <a href="#About">À propos</a>
              <a href="#Competences">Compétences</a>
              <a href="#Projects">Projets</a>
              <a href="#Formations">Formations</a>
              <a href="#Contact">Contact</a>
            </div>
            <div className='flex flex-col justify-center items-center sm:items-start gap-[20px] sm:w-[200px]'>
              <ContactInfos image={githublogo} text="Github" link="https://github.com/AurelienB14"/>
              <ContactInfos image={linkedinlogo} text="LinkedIn" link="https://www.linkedin.com/in/aur%C3%A9lien-brochetta-427409333/"/>
            </div>
          </div>
          <div className='flex justify-center'>
            <p className='flex text-center'>© 2026 Aurélien Brochetta. – Tous droits réservés</p>
          </div>
        </CardSection>
      </div>
    </>
  )
}

export default App

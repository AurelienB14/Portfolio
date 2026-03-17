import Button from './components/Button.jsx'
import TitleSection from './components/TitleSection.jsx'
import SubTitleSection from './components/SubTitleSection.jsx'
import DivSection from './components/DivSection.jsx'
import MenuButton from './components/MenuButton.jsx'
import LogoText from './components/LogoText.jsx'
import ProjectDiv from './components/ProjectDiv.jsx'

import photoprofil from "./assets/photoprofil.jpg"
import logo from "./assets/logo.svg"

import css3logo from "./assets/css3-logo.svg"
import figmalogo from "./assets/figma-logo.svg"
import gitlogo from "./assets/git-logo.svg"
import githublogo from "./assets/github-logo.svg"
import html5logo from "./assets/html5-logo.svg"
import jslogo from "./assets/js-logo.svg"
import linkedinlogo from "./assets/linkedin-logo.svg"
import phplogo from "./assets/php-logo.svg"
import pythonlogo from "./assets/python-logo.svg"
import reactlogo from "./assets/react-logo.svg"
import sasslogo from "./assets/sass-logo.svg"
import tailwindlogo from "./assets/tailwind-logo.svg"
import vitejslogo from "./assets/vitejs-logo.svg"
import vscodelogo from "./assets/vscode-logo.svg"
import wordpresslogo from "./assets/wordpress-logo.svg"

import associationimage from "./assets/association-image.png"
import partielimage from "./assets/partiel-image.png"
import portfoliofictifimage from "./assets/portfoliofictif-image.png"
import portfolioimage from "./assets/portfolio-image.png"

function App() {
  return (
    <>
      <div className='flex flex-col mx-auto w-19/20'>
        <div className='fixed top-0 w-19/20 flex justify-between flex-col sm:flex-row'>
          <div className='flex w-19/20 justify-between items-center flex-row'>
            <img src={logo} alt="logo" className='w-[50px] h-[50px] cursor-pointer' onClick={() => document.getElementById("Hero").scrollIntoView()}/>
            <MenuButton/>
          </div>
          <div id="menuButtons" className='flex flex-row justify-end gap-1 sm:gap-5'>
            <div className='hidden sm:flex flex-col items-center sm:flex-row gap-1 sm:gap-5 w-[150px] sm:w-auto'>
              <Button text="À propos" scroll="About"/>
              <Button text="Compétences" scroll="Competences"/>
              <Button text="Projets" scroll="Projects"/>
            </div>
            <div className='hidden sm:flex flex-col items-center sm:flex-row gap-1 sm:gap-5 w-[150px] sm:w-auto'>
              <Button text="Formations" scroll="Formations"/>
              <Button text="Contact" scroll="Contact"/>
            </div>
          </div>
        </div>
       <DivSection id="Hero">
        <div className='flex items-center flex-col align-center gap-[25px]'>
          <div className='flex items-center flex-col align-center gap-[10px]'>
            <h1 className="text-[50px] text-center">Aurélien BROCHETTA</h1>
            <h2 className="text-[45px] text-center">Étudiant Développeur Web</h2>
          </div>
            <Button text="Compétences" scroll="Competences"/>
        </div>
        </DivSection>
        <DivSection id="About">
          <TitleSection text="À propos"/>
          <div className='flex flex-col sm:flex-row'>
            <div className='flex sm:w-1/2 p-[25px]'>
              <img src={photoprofil} className='w-full h-full object-cover' alt="Photo de profil"/>
            </div>
            <div className='flex sm:w-1/2 p-[25px]'>
              <p className='flex text-center sm:text-left'>Passionné par l’informatique, j’ai découvert la programmation à l’âge de 14 ans, pendant le confinement. J’ai appris le codage seul. Ce fut une révélation pour moi. L’informatique est un milieu dans lequel je m’épanouis désormais.  J’aimerais travailler dans le domaine du développement.</p>
            </div>
          </div>
        </DivSection>
        <DivSection id="Competences">
          <TitleSection text="Competences"/>
          <div className='flex flex-col gap-[25px]'>
            <div className='flex flex-col gap-[20px]'>
              <SubTitleSection text="Front-end"/>
              <div className='flex flex-row justify-center gap-[25px] flex-wrap'>
                <LogoText logo={html5logo} text="HTML"/>
                <LogoText logo={css3logo} text="CSS"/>
                <LogoText logo={jslogo} text="JavaScript"/>
                <LogoText logo={reactlogo} text="React"/>
                <LogoText logo={tailwindlogo} text="Tailwind"/>
                <LogoText logo={sasslogo} text="SASS"/>
              </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <SubTitleSection text="Back-end"/>
              <div className='flex flex-row justify-center gap-[25px] flex-wrap'>
                <LogoText logo={pythonlogo} text="Python"/>
                <LogoText logo={phplogo} text="PHP"/>
              </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <SubTitleSection text="Outils"/>
              <div className='flex flex-row justify-center gap-[25px] flex-wrap'>
                <LogoText logo={vscodelogo} text="Visual Studio Code"/>
                <LogoText logo={githublogo} text="Github"/>
                <LogoText logo={gitlogo} text="Git"/>
                <LogoText logo={vitejslogo} text="Vitejs"/>
                <LogoText logo={wordpresslogo} text="Wordpress"/>
                <LogoText logo={figmalogo} text="Figma"/>
              </div>
            </div>
          </div>
        </DivSection>
        <DivSection id="Projects">
          <TitleSection text="Projets"/>
          <div className='flex flex-row justify-center gap-[50px] flex-wrap'>
            <ProjectDiv title="Site d'association" image={associationimage} texte="Création d'un site WordPress pour une association dans un projet de groupe de 4 personnes." technologies="Wordpress" link="https://aurelien-brochetta.mds-montpellier.yt/"/>
            <ProjectDiv title="Site de partiel" image={partielimage} texte="Création d'un site WordPress pour une campagne éléctorale fictive dans un projet de groupe de 4 personnes." technologies="Wordpress" link="https://aurelien-brochetta.mds-montpellier.yt/partiel/"/>
            <ProjectDiv title="Site Portfolio fictif" image={portfoliofictifimage} texte="Création d'un site de portoflio fictif en utilisant Sass/SCSS fictif dans un projet de groupe de 3 personnes." technologies="VSCode - HTML - CSS - Sass/SCSS" link="https://github.com/AurelienB14/IntegrationWeb"/>
            <ProjectDiv title="Site Portfolio (actuel)" image={portfolioimage} texte="Création d'un site portfolio" technologies="VSCode - React - Tailwind - CSS - Vitejs - Figma" link="https://portfolio-aurelien-brochetta.vercel.app"/>
          </div>
        </DivSection>
        <DivSection id="Formations">
          <TitleSection text="Formations"/>
          <div className='flex flex-col sm:flex-row gap-[25px]'>
            <div className='flex flex-col justify-center gap-[20px]'>
              <SubTitleSection text="Lycée Jacques Prévert"/>
              <p className='flex text-center'>2021-2024 : Baccalauréat général - spécialités Mathématiques et NSI - Saint-Christol-Lez-Alès</p>
            </div>
            <div className='flex flex-col justify-center gap-[20px]'>
              <SubTitleSection text="My Digital School"/>
              <p className='flex text-center'>2024-2027 : Bachelor Cycle Web et Multimédia en cours: Développement web, marketing, design et cybersécurité - Montpellier</p>
            </div>
          </div>
        </DivSection>
        <DivSection id="Contact">
          <TitleSection text="Contact"/>
          <div className='flex flex-col md:flex-row gap-[25px]'>
            <div className='flex flex-col justify-center gap-[25px] w-full'>
              <SubTitleSection text="Infos"/>
              <div className='flex flex-col items-center gap-[20px]'>
                <p className='flex text-center'>Mail : aurelien.brochetta@gmail.com</p>
                <p>Ville : Montpellier</p>
                <p>Âge : 20 ans</p>
                <a className='flex text-center' href="https://github.com/AurelienB14" target='_blank'>Github : https://github.com/AurelienB14</a>
                <a className='flex text-center' href="https://www.linkedin.com/in/aur%C3%A9lien-brochetta-427409333/" target='_blank'>LinkedIn : Aurélien Brochetta | LinkedIn</a>
              </div>
            </div>
          </div>
        </DivSection>
        <div className='flex flex-col pt-[200px] p-[75px] gap-[50px]'>
          <div className='flex flex-col sm:flex-row sm:justify-between gap-[50px] sm:gap-0'>
            <div className='flex w-full sm:w-[200px] justify-center items-center'>
              <img src={logo} alt="logo"/>
            </div>
            <div className='flex flex-col items-center gap-[10px]'>
              <a href="#Hero">Hero</a>
              <a href="#About">À propos</a>
              <a href="#Competences">Compétences</a>
              <a href="#Projects">Projets</a>
              <a href="#Formations">Formations</a>
              <a href="#Contact">Contact</a>
            </div>
            <div className='flex flex-col justify-center items-center gap-[20px] w-full sm:w-[200px]'>
              <div className='flex flex-row justify-center items-center gap-[20px]'>
                <img src={githublogo} alt="Github logo" />
                <a href="https://github.com/AurelienB14" target='_blank' className='flex w-[50px] h-[50px]'>Github</a>
              </div>
              <div className='flex flex-row justify-center items-center gap-[20px]'> 
                <img src={linkedinlogo} alt="LinkedIn logo" />
                <a href="https://www.linkedin.com/in/aur%C3%A9lien-brochetta-427409333/" className='flex w-[50px] h-[50px]' target='_blank'>Linkedin</a>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <p className='flex text-center'>© 2026 Aurélien Brochetta. – Tous droits réservés</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

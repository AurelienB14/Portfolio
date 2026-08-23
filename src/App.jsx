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
import symfonylogo from "./assets/symfony-logo.svg"
import reactlogo from "./assets/react-logo.svg"
import sasslogo from "./assets/sass-logo.svg"
import tailwindlogo from "./assets/tailwind-logo.svg"
import vitejslogo from "./assets/vitejs-logo.svg"
import vscodelogo from "./assets/vscode-logo.svg"
import wordpresslogo from "./assets/wordpress-logo.svg"

import associationimage from "./assets/association-image.png"
import partielimage from "./assets/partiel-image.png"
import stagecoolairimage from "./assets/stagecoolair-image.png"
import portfoliofictifimage from "./assets/portfoliofictif-image.png"
import greenfallsotimage from "./assets/greenfallsot-image.png"
import portfolioimage from "./assets/portfolio-image.png"
import studiogamingimage from "./assets/studiogaming-image.png"
import resurgences34image from "./assets/resurgences34-image.png"
import pepsimage from "./assets/peps-image.png"
import tabledecocoimage from "./assets/tabledecoco-image.png"

import cubeshooterimage from "./assets/cubeshooter-image.png"

function App() {
  return (
    <>
      <div className='flex flex-col mx-auto'>
        <div className='fixed w-full flex justify-between flex-col sm:flex-row px-5'>
          <div className='flex justify-between items-center flex-row'>
            <img src={logo} alt="logo" className='w-[50px] h-[50px] cursor-pointer' onClick={() => document.getElementById("Hero").scrollIntoView()}/>
            <MenuButton/>
          </div>
          <div id="menuButtons" className='flex flex-row justify-end gap-1 sm:gap-5'>
            <div className='hidden sm:flex flex-col items-center sm:flex-row gap-1 sm:gap-5 w-[150px] sm:w-auto'>
              <Button text="À propos" scroll="About"/>
              <Button text="Compétences" scroll="Competences"/>
              <Button text="Projets" scroll="Projects"/>
              <Button text="Formations" scroll="Formations"/>
              <Button text="Contact" scroll="Contact"/>
            </div>
          </div>
        </div>
       <DivSection id="Hero">
        <div className='flex items-center flex-col align-center gap-[25px]'>
          <div className='flex items-center flex-col align-center gap-[10px]'>
            <h1 className="text-[50px] text-center">Aurélien BROCHETTA</h1>
            <h2 className="text-[45px] text-center">Étudiant développeur web</h2>
          </div>
            <Button text="Compétences" scroll="Competences"/>
        </div>
        </DivSection>
        <DivSection id="About">
          <TitleSection text="À propos"/>
          <div className='flex flex-col md:flex-row gap-[20px] md:gap-0'>
            <div className='flex md:w-1/2 md:px-[25px]'>
              <img src={photoprofil} className='w-full h-full object-cover' alt="Photo de profil"/>
            </div>
            <div className='flex md:w-1/2'>
              <p className='flex text-center md:text-left'>
                Passionné par l’informatique, j’ai découvert la programmation à l’âge de 14 ans, pendant le confinement. 
                J'ai appris à coder seul. Ce fut une révélation pour moi. L’informatique est un milieu dans lequel je m’épanouis désormais. <br /> <br />
                Au cours de mon cursus, j’ai pu acquérir de bonnes compétences en développement web, gestion de projet, marketing et design graphique. 
                Je découvre depuis cette année le domaine très enrichissant de la cybersécurité, et je suis tout à fait conscient de l’importance de ce domaine dans la sécurisation des données sensibles recueillies au sein des sociétés publiques et privées. <br /> <br />
                J’envisage de travailler dans le domaine du développement web. 
                Un stage ou une alternance me permettrait de découvrir davantage le monde professionnel et de développer mes compétences au contact de professionnels expérimentés.</p>
            </div>
          </div>
        </DivSection>
        <DivSection id="Competences">
          <TitleSection text="Compétences"/>
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
                <LogoText logo={symfonylogo} text="Symfony"/>
              </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <SubTitleSection text="Outils"/>
              <div className='flex flex-row justify-center gap-[25px] flex-wrap'>
                <LogoText logo={vscodelogo} text="Visual Studio Code"/>
                <LogoText logo={githublogo} text="GitHub"/>
                <LogoText logo={gitlogo} text="Git"/>
                <LogoText logo={vitejslogo} text="Vitejs"/>
                <LogoText logo={wordpresslogo} text="Wordpress"/>
                <LogoText logo={figmalogo} text="Figma"/>
              </div>
            </div>
          </div>
        </DivSection>
        <DivSection id="Projects">
          <TitleSection text="Projets réalisés"/>
          <div className='flex flex-row justify-center gap-[40px] md:gap-[50px] flex-wrap items-stretch'>
            <ProjectDiv title="Stage Table de Coco" image={tabledecocoimage} texte="Développement d'un site internet pour un restaurant de burger." date="juillet 2026" technologies="VSCode - HTML - CSS - JS" tech="Technologies" link="https://stage-tablecoco-aurelien-brochetta.vercel.app/index.html" buttontext="Lien site internet"/>
            <ProjectDiv title="Stage Association PEPS" image={pepsimage} texte="Amélioration du site internet d'une association au service de l'humain." date="juin-juillet 2026" technologies="Artisteer 4 - VSCode - HTML - CSS" tech="Technologies" link="https://association-peps30.fr/" buttontext="Lien site internet"/>
            <ProjectDiv title="Stage Résurgences 34" image={resurgences34image} texte="Modifications d'éléments du site internet et formation du personnel à l'installation et l'utilisation du logiciel Keepass." date="mai-juin 2026" technologies="Google Site - Keepass" tech="Technologies" link="https://sites.google.com/view/resurgences34/" buttontext="Lien site internet"/>
            <ProjectDiv title="Studio Gaming" image={studiogamingimage} texte="Développement d'un site de jeux vidéo avec des CRUD en groupes de 3 personnes." date="avril-juin 2026" technologies="VSCode - Symfony - React" tech="Technologies" link="https://github.com/AurelienB14/Projet-de-specialite" buttontext="Lien GitHub"/>
            <ProjectDiv title="Site Portfolio (actuel)" image={portfolioimage} texte="Création d'un site portfolio." date="mars 2026" technologies="VSCode - React - Tailwind - CSS - Vite - Figma" tech="Technologies" link="https://portfolio-aurelien-brochetta.vercel.app" buttontext="Lien site internet"/>
            <ProjectDiv title="Jeu Vidéo" image={greenfallsotimage} texte="Création d'un jeu vidéo en groupe de 4 personnes sur le thème de la température." date="février 2026" technologies="Godot - Python" tech="Technologies" link="https://aurelienb14.itch.io/greenfall-seeds-of-tomorrow" buttontext="Lien Itch.io (pc)"/>
            <ProjectDiv title="Site Portfolio fictif" image={portfoliofictifimage} texte="Création d'un site de portfolio fictif en utilisant Sass/SCSS fictif dans un projet de groupe de 3 personnes." date="décembre 2025" tech="Technologies" technologies="VSCode - HTML - CSS - Sass/SCSS" link="https://github.com/AurelienB14/IntegrationWeb" buttontext="Lien GitHub"/>
            <ProjectDiv title="Site de stage" image={stagecoolairimage} texte="Création d'un site WordPress pour une entreprise de rénovation : Coolair." date="avril-mai 2025" tech="Technologie" technologies="WordPress" link="https://stage.aurelien-brochetta.mds-montpellier.yt/" buttontext="Lien site internet"/>
            <ProjectDiv title="Site de partiel" image={partielimage} texte="Création d'un site WordPress pour une campagne électorale fictive dans un projet de groupe de 4 personnes." date="mars 2025" tech="Technologie" technologies="WordPress" link="https://aurelien-brochetta.mds-montpellier.yt/partiel/" buttontext="Lien site internet"/>
            <ProjectDiv title="Site d'association" image={associationimage} texte="Création d'un site WordPress pour une association dans un projet de groupe de 4 personnes." date="février 2025" tech="Technologie" technologies="WordPress" link="https://aurelien-brochetta.mds-montpellier.yt/" buttontext="Lien site internet"/>
          </div>
          <br />
          <TitleSection text="Projets personnels"/>
          <div className='flex flex-row justify-center gap-[40px] md:gap-[50px] flex-wrap'>
            <ProjectDiv title="Cube Shooter" image={cubeshooterimage} texte="Jeu vidéo dans lequel on contrôle un cube vert et doit tirer sur des cubes ennemis" date="2025-2026" tech="Technologies" technologies="Godot - Python" link="/cube-runner/index.html" buttontext="Jouer au jeu (pc uniquement)"/>
          </div>
        </DivSection>
        <DivSection id="Formations">
          <TitleSection text="Formations"/>
          <div className='flex flex-col items-center sm:flex-row gap-[25px]'>
            <div className='flex flex-col items-center gap-[20px] sm:w-1/2'>
              <SubTitleSection text="My Digital School"/>
              <p className='flex text-center'>2024-2027 : Bachelor Cycle Web et Multimédia en cours : Développement web, marketing, design et cybersécurité - Montpellier.</p>
            </div>
            <div className='flex flex-col items-center gap-[20px] sm:w-1/2'>
              <SubTitleSection text="Lycée Jacques Prévert"/>
              <p className='flex text-center'>2021-2024 : Baccalauréat général – spécialités mathématiques et NSI - Saint-Christol-lès-Alès.</p>
            </div>
          </div>
        </DivSection>
        <DivSection id="Contact">
          <TitleSection text="Contact"/>
          <div className='flex flex-col md:flex-row gap-[25px]'>
            <div className='flex flex-col justify-center gap-[25px] w-full'>
              <SubTitleSection text="Infos"/>
              <div className='flex flex-col items-center gap-[20px]'>
                <p className='flex text-center'>E-mail : aurelien.brochetta@gmail.com</p>
                <p>Ville : Montpellier</p>
                <p>Âge : 20 ans</p>
                <p>Permis B : en cours</p>
                <a className='flex text-center' href="https://github.com/AurelienB14" target='_blank'><u>GitHub : AurelienB14</u></a>
                <a className='flex text-center' href="https://www.linkedin.com/in/aur%C3%A9lien-brochetta-427409333/" target='_blank'><u>LinkedIn : Aurélien Brochetta</u></a>
              </div>
            </div>
          </div>
        </DivSection>
        <div className='flex flex-col pt-[200px] p-[75px] gap-[50px]'>
          <div className='flex w-full flex-col sm:flex-row sm:justify-between gap-[50px] sm:gap-0'>
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
            <div className='flex flex-col justify-center items-center gap-[20px] sm:w-[200px]'>
              <div className='flex flex-row justify-center items-center gap-[20px]'>
                <img src={githublogo} alt="GitHub logo" />
                <a href="https://github.com/AurelienB14" target='_blank' className='flex w-[50px] h-[50px]'><u>Github</u></a>
              </div>
              <div className='flex flex-row justify-center items-center gap-[20px]'> 
                <img src={linkedinlogo} alt="LinkedIn logo" />
                <a href="https://www.linkedin.com/in/aur%C3%A9lien-brochetta-427409333/" className='flex w-[50px] h-[50px]' target='_blank'><u>Linkedin</u></a>
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

import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Trait from "./trait";
import ListeTechnique from "./listetechnique";
import {InView} from "react-intersection-observer";
import {gsap} from "gsap"

const PratiqueSection2 = ({partTwoInview, backgroundColor}) => {
  const [titleWidth, setTitleWidth] = useState(0)
  const [sousTitreInView, setSousTitreInView] = useState(false)

  const trait = useRef(null)
  const sectionTitle = useRef(null)

  const size = useWindowSize()

  useEffect(() =>{
    setTitleWidth(sectionTitle.current.offsetWidth)
  },[titleWidth, size])

  useEffect(() => {
    if(partTwoInview){
      gsap.to(trait.current, {
        x: 0,
        duration: 1.4,
        delay : 0.5
      })
      gsap.to(".section-title-tech", {
        y: 0,
        duration: 1,
        opacity: 1,
        delay : 0.5
      })
    }
    
  }, [partTwoInview])

  useEffect(() => {
    if(sousTitreInView){
      gsap.to(".sous-titre", {
        autoAlpha: 1,
        duration: 1,
        delay : 0.5
      })
    }
    
  }, [sousTitreInView])


  return (
    <SectionWrapper style={{backgroundColor}}>
      <div className="section-title-tech" ref={sectionTitle}>
        <div>
          <span>Techniques & outils</span>  
        </div>
        <div className="trait" ref={trait} style={{margin : "50px 0 150px 0", position:"static"}}>
          <Trait width={titleWidth} bgColor="whitesmoke" height="8px"/>
        </div> 
      </div>

      <div>
        <InView className="sous-titre" threshold='1' onChange={(inView, entry)=>setSousTitreInView(inView)} >
          Au sein des séances, la psycho&shy;motri&shy;cien&shy;ne va uti&shy;liser un é&shy;ven&shy;tail varié de média&shy;teurs et d'ou&shy;tils en fonction des objec&shy;tifs visés :
        </InView>
        <div className="box-liste">
          
          <ListeTechnique image="equilibre.jpg" legende="Les techniques corporelles" classCss="firstItem">
            <span>Celles-ci incluent la danse, le mime, l’expression corporelle, les techniques dérivées du théâtre, du cirque, le sport, la boxe, etc.</span>
          </ListeTechnique>

          <ListeTechnique image="parcours.jpg" legende="Les parcours moteurs" classCss="secondItem">
            <span>Ces parcours composés d'obstacles sollicitent entre autres le goût pour l'effort, la concentration, la capacité à résoudre des problèmes et l'habileté.</span>
          </ListeTechnique>

          <ListeTechnique image="photo-1509781827353-fb95c262fc40.jpg" legende="Les supports musicaux" classCss="thirdItem">
            <span>Ces supports musicaux peuvent être de toute nature (enregistrements, instruments de musique, etc.) et trouvent leur utilité pour les profils sensoriels de type auditif, pour solliciter la concentration, pour les moments de relaxation, etc.</span>
          </ListeTechnique>

          <ListeTechnique image="pexels-photo-6941096.jpg" legende="Les activités manuelles psychomotrices" classCss="fourthItem">
            <span>
              Ces techniques concernent tout ce qui met en jeu la <b>motricité fine</b> (utilisation de certains petits muscles des doigts et des mains pour faire des mouvements précis afin de prendre et de manipuler de petits objets).
            </span>
          </ListeTechnique>

          <ListeTechnique image="20210611_104823.jpg" legende="Les techniques rééducatives"  classCss="fifthItem">
          <span>Elles incluent la &nbsp;
            <span className="mot-clef">
              <div className="tooltip" style={{width:'230px', height:"110px", top:"-110px", left:'-50px'}}>
                <span>La graphomotricité est l'ensemble des phénomènes psychomoteurs rentrant en jeu lors de l'acte d'écriture. La psychomotricité considère que l'on écrit avec son corps.</span>
              </div>graphomotricité
            </span>
            , et toutes sortes d'activité en rapport avec l’organisation dans l’espace.
          </span>
          </ListeTechnique>

          <ListeTechnique image="cube-six-gambling-play-37534.jpg" legende="Le jeu" classCss="sixthItem">
            Sous toutes ses formes (aussi bien symbolique que sous la forme de jeu de société), le jeu est un outil d'apprentissage puissant et une source de motivation dans la rééducation.
          </ListeTechnique>

          <ListeTechnique image="pexels-photo-4498219.jpg" legende="Les techniques de&nbsp;relaxation" classCss="seventhItem">
            <span>
              Elles concernent les techniques liées à la méditation, et au toucher thérapeutique. <b>Des ateliers spécialement dédiés à la relaxation sont accesibles à tous les publics en faisant la demande</b> (même hors suivi).
            </span>
            <div className="savoir-plus">
              <a href='/ateliers/#relaxation'>
                <span>En savoir plus sur nos Ateliers Relaxation<i className="fas fa-arrow-circle-right"/>
                </span>
              </a>
            </div>
          </ListeTechnique>

          <ListeTechnique image="guidance.jpg" legende="La guidance parentale" classCss="eighthItem">
            <span>
              La guidance parentale sert à aider les parents à mieux comprendre le fonctionnement de l’enfant dans ses difficultés. <b>Des ateliers basés sur la pratique et dédiés à la guidance parentale sont accessibles aux familles d'enfant diagnostiqué TDA/H.</b> Ils guideront la famille dans le quotidien et la scolarité de l'enfant.
            </span> 
            <div className="savoir-plus">
              <a href='/ateliers/#guidance'><span>En savoir plus sur nos Ateliers de guidance parentale<i className="fas fa-arrow-circle-right"/></span></a>
            </div>
          </ListeTechnique>
        </div>
      </div>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  transition: background-color 0.5s ease-out;
  padding-top: 6vh;
  padding-bottom: 25vh;

  .section-title-tech{
    padding: 0px 10px;
    margin : 10vh auto 6vh;
    text-transform: uppercase;
    color: white;
    font-family: 'Oxygen', sans-serif;
    letter-spacing: 1.5px;
    text-align : center;
    font-size :clamp(4em, 7.5vw, 8.5em);
    width : auto;
    height : auto;
    white-space:nowrap;
    transform: translateY(100%);
    opacity : 0;

    .trait{
      transform : translateX(-150%);
      z-index: -1;

    }
  }
  .sous-titre{
    font-size:clamp(1.3em, 4vw, 2.3em);
    font-family:'Oswald', sans-serif; 
    color :whitesmoke;
    margin:10vh 5vw;
    text-indent:25px;
    text-align: justify;
    letter-spacing: 0.5px;
    opacity : 0;
  }

  .box-liste{
    width : 1200px;
    margin : 0 auto;
  }

  @media (max-width: 745px){
    .section-title-tech{
      font-size: calc(1.25rem + 2.5vw) ;
    }
  }
  
`
export default PratiqueSection2;
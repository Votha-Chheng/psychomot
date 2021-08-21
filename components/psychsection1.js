import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import Trait from "./trait";


const PsychSection1 = ({backgroundColor}) => {
  const [titleWidth, setTitleWidth] = useState(0)

  const size = useWindowSize()

  const sectionTitle = useRef(null)
  const trait = useRef(null)

  useEffect(() =>{
    setTitleWidth(sectionTitle.current.offsetWidth)
  },[titleWidth, size])

  useEffect(() => {
    gsap.to(".section-title", {
      opacity : 1,
      y :0,
      duration : 0.7,
      delay : 0.1,
      ease : "Power4.easeOut"
    })
    gsap.to(".letter", {
      visibility : "visible",
      delay : 1.7,
      stagger : 0.08
    })
    gsap.to(".bg-img-container img", {
      opacity : 0.3,
      duration : 0.7,
      delay : 0.9
    })
    gsap.to(".texte", {
      autoAlpha : 1,
      duration : 0.7,
      delay : 1.4
    })
  },[])

  useEffect(() => {
    gsap.to(trait.current, {
      x: 0,
      duration: 1.2,
      delay : 0.2
    })
  }, [])
  
  const quote = "Corps, intelligence et émotions sont intimement liés..."
  const arrayQuote = quote.split("")


  return (
    <SectionWrapper id='body-section' data-scroll style={{backgroundColor}}> 
      <div ref={sectionTitle} className="section-title">
        <h2 style={{zIndex: "1"}}>
          <span>Psychomotricité</span>  
        </h2>
        <div className="trait" ref={trait} style={{margin : "50px 0px 0px 0px"}}>
          <Trait width={titleWidth} bgColor="#28536b" height="8px"/>
        </div> 
      </div>
      
      <div className="colonnes" id="colonnes" data-scroll>
        <div className="bg-img-container">
          <img src="/images/20210422_145406.jpg" />
        </div>
        <div className="side-title-container">
          <div className='side-title' id="side-title">
            <div data-scroll data-scroll-sticky data-scroll-target="#side-title">
              <i className="fas fa-quote-left letter" style={{fontSize:'0.5em', transform:'translateY(-1em)', transition:"opacity 0.5s"}}/>
              {arrayQuote.map((letter, index)=>
                <span key={index} className= "letter">
                  {letter}
                </span>
              )}
              &nbsp;<i className="fas fa-quote-right letter" style={{fontSize:'0.5em', transform:'translateY(0.3em)', marginRight:"5px"}}/>
            </div>
          </div>
          <div className="img-logo">
            <img src="/images/Psychomotricité.png" height="280px"/>
          </div>
        </div>
        
        <div className="texte">
          <div>
            La psychomotricité est une <b>pro&shy;fession para&shy;médicale</b>, auxi&shy;li&shy;aire de la médecine. Elle est enca&shy;drée par le mini&shy;stère de la santé via un di&shy;plô&shy;me d’Etat. Son exer&shy;cice est régi par le <a href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006703759/2004-08-07/" target="_blank">décret de compé&shy;tence n°88-659 du 6 mai 1988</a>.
          </div>
          <div>
            Le travail de la psycho&shy;motri&shy;cien&shy;ne consiste à <b>pré&shy;venir, dé&shy;pister, trai&shy;ter les troubles et dys&shy;fonc&shy;tion&shy;nements psy&shy;cho&shy;mo&shy;teurs</b>, en plus de faire de <b>l’éducation à la santé</b>. Elle va s’intéres&shy;ser à la <b>glo&shy;balité</b> de la person&shy;ne, à son <b>histoire de vie</b>, son <b>environ&shy;nement</b> et aux fonctions psy&shy;cho&shy;motrices que sont la <b>motricité globale</b> (coordi&shy;nations, équilibre, etc.), la <b>motri&shy;cité fine</b> (dextérité digitale et manuelle, etc.), le schéma corpo&shy;rel, l’orien&shy;tation et l’orga&shy;nisation dans le temps et l’espace, le tonus, la posture. Il va aussi être attentif à la <b>communication</b>, la <b>gestion des émotions</b> et enfin aux <span className="mot-clef"><div className="tooltip" style={{width:'220px', height:"110px", top:"-110px", left:'-50px'}}><span>Habiletés cog&shy;ni&shy;tives qui permet&shy;tent d'exécuter des tâches en contrôlant son comportement, par oppo&shy;sition à automatisme.</span></div>fonc&shy;tions exé&shy;cu&shy;tives</span> <b>pour mieux comprendre l’individu</b>.
          </div>
          <div>
            Le but étant d’amener la person&shy;ne à un <b>équi&shy;libre entre le corps, les émo&shy;tions, l’aspect psy&shy;chique et cogni&shy;tif</b> et ce, afin de pouvoir <b>s'épa&shy;nouir</b> et devenir <b>auto&shy;nome</b> dans son quo&shy;tidien en ac&shy;ceptant, réduisant, rééduquant et/ou com&shy;pen&shy;sant le trouble psy&shy;chomoteur.
          </div>
        </div>
      </div>  
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  padding : 50px 10px 50vh 15px;
  z-index : 0;
  text-align : center;
  transition : background-color 0.5s ease-out;

  .letter{
    visibility: hidden;
  }

  .section-title{
    padding: 0px 10px;
    margin : 10vh auto 0px;
    text-transform: uppercase;
    font-family: 'Oxygen', sans-serif;
    letter-spacing: 1.5px;
    text-align : center;
    width : 100%;
    height : auto;
    white-space:nowrap;
    transform: translateY(50%);
    opacity : 0;

    h2{
      margin: 0px;
      font-size :clamp(4rem, 10vw, 11rem);
      -webkit-text-stroke : 4px #28536b;
      color: transparent;
    }
    .trait{
      transform : translateX(-150%);
    }
  }
  @media screen and (max-width:1080px){
    .colonnes{
      flex-direction: column-reverse;
      
      .texte{
        max-width : 100% !important;
      }
    }
    .side-title{
      display: none;
    }
  }
  @media screen and (max-width:680px){
    .section-title {
      h2{
        font-size: calc(1.1rem + 3.8vw);
        -webkit-text-stroke :unset;
        color : #28536b;
      }
    }  
    div.texte{
      font-size: calc(1rem + 1.2vw)  !important;
      padding: 20px 2px !important;
    } 
  }

  .colonnes{
    margin : 0vh 20px 20vh;
    //font-size : 1.6em;
    display : flex;
    height : 100%;
    position : relative;
    overflow : hidden;
    padding-bottom: 10vh;

    .bg-img-container{
      position: absolute;
      z-index : -1;
      
      img{
        height: 100vh;
        filter: brightness(150%) blur(3px);
        opacity : 0;
      }
    }

    .side-title {
      min-width : 40vw;
      height : 60%;
      font-family: 'Marck Script', cursive;
      font-size: calc(2.2vw + 1.6rem);
      padding: 75px 20px 0px;
      margin-bottom: 65px;
      font-style: italic;
      color : #967388;
    }
    .img-logo{
      height : 35%;
    }
    .texte{
      max-width : 50vw;
      line-height : 2.6rem;
      padding: 50px 25px 50px 15px;
      text-indent : 3vw;
      text-align : justify;
      font-family: "Oswald", "cursive";
      letter-spacing: 0.8px;
      font-size: clamp(1.4em, 1.7vw, 1.6em) ;
      color: #326886;
      opacity : 0;
    }
  }
  span.mot-clef{
    text-indent: 0px;
  }

  .mot-clef{
    text-decoration: underline dotted;
    cursor : help;
    position: relative;
    display: inline-block;
    color: #28536b;
    font-weight: bold;
    width: auto;

    .tooltip{
      font-weight: 100;
      text-decoration: none;
      background-color: #28536b;
      z-index: 1;
      display: inline-block;
      position: absolute;
      border-radius: 5px;
      visibility: hidden;
      color: white;
      transition: opacity 0.4s ease-out;
      opacity: 0;
      font-size: 15px;
      padding: 10px;
      text-align: center;
      line-height: 1.2em;

      span{
        display: inline;
      }

      &::after{
        clip-path: polygon(52% 100%, 0 80%, 100% 80%);
        content : "";
        position: absolute;
        background-color:#28536b;
        z-index: 1;
        bottom : -8px;
        left: 50%;
        width: 50px;
        height: 50px;
      }
    }
    &:hover .tooltip{
      visibility : visible;
      opacity: 0.95;
    }
  }

  p{
    margin : 0;
  }

  a{
    color: #9f7f92;
    text-decoration: underline;
    font-style: italic;
  }
  a:hover{
    filter: brightness(120%);
  }
  ul{
    margin: 0px 0px 15px;
    list-style-type: square;
  }
  li{
    text-indent: 0;
  } 

`

export default PsychSection1;
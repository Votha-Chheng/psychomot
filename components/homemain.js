import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWindowSize from '../hooks/useWindowSize'
import Trait from "./trait";

const HomeMain = () => {
  const [titleWidth, setTitleWidth] = useState(0)
  const [flipEnfant, setFlipEnfant] = useState(false)
  const [flipAdulte, setFlipAdulte] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [positionFlipEnfant, setPositionFlipEnfant] = useState({top : 0, left : 0})
  const [positionFlipAdulte, setPositionFlipAdulte] = useState({top : 0, left : 0})

  const nomH1 = useRef(null)
  const cardFlipEnfant = useRef(null)
  const cardFlipAdulte = useRef(null)
  const banner = useRef(null)
  const mainTrait = useRef(null)
  const title = useRef(null)
  const wallMenu = useRef(null)
  const photoId = useRef(null)
  const question1 = useRef(null)
  const question2 = useRef(null)
  const icon2 = useRef(null)
  const question3 = useRef(null)
  const icon3 = useRef(null)

  const size = useWindowSize()

  useEffect(()=>{

    gsap.to(mainTrait.current, {
      x : 0,
      delay : 2.3,
      duration : 2,
      ease : "Power4.easeOut"
    })

    gsap.to(".profession h1", {
      y : 0,
      delay : 3.3,
      duration : 1,
      ease : "Circ.easeOut"
    })

    gsap.to(title.current, {
      y : 0,
      delay : 3.3,
      duration : 1,
      ease : "Circ.easeOut"
    })

    gsap.to(photoId.current, {
      opacity : 1,
      delay : 3.9,
      duration : 1.8,
      ease : "Power4.easeOut"
    })

    gsap.to(wallMenu.current, {
      transform : "rotateX(0deg)",
      delay : 0.8,
      duration : 1.5,
      ease : "Circ.easeOut"
    })
    gsap.to(wallMenu.current, {
      rotation : 45,
      delay : 1.5,
      duration : 0.8,
      ease : "Circ.easeOut"
    })
    gsap.to(question1.current, {
      y : 0,
      autoAlpha : 1,
      duration : 0.5,
      delay : 4
    })
    gsap.to(question2.current, {
      y : 0,
      autoAlpha : 1,
      duration : 0.5,
      delay : 4.2
    })
    gsap.to(icon2.current, {
      y : 0,
      autoAlpha : 1,
      duration : 0.5,
      delay : 4.2
    })
    gsap.to(question3.current, {
      y : 0,
      autoAlpha : 1,
      duration : 0.5,
      delay : 4.4
    })
    gsap.to(icon3.current, {
      y : 0,
      autoAlpha : 1,
      duration : 0.5,
      delay : 4.4
    })
  },[])

  useEffect(()=>{
    setTitleWidth(nomH1.current.offsetWidth)
    
  },[titleWidth, size])

  useEffect(()=>{
    setPositionFlipEnfant({top : cardFlipEnfant.current.offsetTop, left : cardFlipEnfant.current.offsetLeft}) 
  },[size])

  useEffect(()=>{
    if(cardFlipAdulte.current){
      setPositionFlipAdulte({top : cardFlipAdulte.current.offsetTop, left : cardFlipAdulte.current.offsetLeft})
    }
  }, [size])

  return (
    <WrapperSection >      
      <div id='banner' className="banner" data-scroll data-scroll-speed="-2.5" ref={banner}>
        <img src="/images/20210422_144500.jpg"/>
      </div>
        
      <div className="banner-container">
        <div className='wall-menu' ref={wallMenu} style={{marginRight:`${size.height>700 ? "15px":""}`}}>
          <div className="vignette" ref={photoId}>
            <img src='/images/20210611_104823mod.jpg' alt='portrait'/>

          </div>
          
        </div>
        <div className="banner-text">
          <div className='title'>
            <h1 ref={title}>
              Estelle Bétry
            </h1>
          </div>
          
          <div ref={mainTrait} className='main-trait'>
            <Trait bgColor="whitesmoke" height='6px' width={titleWidth} />
          </div>
            
          <div className='profession'>
            <h1>
              <span ref={nomH1}>Psychomotricienne D.E.</span>
            </h1>
          </div>
          
        </div>
      </div>
      <div className='question' >
        <h2 data-scroll data-scroll-speed="0.5" ref={question1}>Quand faire appel à une psychomotricienne...</h2>
      </div>
 
      <section className="cards-part">
        <div className='card-flip enfant' ref={cardFlipEnfant}>
          <div className={`card-container ${flipEnfant ? "flip back" : "front"}`}>
            <div className="recto">

              <img src="/images/20210422_144500.jpg" alt='bg' style={{top:(positionFlipEnfant.top)*(-1), left:`${(positionFlipEnfant.left-20)*(-1)}px`, backfaceVisibility : "hidden"}} data-scroll data-scroll-speed="-2.5"/>
              <h2 ref={question2}>...chez l'enfant ?</h2>
              <i ref={icon2} className="fas fa-arrow-circle-right fa-3x" style={{cursor:'pointer'}} onClick={()=>setFlipEnfant(prev=> !prev)}></i>
            </div>
            <div className="verso">
              <div>Dans le cadre :</div>
              <ul>
                <li style={{display:`${(size.height<910)||(size.width<675) ? "none":""}`}}>d'un bilan psychomoteur</li>
                <li style={{display:`${(size.height<730)||(size.width<675) ? "none":""}`}}>d'un dépistage des troubles du spectre autistique</li>
                <li>des troubles graphomoteurs</li>
                <li style={{display:`${(size.height<855)||(size.width<675) ? "none":""}`}}>des troubles de la concentration et TDA/H</li>
                <li>de troubles de la coordination, maladresse et dyspraxie</li>
                <li>et d'autres troubles liés au développement psychomoteur dans l'enfance...</li>
              </ul>
              <div className='button'>
                <a href="/psychomotricite/#troubles-enfant">En savoir plus</a>
              </div>
              <i className={`fas fa-arrow-circle-left fa-2x ${flipEnfant ? "front" : "back"}`} style={{cursor:'pointer', zIndex:'10'}} onClick={()=>setFlipEnfant(prev=> !prev)}></i>
            </div>
          </div> 
        </div>
        <div className='card-flip adulte' ref={cardFlipAdulte}>
          <div className={`card-container ${flipAdulte ? "flip back" : "front"}`}>
            <div className="recto">

              <img src="/images/20210422_144500.jpg" alt='bg' style={{top:(positionFlipAdulte.top)*-1, left:`${(positionFlipAdulte.left-15)*-1}px`, backfaceVisibility : "hidden"}} data-scroll data-scroll-speed="-2.5"/>
              
              <h2 ref={question3}>...chez l'adulte ?</h2>
              <i ref={icon3} className="fas fa-arrow-circle-right fa-3x" style={{cursor:'pointer'}} onClick={()=>setFlipAdulte(prev=> !prev)}></i>
            </div>
            <div className={`verso`} style={{zIndex : '10'}}>
              <div>Dans le cadre :</div>
              <ul>
                <li style={{display:`${(size.height<910)||(size.width<675) ? "none":""}`}}>de la gestion du stress</li>
                <li style={{display:`${(size.height<730)||(size.width<675)? "none":""}`}}>de troubles psychosomatiques</li>
                <li>de troubles tonico-émotionnels (tics, bégaiement)</li>
                <li style={{display:`${(size.height<730)||(size.width<675) ? "none":""}`}}>de symptômes anxio-dépressifs</li>
                <li>d'un trouble du comportement alimentaire</li>
                <li style={{display:`${(size.height<855)||(size.width<675) ? "none":""}`}}>de difficultés émotionnelles et relationnelles</li>
                <li>et d'autres troubles psycho-émotionnelles de l'âge adulte...</li>
              </ul>
              <div className='button'>
                <a href="/psychomotricite/#troubles-adulte" >En savoir plus</a>
              </div> 
              <i className={`fas fa-arrow-circle-left fa-2x ${flipAdulte ? "front" : "back"}`} style={{cursor:'pointer', zIndex:'10'}} onClick={()=>setFlipAdulte(prev=> !prev)}></i>
            </div>
          </div> 
        </div>
      </section>
      
    </WrapperSection>
  );
}

const WrapperSection = styled.section`

  height: 200vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color : white;

  &::after {
    height : 8vh;
    width: 110%;
    content : '';
    position : absolute;
    background-color : rgba(255, 255, 255);
    filter : blur(5px);
    bottom : -5px;
    left : -50px;
    box-shadow : 0px -50px 80px 75px rgba(255,255, 255);
  }

  .banner{
    position : absolute;
    width: 100%;
    overflow-x: hidden;
    left: 0;

    img{
      height: 200vh;
      transform: translateX(-125px);
      filter : brightness(65%) blur(5px)
    }
  }

  //Elements
  .question {
    position : absolute;
    left : 50%;
    top : 85vh;
    color: whitesmoke;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;

    h2{
      font-family: 'Marck Script', cursive;
      letter-spacing: 1.5px;
      font-size: clamp(2rem, 5vw, 3.5rem);
      text-shadow : 0px 3px 5px black;
      margin-top : -10%;
      margin-bottom : 15px; 
      z-index:2;
      background-color : transparent;
      opacity : 0;
      transform : translateY(100%);
      font-weight: normal;
      width : 100%;
    }
  }

  .flip{
    transform : rotateY(180deg); 
  }
  .front{
    z-index : 5;
  }
  .back{
    z-index : -1;
  }
  .card-flip.enfant{
    left : 35%;
  }
  .card-flip.adulte{
    left : 64%;
  }
  .card-flip{
    top : 85vh;
    position : absolute;
    width : 320px;
    height : 47vh;
    transform: translateX(-50%);
    background-color : transparent;
    overflow : hidden;
    border-radius : 10px; 

    .card-container{
      position: relative;
      width : 100%;
      height : 100%;
      transform-style : preserve-3d;
      transition : 0.8s ease-out;
      border-radius : 10px;
      
      .recto, .verso{
        position : absolute;
        backface-visibility : hidden;
        width : 100%;
        height : 100%;
        border-radius : 10px;
      }
      .recto {
        text-align : center;

        h2, i{
          z-index : 3;
          color : whitesmoke;
          transform : translateZ(20px) translateY(100%);
          -webkit-transform : translateZ(20px);
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          text-shadow : 0px 3px 2px black; 
          opacity : 0;
          
        }
        h2 {
          margin-top : 5px;
          font-weight: normal;
          font-family: 'Marck Script', cursive;
          letter-spacing: 1.5px;
          font-size : calc(1.8rem + 1vw);
        }
        img{
          position : absolute;
          height: 200vh;
          filter : brightness(64%) blur(5px);
          z-index : -1;
        }
      }
      .verso {
        transform : rotateY(180deg);
        background-color : white;
        padding : 15px;
        color : #28536b;
        font-size : 1.1em;
        font-family: 'Oswald', sans-serif;

        div{
          font-weight: bold;
          letter-spacing: 1.2px;
        }

        ul{
          margin-top : 5px;
          margin-bottom : 10px;
          transform : translateZ(160px);
          -webkit-transform : translateZ(160px);
          text-align : left;
          padding-left :25px;
          

          li{ 
            list-style-type : square ;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d; 
            margin-bottom : 3px;
          }
        }
        .button{
          width: 150px;
          font-weight: 0;
          height:1.8em;
          font-size : 1em; 
          background-color : #9f7f92;
          color : white;
          text-align : center;
          margin : 0 auto;
          border-radius : 5px;
          cursor :pointer;
          transition : transform 0.3s ease-out;
          padding : 4px;
          font-family : 'Oxygen', sans-serif;

          :hover{
            transform : scale(1.2);
          }
        }
        i{
          color : #9f7f92;
        }
      } 
    }
  }

  .banner-container{
    display : flex;
    justify-content: center;
    height: auto;
    align-items: center;
    position: absolute;
    top: 12%;
    left: 50%;
    transform : translateX(-50%);
    width: auto;

    .wall-menu{
      margin-left : -50px;
      margin-top : 25px;
      width: 130px;
      height: 130px;
      background-color : whitesmoke;
      transform : rotateX(-90deg);
      transform-style : preserve-3d;
      z-index : 3;
      overflow : hidden;
      justify-content: center;
      padding : 0.5vh;
      border : 5px solid whitesmoke;
      border-radius : 5px;

      .vignette{
        overflow : hidden;
        width : 100%;
        height : 100%;
        position: relative;
        border : 3px solid #28536b;
        border-radius : 10px;
        opacity : 0;
        padding-left : 0.5vh;
        

        img{
          width : 190px;
          transform : translate(-10%, -38%) rotate(135deg);
          filter: brightness(125%);
          opacity: 0.9;
        }
      }
    }
    .banner-text{
      z-index: 3;
      overflow : hidden;

      .main-trait{
        transform : translateX(-110%);
        margin-left: 5px;
        overflow : hidden;
      }

      div h1{
        margin:0;
        text-align : left;
        color : white;
        text-shadow : 0px 3px 5px black; 
      }
      //On ne touche plus !
      .title{
        margin-top : 2px;
        -webkit-margin-before : 2px;
        overflow : hidden;

        h1{
          font-size : 4em ;
          font-family: 'Marck Script', "cursive";
          font-weight : 100;
          transform : translateY(125%);
          padding-left : 5px;
          
        }  
      }
      .profession {
        overflow-y : hidden;
        width : 120%;

        h1{
          font-family : "Oxygen", sans-serif ;
          font-size : 2.3em;
          font-style : italic;
          margin-bottom : 10px;
          transform : translateY(-125%);
          span{
            
          }
        }
        
      }
    }
  } 

@media (max-width: 1200px){
  .card-flip.enfant{
    left : 25%;
  }
  .card-flip.adulte{
    left : auto;
    right :-5%;
  }
}

  
@media (max-width: 840px){
  .card-flip.enfant{
    top :70vh;
    left : 175px;
  }
  .card-flip.adulte{
    left : auto;
    right :-150px;
    top :70vh;
  }
  .question{
    top : 60vh;
  }
}

@media (max-width: 675px){
  .card-flip{
    height : 300px;
    left : 50vw !important;
  }
  .card-flip.enfant{
    top:325px;
  }
  .card-flip.adulte{
    top:635px;
  }
  .banner-container{
    top : 7.5vh;
  }
  .main-trait{
    margin-left: 0px !important;
  }
  .wall-menu{
    width: 100px !important;
    height: 100px !important;
    margin-top: 12px !important;
  }
  .title h1{
    font-size:2.5rem !important;
  }
  .profession h1{
    font-size:1.5rem !important;
  }
  .question{
    width : 100%;
    top : 275px;

    h2{
      width : 100%;
      font-size:2.3rem;
    } 
  }
}
@media (max-width: 575px){
  .wall-menu{
    display: none;
  }
  .question{
    width : 100%;
    top : 270px;

    h2{
      width : 100%;
      font-size: calc(1.5rem + 2vw);
    } 
  }
  .recto{
    h2{
      font-size: calc(1.5rem + 2vw) !important;
    }
  }
}

//Max-height
@media (max-height:700px){
  div.banner-container{
    top: 80px;
  }
  .wall-menu{
    margin-right: 10px;
  }
}

`

export default HomeMain;
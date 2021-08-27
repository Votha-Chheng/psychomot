import Head from "next/head";
import {gsap} from 'gsap'
import styled from "styled-components";
import Menu from "../components/menu";
import { SmoothScrollProvider } from "../src/SmoothScroll.context";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Footer from "../components/footer";
import {InView} from "react-intersection-observer";
import Trait from "../components/trait";

const infosPage = () => {
  const [titleWidth, setTitleWidth] = useState(0)
  const [footerInView, setFooterInView] = useState(false)
  const [section2, setSection2] = useState(false)
  const [section3, setSection3] = useState(false)

  const size = useWindowSize()

  const trait = useRef(null)
  const sectionTitle = useRef(null)
  const title = useRef(null)

  useEffect(() =>{
    setTitleWidth(sectionTitle.current.offsetWidth)

  },[titleWidth, size])

  useEffect(() => {
    gsap.to(trait.current, {
      x: 0,
      duration: 1.2,
      delay : 0.2
    })

    gsap.to(".section-title", {
      y: 0,
      autoAlpha : 1,
      duration : 0.5,
      delay : 0.2
    })
    gsap.to(".bg-image img", {
      autoAlpha: 0.5,
      duration : 0.8,
      delay : 1
    })
    gsap.to(".first", {
      autoAlpha: 1,
      duration : 0.5,
      delay : 0.9
    })
    gsap.to(".card-body", {
      y: 0,
      autoAlpha : 1,
      duration : 0.5,
      delay : 1,
      stagger : 0.2
    })
    
    
  },[])

  useEffect(() => {
    if(section2){
      gsap.to("h3.second", {
        autoAlpha : 1,
        duration : 0.5,
      })
      gsap.to(".tarif", {
        autoAlpha : 1,
        x : 0,
        duration : 0.7,
      })
    }
  },[section2])

  useEffect(() => {
    if(section3){
      gsap.to("h3.third", {
        autoAlpha : 1,
        duration : 0.5,
      })
      gsap.to(".mutuelle", {
        autoAlpha : 1,
        x : 0,
        duration : 0.7,
      })
    }
  },[section3])


  return (
    <div>
      <Head>
        <title>Estelle Bétry psychomotricienne Mouriès Alpilles - Psychomotricité - Public - Troubles psychomoteurs - TDAH</title>   
      </Head>

        <SmoothScrollProvider options={{smooth : true, multiplier : 1, firefoxMultiplier: 1000}}>
          <Wrapper data-scroll-container>
            
            <div id='super-container'>
              <div className="menu-container" data-scroll data-scroll-sticky data-scroll-target="#super-container">
                <nav>
                  <Menu color="white" backgroundColor="#9f7f92"/>
                </nav>
              </div>
              
              <div className="section-title" ref={sectionTitle}>
                <div>
                  <span ref={title}>Infos pratiques</span>  
                </div>
                <div className="trait" ref={trait} style={{margin :`${size.width<1365? "20px":"40px"} 0 0px 0`, position:"static"}}>
                  <Trait width={titleWidth} bgColor="#326886" height={`${size.width<1365? "5px" : "8px"}`}/>
                </div> 
              </div>

              <main>
                <section>
                  <h3 className='sub-title first'>Prestations proposées</h3>
                  <div className="cards-container">
                    <div className="card-body">
                      <h4>Bilan psychomoteur</h4>
                      <div className="link">
                        <a href="/pratique">
                          <span>En savoir plus <i className="fas fa-arrow-circle-right fa-1x"/></span>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4>Suivi individuel et/ou groupal</h4>
                      <div className="link">
                        <a href="/infos/#contact">
                          <span style={{cursor:"pointer"}}>
                            Me contacter <i className="fas fa-arrow-circle-right fa-1x"/>
                          </span> 
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4>Equipe éducative/réunion pédagogique</h4>
                      <div className="link">
                        <a href="/infos/#contact">
                          <span style={{cursor:"pointer"}}>
                            Me contacter <i className="fas fa-arrow-circle-right fa-1x"/>
                          </span> 
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4>Entretien parental</h4>
                      <div className="link">
                        <a href="/infos/#contact">
                          <span style={{cursor:"pointer"}}>
                            Me contacter <i className="fas fa-arrow-circle-right fa-1x"/>
                          </span> 
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4>Atelier guidance parentale (BARKLEY)</h4>
                      <div className="link">
                        <a href="/ateliers">
                          <span>
                            En savoir plus <i className="fas fa-arrow-circle-right fa-1x"/>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4>Atelier de relaxation pour enfant</h4>
                      <div className="link">
                        <span>
                          <a href="/ateliers/#relaxation">
                            En savoir plus <i className="fas fa-arrow-circle-right fa-1x"/>
                          </a>
                        </span> 
                      </div>
                    </div>  
                  </div>
                </section>
                <InView as="section" threshold="0.5" onChange={(inView, entry)=>setSection2(inView)}>
                  <h3 className='sub-title second'>Tarifs</h3>
                  <div className="texte-tarif tarif">
                    La publication des tarifs pour les sé&shy;ances liées à un par&shy;cours de soins psy&shy;chomoteurs (et non les ateliers) sur in&shy;ternet <b>peut être consi&shy;dérée com&shy;me de la publicité</b>. En re&shy;vanche, <b>les mon&shy;tants des soins sont af&shy;fichés au cabinet de psycho&shy;motricité</b>. Vous pou&shy;vez me contacter par téléphone ou par e-mail pour tout renseigne&shy;ment ou de&shy;man&shy;de de devis.
                  </div>
                </InView>
                <InView as="section" threshold="0.5" onChange={(inView, entry)=>setSection3(inView)}>
                <h3 className='sub-title third'>Remboursement des soins</h3>
                  <div className="texte-tarif mutuelle">
                    <p>
                      <b>Les soins psychomoteurs ne sont pas remboursés par la sécurité sociale</b> mais vous pouvez vous ren&shy;seigner auprès de <b>votre mutuelle qui peut prendre en charge quelques séan&shy;ces</b> (comme MGEN, AG2R, etc.).
                    </p>
                    <p>
                      La <a href="http://www.mdph13.fr" target="_blank">MDPH des Bouches-du-Rhône</a> peut allouer une allocation (AEEH, AAH) en fonction de certains cri&shy;tères. Vous pouvez vous renseigner auprès du CCAS de votre ville pour avoir une aide à la constitution d’un dossier.
                    </p>
                  </div>
                </InView>
                <div className="bg-image">
                  <img src="/images/20210422_145038.jpg"/>
                </div>
              </main>
              
              <div className="separateur" style={{backgroundColor:`${footerInView? "#9f7f92":"transparent"}`}}/>
              <InView as="div" id="contact" threshold="0.9" onChange={(inView, entry)=>setFooterInView(inView)}>
                <Footer color="#9f7f92"/>
              </InView>
              
            </div> 
            
          </Wrapper> 
        </SmoothScrollProvider>
    </div>
  )
}

const Wrapper = styled.div`
  main{
    position: relative;
    overflow: hidden;
    padding: 5vh;
    
    .bg-image{
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      
      img{
        filter: blur(5px);
        opacity: 0;
        transform: translateY(-10%);
        width:100vw;
      }
    }
  }

  #super-container{
    position: relative;
  }

  .separateur{
    width: 100vw;
    height: 40vh;
    margin-top: -1vh;
    transition: background-color 0.7s ease-out;
  }

  div.menu-container{
    position: absolute;
    background: #9f7f92;
    width: 100%;  
    height: 50px;
    z-index: 10;

    nav{
      z-index: 10;
      position : absolute;
      width: 560px;
      left: 15px;
    }
  }

  .section-title{
    padding: 90px 10px 0vh;
    text-transform: uppercase;
    -webkit-text-stroke : 4px #28536b;
    color: transparent;
    font-family: 'Oxygen', sans-serif;
    letter-spacing: 1.5px;
    text-align : center;
    font-size :clamp(4em, 7.5vw, 8.5em);
    width : auto;
    white-space:nowrap;
    opacity: 0;
    transform: translateY(20%);

    .trait{
      transform : translateX(-150%);
      z-index: -1;
    }
  }

  h3.sub-title{
    font-size: 3rem;
    font-family: 'Oxygen', sans-serif;
    color : #745869;
    margin-left: 5vw;
    border-bottom: 2px solid #28536b;
    width: 85%;
    opacity: 0;
  }

  .cards-container{
    display : flex;
    width: 85%;
    margin: 0 auto;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .card-body{
      width: 450px;
      height: 140px;
      border: 5px solid #2c5d77;
      padding: 20px 10px;
      border-radius: 5px;
      color:#2c5d77;
      background-color: whitesmoke;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 50px;
      opacity: 0;
      transform: translateY(50%);
      
      h4{
        text-align: center;
        margin: 0px 0px 10px;
        font-size: 1.45rem;
        border-bottom: 2px solid #28536b;
        font-family: "Oswald", sans-serif;
        letter-spacing: 2px;
        font-weight:bolder;
      }
      .link{
        text-align: right;
        font-family: "Oxygen", sans-serif;
        font-style: italic;
        font-size: 1.1rem;
        display: inline-block;
        color: whitesmoke;
        margin-top : 20px;

        span{
          border: 1px solid #745869;
          background-color: #745869;
          padding: 3px 9px;
          border-radius: 0.6rem;

          i{
            margin-left: 5px;
          }
        } 
      }
    } 
  }
  section{
    padding-bottom: 10vh;
    position: static;
  }
  .texte-tarif.mutuelle{
    transform: translateX(20%);
  }
  .texte-tarif{
    margin: 0 auto;
    padding: 20px;
    width: 80%;
    border-top : 3px solid #28536b ;
    border-right : 3px solid #28536b ;
    border-bottom :3px solid #28536b ;
    border-left: 10px solid #28536b ;
    font-family: "Oswald", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.75px;
    text-indent: 20px;
    text-align:justify;
    color: #326886;
    background-color: whitesmoke;
    transform: translateX(-20%);
    opacity:0;


    p{
      margin: 0px;
      a{
        color: #745869;
        font-style: italic;
        &:hover{
          filter: brightness(125%);
          text-decoration: underline;
        }
      }
    }
  }
  
  @media (max-width:600px){
    div.card-body{
      min-height: 180px;
      min-width: 350px;
    }
    div.texte-tarif{
      width: 350px;
      font-size: 1.15rem;
    }
    .sub-title{
      font-size: 2rem !important;
    }
    main{
      padding: 0px;
    }
  }

  @media (max-width:595px){
    div.section-title{
      font-size:calc(1.8rem + 2.5vw) !important;
      -webkit-text-stroke:unset;
      color: #28536b;
    }
  }

  //Position sticky elements when locomotive scroll doesn't work
  @media (max-width: 1024px){
    width: 100vw !important;
    overflow-x: hidden;
    
    div.menu-container{
      position: fixed !important; 
      top : 0;
      left : 0;
    }
  }

`

export default infosPage;
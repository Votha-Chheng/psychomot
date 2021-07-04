import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

const TableauTroubles = () => {
  const [tableInView, setTableInview] = useState(false)
  const [vignetteEnfant, setVignetteEnfant] = useState("1")
  const [hovered, setHovered] = useState("")

  const size = useWindowSize()

  const troubleContainer = useRef(null)

  useEffect(() => {
    if(tableInView){
      gsap.to("#container-tableau-enfant", {
        x:"50%",
        duration : 1,
        autoAlpha : 1
      })
      gsap.to("h3", {
        duration : 0.5,
        autoAlpha : 1,
        delay:0.8,
        stagger:0.1
      })
      gsap.to(".bg-image", {
        opacity : 0.3,
        delay : 1.2,
      })
      gsap.to(".texte-baby .texte div", {
        opacity : 1,
        delay : 1.7,
      })
      gsap.to(".texte-baby .texte ul li", {
        opacity : 1,
        y:0,
        delay : 1.9,
        stagger : 0.2
      })
      gsap.to(".texte-enfant .texte ul li", {
        opacity : 1,
        y:0,
        delay : 1.9,
        stagger : 0.2
      })
    }
  },[tableInView])


  const clickImgHandler = (event, nomId)=>{
    setVignetteEnfant(event.target.id)
  }

  const hoverHandler = (event, nomId)=>{
    if(event.target.id===nomId){
      setHovered(null)
    } else {
      setHovered(event.target.id)
    }
  }

  return (
    <InView as="div" threshold="0.3" onChange={(inView)=>setTableInview(inView)}>
      <DivWrapper>
        <div id="container-tableau-enfant" ref={troubleContainer}>
          <div className="tableau-troubles">
            <div className='label-troubles' style={{zIndex:"0"}}>
              <div className="label left" style={{backgroundColor:`${vignetteEnfant!=="1"? "grey":"whitesmoke"}`, transform:`translateY(${vignetteEnfant!=="1"? "20px":"0px"})`}} onClick={(event)=>clickImgHandler(event, vignetteEnfant)}>
                <div className="label-frame" id="1" onMouseEnter={(event)=>hoverHandler(event, vignetteEnfant)} onMouseLeave={()=>setHovered(null)}/>
                <h3 
                  className="h3-1"
                  style={{color:`${(hovered==="1")||(vignetteEnfant==="1")? "#326886" : "transparent"}`, fontSize:`${(hovered==="1")||(vignetteEnfant==="1")? "calc(1.5rem + 1vw)"  : "1.5rem"}`}}
                >
                  Bébés
                </h3>
                <h3 
                  className="h3-2"
                  style={{transform:`translateY(${(hovered==="1")||(vignetteEnfant==="1")? "-150%" : "0%"})`, fontSize:`${(hovered==="1")||(vignetteEnfant==="1")? "calc(1.5rem + 1vw)" : "1.5rem"}`}}
                >
                  Bébés
                </h3>
              </div>
              <div className="label right" style={{backgroundColor:`${vignetteEnfant!=="2"? "grey":"whitesmoke"}`, transform:`translateY(${vignetteEnfant!=="2"? "20px":"0px"})`}} onClick={(event)=>clickImgHandler(event, vignetteEnfant)}>
                <div className="label-frame" id="2" onMouseEnter={(event)=>hoverHandler(event, hovered)} onMouseLeave={()=>setHovered(null)}/>
                <h3 
                  className="h3-1"
                  style={{color:`${(hovered==="2")||(vignetteEnfant==="2")? "#326886" : "transparent"}`, fontSize:`${(hovered==="2")||(vignetteEnfant==="2")? "calc(1.5rem + 1vw)"  : "1.5rem"}`}}
                >
                  Enfants/Adolescents
                </h3>
                <h3 
                  className="h3-2"
                  style={{transform:`translateY(${(hovered==="2")||(vignetteEnfant==="2")? "-150%" : "0%"})`, fontSize:`${(hovered==="2")||(vignetteEnfant==="2")? "calc(1.5rem + 1vw)"  : "1.5rem"}`}}
                >
                  Enfants/Adolescents
                </h3>
              </div>
            </div>
            <div className="conteneur-texte-queue" style={{zIndex:"1"}}>
              <div className="texte-baby" style={{transform:`translateX(${vignetteEnfant==="1"? "0%":"-100%"})`}}>
                <div className="bg-image">
                  <img src="/images/public-bebe.jpg"/>
                </div>
                <div className="icon">
                  <div>Enfants et adolescents</div>
                  <i className="fas fa-caret-square-right fa-4x icon right" onClick={()=>setVignetteEnfant('2')}></i>
                </div>

                <div className="texte">
                  <h3 className="title-responsive">Chez les bébés</h3>
                  <div className='intro-texte'>Pour les bébés, généralement, ce seront les pédiatres qui pourront, suivant les troubles consta&shy;tés, vous orienter vers une psychomo&shy;tricienne.</div>
                  <ul>
                    <li>les troubles du tonus, retard dans les acquisitions motrices (position assise, retournements dos-ventre, marche...)</li>
                    <li>difficultés au niveau des interactions précoces</li>
                    <li>pathologies neurologiques/génétiques</li>
                    <li>handicap entraînant un retard de développement psychomoteur</li>
                  </ul> 
                </div>  
              </div>

              <div className="texte-enfant" style={{transform:`translateX(${vignetteEnfant==="2"? "-100%":"0%"})`}}>
                <div className="icon left">
                  <i className="fas fa-caret-square-left fa-4x icon left" onClick={()=>setVignetteEnfant('1')}/>
                  <div>Bébés</div>
                </div>
                
                <div className="bg-image">
                  <img src="/images/public-enfant.jpg"/>
                </div>
                <div className="texte">
                  <h3 className="title-responsive">Chez les enfants et les adolescents</h3>
                  <div className='intro-texte'>
                    Chez l'enfant et l'adolescent, les indications provien&shy;nent souvent de l’école à la suite de difficultés d’ap&shy;prentis&shy;sages, ou bien d’un pro&shy;fessionnel de santé qui pointe un retard de développement ou un retard dans les acqui&shy;sitions psycho&shy;motrices :
                  </div>
                  <ul>
                    <li>Troubles des apprentissages comme le TDA/H ou la dyspraxie (appelé trouble développemental de la coordination)</li>
                    <li>Haut potentiel intellectuel (HPI) ayant des conséquences sur l’investissement du corps, de l’écriture, de la gestion émotionnelle, etc.</li>
                    <li>Troubles anxieux, difficultés à exprimer et gérer ses émotions</li>
                    <li>Agitation motrice, difficultés de concentration et d'attention</li>
                    <li>Difficultés corporelles et motrices (équilibre, posture, maladresses), ou manque d’aisance dans la course, le sport, etc.</li>
                    <li>Difficultés dans les gestes fins, difficultés d’écriture/graphisme, dysgraphie</li>
                    <li>Difficultés de repérage dans le temps et d’organisation dans l’espace</li>
                    <li>Repli sur soi, difficultés relationnelles ou dans les habiletés sociales</li>
                    <li>Troubles des conduites alimentaires</li>
                    <li>TSA (Trouble du Spectre Autistique), trisomie 21</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </DivWrapper>
    </InView>
    
  );
}

const DivWrapper = styled.div`
  li{
    list-style-type: square;
    line-height: 2.8rem;
    opacity: 0;
    transform: translateY(100%);
  }
  .texte-baby .texte div{
    opacity: 0;
  }
  .intro-texte{
    text-align: justify;
  }
  #container-tableau-enfant{
    display: flex;
    margin: 0 auto;
    justify-content: center;
    opacity: 0;
    transform: translateX(-50%);

    .tableau-troubles{
      width : 1200px;
      height : 750px;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      
      .label-troubles{
        display: flex;

        .label{
          border: 1px solid black;
          cursor: pointer;
          text-indent: 0px;
          position: relative;
          overflow : hidden;
          transition: all 0.3s ease-out;
          
          .label-frame{
            width : 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent;
            z-index: 3;
          }

          h3{
            text-transform: uppercase;
            left: 0;
            text-align: center;
            font-size : 2.4em;
            z-index: 1 ;
            color : #326886;
            transition : all 0.4s ease-out;
            width : 100%;
            position: absolute;
            margin: 10px auto;
            width : 100%;
            opacity: 0;
          }
          h3.h3-2{
            font-size : 2.4em;
            z-index: 1 ;
            -webkit-text-stroke: 2px #326886;
            color: transparent;
            transition : all 0.4s ease-out;
            width : 100%;
            position: absolute;
          }
        }

        .label.left{
          border-radius: 10px 0px 0px 0px;
          width : 300px; 
          height:100px;
        }
        .label.right{
          border-radius: 0px 10px 0px 0px;
          width : 900px; 
          height:100px;
        }
      }
      .conteneur-texte-queue{
        width: 100%;
        overflow: hidden;
        height: 100%;
        display: flex;
        z-index: 1;
        border: 1px solid black;
        border-radius: 0px 0px 10px 10px;

        .texte{
          font-family: "Oswald", sans-serif;
          font-size: 1.55rem;
          color :#326886;
          position: relative;
          
        }
        .texte-baby, .texte-enfant{
          min-width: 1200px;
          background-color: white;
          overflow: hidden;
          position: relative;
          z-index: 1;
          transition: transform 0.5s ease-out;
          padding: 30px;

          
        }
        .bg-image{
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.25;
          filter: brightness(125%) blur(3px);
          z-index: -1;
          opacity: 0;

          img{
            width: 1200px;
            height: 750px;
            object-fit: cover;
          }
        }
      }
    }
  }
  .title-responsive{
    display: none;
    font-size: 1.9rem;
    margin-top: 50px;
  }
  .icon.left{

    div{
      padding-top: 20px;
      margin-left: -20px;
    }
  }
  .icon{
    display: none;
    position: absolute;
    top: 5px;
    left: 5px;
    transition: opacity 0.3s ease-out;
    width : 400px;
    margin-right: 20px;
    width: 100vw;
    
    div{
      width: 110px;
      position: static;
      padding: 10px;
      font-family: "Oxygen", sans-serif;
      font-style: italic;
      color: #adadad;
    }

    i{ 
      transition: all 0.5s;
      cursor: pointer;
      position: static;
      opacity: 0.3;
      width: 60px;

      &:hover{
        opacity: 0.8;
      }
    }
    
    
  }

  @media (max-width:1250px){
    #container-tableau-enfant{
      .tableau-troubles{
        max-width: 750px !important;
        height: auto !important;
      }
    }
    .texte-baby, .texte-enfant{
      .texte{
        font-size: 1.25rem !important;
        max-width: 700px !important;  
      }
    }   
  }
  @media (max-width:770px){
    ul{
      li{
        line-height: 1.9rem;
        margin-bottom: 10px;
      }
    }
    .bg-image{
      img{
        height: 90% !important;
        width: auto !important;
      }
    }
    .icon.left {
      justify-content: flex-start;
    }
    .icon{
      display: flex;
      justify-content: flex-end;
    }
    #container-tableau-enfant{
      .tableau-troubles{
        width: 100%;
        height: auto !important;
      }
    }
    .texte-baby, .texte-enfant{ 
      .texte{
        font-size: 1.2rem !important;
        max-width:90vw !important;  
      }
    }   
    .title-responsive{
      display: block;
    }
    .label{
      display: none;
    }
  }

`
export default TableauTroubles;
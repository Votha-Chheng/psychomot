import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

const TableauTroublesAdultes = () => {

  const [tableInView, setTableInview] = useState(false)
  const [vignetteEnfant, setVignetteEnfant] = useState("1")

  const [hovered, setHovered] = useState("")

  const size = useWindowSize()

  const troubleContainer = useRef(null)

  useEffect(() => {
    if(tableInView){
      gsap.to("#container-tableau-adulte", {
        x:0,
        duration : 1,
        autoAlpha : 1
      })
      gsap.to("h3", {
        duration : 0.5,
        autoAlpha : 1,
        delay:0.8,
        stagger:0.1
      })
      gsap.to(".bg-image-2", {
        opacity : 0.3,
        duration :1,
        delay : 1.2,
      })
      gsap.to(".texte-adulte .texte div", {
        opacity : 1,
        delay : 1.7,
      })
      gsap.to(".texte-adulte .texte ul li", {
        opacity : 1,
        y:0,
        delay : 1.9,
        stagger : 0.2
      })
      gsap.to(".texte-agee .texte ul li", {
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
        <div id="container-tableau-adulte" ref={troubleContainer}>
          <div className="tableau-troubles">
            <div className='label-troubles' style={{zIndex:"0"}}>
              <div className="label left" style={{backgroundColor:`${vignetteEnfant!=="1"? "grey":"whitesmoke"}`, transform:`translateY(${vignetteEnfant!=="1"? "20px":"0px"})`}} onClick={(event)=>clickImgHandler(event, vignetteEnfant)}>
                <div className="label-frame" id="1" onMouseEnter={(event)=>hoverHandler(event, vignetteEnfant)} onMouseLeave={()=>setHovered(null)}/>
                <h3 
                  className="h3-1"
                  style={{color:`${(hovered==="1")||(vignetteEnfant==="1")? "#326886" : "transparent"}`, fontSize:`${(hovered==="1")||(vignetteEnfant==="1")? "2.5rem" : "1.5rem"}`}}
                >
                  Adultes
                </h3>
                <h3 
                  className="h3-2"
                  style={{transform:`translateY(${(hovered==="1")||(vignetteEnfant==="1")? "-150%" : "0%"})`, fontSize:`${(hovered==="1")||(vignetteEnfant==="1")? "2.5rem" : "1.5rem"}`}}
                >
                  Adultes
                </h3>
              </div>
              <div className="label right" style={{backgroundColor:`${vignetteEnfant!=="2"? "grey":"whitesmoke"}`, transform:`translateY(${vignetteEnfant!=="2"? "20px":"0px"})`}} onClick={(event)=>clickImgHandler(event, vignetteEnfant)}>
                <div className="label-frame" id="2" onMouseEnter={(event)=>hoverHandler(event, hovered)} onMouseLeave={()=>setHovered(null)}/>
                <h3 
                  className="h3-1"
                  style={{color:`${(hovered==="2")||(vignetteEnfant==="2")? "#326886" : "transparent"}`, fontSize:`${(hovered==="2")||(vignetteEnfant==="2")? "2.5rem" : "1.5rem"}`}}
                >
                  Personnes âgées
                </h3>
                <h3 
                  className="h3-2"
                  style={{transform:`translateY(${(hovered==="2")||(vignetteEnfant==="2")? "-150%" : "0%"})`, fontSize:`${(hovered==="2")||(vignetteEnfant==="2")? "2.5rem" : "1.5rem"}`}}
                >
                  Personnes âgées
                </h3>
              </div>
            </div>
            <div className="conteneur-texte-queue" style={{zIndex:"1"}}>
              <div className="texte-adulte" style={{transform:`translateX(${vignetteEnfant==="1"? "0%":"-100%"})`}}>
                <div className="bg-image-2">
                  <img src="/images/public-adulte.jpg"/>
                </div>
                <div className="icon" style={{width:"100vw", textAlign:"right"}}>
                  <div style={{width: "100px", position: "static", paddingTop: "10px", paddingLeft: "10px", fontFamily: '"Oxygen", sans-serif', fontStyle: "italic", color: "#adadad",marginRight: "10px"}}>Personnes âgées</div>
                  <i className="fas fa-caret-square-right fa-4x icon right" onClick={()=>setVignetteEnfant('2')}></i>
                </div>
                <div className="texte">
                  <h3 className="title-responsive">Chez l'adulte</h3>
                  <div className='intro-texte'>Une consultation chez un médecin géné&shy;raliste pourra vous orienter vers une psy&shy;cho&shy;motricienne pour les troubles suivants :</div>
                  <ul>
                    <li>Anxiété</li>
                    <li>Stress</li>
                    <li>Douleurs chroniques</li>
                    <li>TDA/H</li>
                    <li>Difficulté d’organisation et de gestion du temps</li>
                    <li>Dépression</li>
                  </ul>
                </div>  
              </div>

              <div className="texte-agee" style={{transform:`translateX(${vignetteEnfant==="2"? "-100%":"0%"})`}}>  
                <div className="bg-image-2">
                  <img src="images/photo-1591053165370-8690088d6017.jpg"/>
                </div>
                <div className="icon left">
                  <i className="fas fa-caret-square-left fa-4x icon left" onClick={()=>setVignetteEnfant('1')}/>
                  <div style={{width: "100px", position: "static", paddingTop: "20px", paddingLeft: "0px", fontFamily: '"Oxygen", sans-serif', fontStyle: "italic", color: "#adadad"}}>Adultes</div>
                </div>
                <div className="texte">
                  <h3 className="title-responsive">Chez les personnes âgées</h3>
                  <div className='intro-texte'>
                    Des soins et des techniques liés à la psycho&shy;motricité peuvent aider les personnes âgées souf&shy;frant des troubles suivants :
                  </div>
                  <ul>
                    <li>Perte d’autonomie</li>
                    <li>Parkinson</li>
                    <li>DTA (démence de type alzheimer)</li>
                    <li>Perte d’équilibre</li>
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
  .title-responsive{
    display: none;
    font-size: 1.9rem;
    margin-top: 50px;
  }
  .texte-adulte .texte div{
    opacity: 0;
  }
  .intro-texte{
    text-align: justify;
  }
  li{
    list-style-type: square;
    line-height: 2.8rem;
    opacity: 0;
    transform: translateY(100%);
  }
  #container-tableau-adulte{
    display: flex;
    margin: 0 auto;
    justify-content: center;
    opacity: 0;
    transform: translateX(50%);

    .tableau-troubles{
      width : 1200px;
      height : 500px;
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
          .label.left{
            border-radius: 10px 0px 0px 0px;
            
          }
          .label.right{
            border-radius: 0px 10px 0px 0px;
            width : 900px; 
            height:100px;
          }
        }

        .label.left{
          border-radius: 10px 0px 0px 0px;
          width : 500px; 
          height:100px;
          
        }
        .label.right{
          border-radius: 0px 10px 0px 0px;
          width : 700px; 
          height:100px;
        }
      }
      .conteneur-texte-queue{
        width: 100%;
        overflow: hidden;
        height: 100%;
        //background-color: blue;
        display: flex;
        z-index: 1;
        border: 1px solid black;
        border-radius: 0px 0px 10px 10px;

        .texte-adulte, .texte-agee{
          min-width: 1200px;
          transform: translateX(-100%);
          background-color: white;
          overflow: hidden;
          position: relative;
          z-index: 1;
          transition: transform 0.5s ease-out;
          padding: 30px;

          .texte{
            font-family: "Oswald", sans-serif;
            font-size: 1.55rem;
            color :#326886;
          }
        }
        .bg-image-2{
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          filter: brightness(125%) blur(3px);
          z-index: -1;

          img{
            width: 1200px;
            height: 750px;
            object-fit: cover;
          }
        }
      }
    }
  }
  .icon.left{
    justify-content: flex-start;

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
    width:100vw;
    text-align:right
    
    div{
      width: 100px;
      position: static;
      padding-top: 10px;
      padding-left: 10px;
      font-family: "Oxygen", sans-serif;
      font-style: italic;
      color: #adadad;
      margin-right: 10px;
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

  @media screen and (max-width:1250px){
    #container-tableau-adulte{
      .tableau-troubles{
        width: 750px;
        height: auto !important;
      }
    }
    .texte-adulte, .texte-agee{
      .texte{
        font-size: 1.25rem !important;
        max-width: 700px !important;  
      }
    }   
  }
  @media screen and (max-width:770px){
    .icon{
      display: flex;
      justify-content:flex-end;
    }
    #container-tableau-adulte{
      .tableau-troubles{
        width: 100%;
        height: auto !important;
      }
    }
    .texte-adulte, .texte-agee{ 
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
export default TableauTroublesAdultes;
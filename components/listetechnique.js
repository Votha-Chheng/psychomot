import {gsap} from "gsap"
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

const ListeTechnique = ({image, legende, children, classCss}) => {
  const [listeInView, setListeInView] = useState(false)

  const size = useWindowSize()

  useEffect(()=>{
    if(listeInView){
      gsap.to(`.${classCss} .icon`, {
        x:0,
        delay:0.2,
        duration : 0.6,
        ease : " Power3.easeOut"
      })
      gsap.to(`.${classCss} .icon`, {
        autoAlpha : 1,
        duration : 0.3
      })
      gsap.to(`.${classCss} .photo-container`, {
        rotateX : 0,
        duration : 0.5,
        delay:0.3
      })
      gsap.to(`.${classCss} .vignette`, {
        y : 0,
        autoAlpha:1,
        duration : 1,
        delay:0.6,
        ease :"Power4.easeOut"
      })
    }
  },[listeInView])
  
  return (
    <InView as="div" className={classCss} threshold="0.1" onChange={(inView, entry)=>setListeInView(inView)}> 
      <DivWrap>
        <div className="photo-container" style={{transform:"rotateX(90deg)"}}>
          <img src={`/images/${image}`}/> 
        </div>
        <div className="legende">
          {legende} 
        </div>
        <div className="vignette">
          {children}
        </div>
        <div className="icon">
          <i className="fas fa-chevron-right fa-3x"/>
        </div>  
      </DivWrap>
    </InView>
  );
}

const DivWrap = styled.div`
  position: relative;
  width: 450px;
  height: 300px;
  margin-bottom: 20vh;
  display : flex;

  .photo-container{
    min-width: 450px;
    min-height: 300px;
    overflow: hidden;
    border: 5px double whitesmoke;

    img{
      width: 450px;
      height: 300px;
      object-fit: cover;
    }
  }
  .legende{
    font-family: "Oxygen", sans-serif;
    color: white;
    font-size: 4em;
    margin-left: 15px;
    text-transform: uppercase;
  }
  .vignette{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 900px;
    height: 150px;
    color: #326886;
    background-color: white;
    font-size: 1.3em;
    top: 250px;
    left: 50%;
    padding: 15px;
    font-family: "Oswald", sans-serif;
    border-top : 3px solid #28536b ;
    border-right : 3px solid #28536b ;
    border-bottom :3px solid #28536b ;
    border-left: 10px solid #28536b ;
    transform: translateY(50%);
    opacity: 0;

    .mot-clef{
      text-decoration: underline dotted;
      cursor : help;
      position: relative;
      display: inline-block;
      color: #28536b;
      font-weight: bold;

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

    .savoir-plus{
      
      span{
        font-style: italic;
        color: #326886;
        display: inline ;
        transition: color 0.2s ease-out;
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;

        &:hover{
          color: #9f7f92;
        }
      }
      
      i{
        cursor: pointer;
        transform: translateX(8px);
      }  
    }
  }
  .icon{
    color:whitesmoke;
    position:absolute;
    top:50%;
    left:-25%;
    transform: translateX(-200%);
    opacity:0;
  }

  @media (max-width: 1140px){
    margin-bottom: 250px;
    .vignette{
      left:30%;
      width : 500px;
      height : auto;
      max-height: 450px;
    }
    .legende{
      font-size: calc(1.2rem + 1.5vw);
    }
  }

  @media (max-width: 1024px){
    .photo-container{
      transform: rotateX('0deg') !important;
    }
  }

  @media (max-width: 740px){
    flex-direction: column-reverse;
    .photo-container{
      min-width: unset;
      min-height: unset;
      height : 200px;
      width: 350px;

      img{
        width: 350px;
        height: 300px;
      }
    }
    .vignette{
      left:10%;
      top : 280px;
      width: 350px;
    }
  }
  @media (max-width: 400px){
    .vignette{
      left:0px;
      top : 300px;
    }
    .legende{
      height: auto;
      width: 350px;
    }
  }
  
`
export default ListeTechnique;
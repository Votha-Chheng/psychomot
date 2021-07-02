import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import AtelierBarkley from "../components/atelierbarkley";
import AtelierRelax from "../components/atelierrelax";
import Footer from "../components/footer";
import Menu from "../components/menu";
import useWindowSize from "../hooks/useWindowSize";
import { SmoothScrollProvider } from "../src/SmoothScroll.context";

const ateliers = () => {

  const [footerInView, setFooterInView] = useState(false)
  const [imageDimension, setImageDimension] = useState({width : 0, height: 0})
  const [imgTranslate, setImgTranslate] = useState(false)

  const imageSeparation = useRef(null)

  const size = useWindowSize()

  useEffect(()=>{
    setImageDimension({width : imageSeparation.current.offsetWidth, height : imageSeparation.current.offsetHeight})
  }, [size, imageDimension.width, imageDimension.height])

  return (
    <div>
      <Head>
        <title>Estelle Bétry psychomotricienne Mouriès Alpilles - Psychomotricité - Ateliers - Guidance parentale - Programme BARKLEY - TDAH</title>   
      </Head>

      <SmoothScrollProvider options={{smooth : true, multiplier : 1, smartphone:{smooth : true}, tablet:{smooth:true}}}>
        <DivWrapper data-scroll-container>
          <div id="super-container-3">
            <div className="menu-container" style={{backgroundColor:"#9f7f92"}} data-scroll data-scroll-sticky data-scroll-target="#super-container-3">
              <nav>
                <Menu color="white" backgroundColor={"#9f7f92"}/>
              </nav>
            </div>

            <AtelierBarkley/>

            <div style={{position:"relative"}}>
              <div 
                className="image-separation" 
                style={{width:`${size.width<745 ? imageDimension.width/2 + "px" : "auto"}`}}
              >
                <img src="/images/plaquette.jpg" ref={imageSeparation} style={{transform:`translateX(${imgTranslate? -(imageDimension.width/2)+"px":"0px"})`}} /> 
              </div>
              <i className="fas fa-chevron-circle-right fa-3x right" onClick={()=>setImgTranslate(prev=>!prev)} style={{display:`${size.width>745 || imgTranslate ? "none":"block"}`}} />
              <i className="fas fa-chevron-circle-left fa-3x left"onClick={()=>setImgTranslate(prev=>!prev)} style={{display:`${size.width>745 || !imgTranslate ? "none":"block"}`}} />

            </div>
            
            <AtelierRelax/>

            <div className="separateur" style={{backgroundColor : `${footerInView? "#9f7f92" : "transparent"}`}}/>
            <InView threshold="0.9" onChange={(inView, entry)=>setFooterInView(inView) }>
              <Footer color="#9f7f92"/>
            </InView>
            
          </div> 
        </DivWrapper>
      </SmoothScrollProvider>

      
    </div>
    
  );
}

const DivWrapper = styled.div`
  height: 100%;

  div.menu-container{
    position: relative;
    width: 100%;  
    height: 50px;
    z-index: 150;

    nav{
    z-index: 10;
    position : absolute;
    width: 750px;
    left: 15px;
    }
  }
  .image-separation{
    text-align: center;
    margin: 8vh auto 20vh;
    height: 45%;
    
    img{
      border: 2px solid ;
      height: 45%;
      transition: transform 0.5s ease-out;
    }
    
  }
  i.right, i.left{
    position: absolute;
    display: none;
    cursor: pointer;
    opacity: 0.3;
    top : 50%;
    transition: opacity 0.2s ease-out;

    &:hover{
      opacity: 0.6;
    }
  }

  @media screen and (max-width:1080px){
    .image-separation{
      img{
        height: 750px !important;
      }
    }
  }

  @media screen and (max-width:745px){
    .image-separation{
      overflow: hidden !important;
    }
    i.right{
      right : 10%; 
    }
    i.left{
      left : 10%;
    }
  }

  .separateur{
    width: 100vw;
    height: 40vh;
    margin-top: -1px;
    position: relative;
    transition: background-color 0.5s ease-out;
  }
`

export default ateliers;
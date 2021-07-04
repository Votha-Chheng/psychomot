import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import {SmoothScrollProvider} from '../src/SmoothScroll.context.js'
import styled from 'styled-components'
import Menu from '../components/menu'
import HomeMain from '../components/homemain'
import HomeSectionFirst from '../components/homesectionfirst'
import Footer from '../components/footer'
import {InView} from 'react-intersection-observer'
import HomePresentationSection from '../components/homepresentationsection.js'
import useWindowSize from '../hooks/useWindowSize.js'

export default function Home() { 

  const [menuViolet, setMenuViolet] = useState(false)
  const [menuBleu, setMenuBleu] = useState(false)
  const [cellScreen, setCellScreen] = useState(false)
  const [totalHeight, setTotalHeight] = useState(0)

  const containerRef = useRef(null)
  const section1 = useRef(null)
  const section2 = useRef(null)
  const section3 = useRef(null)
  const footer = useRef(null)

  const size = useWindowSize()

  useEffect(() => {
    if(containerRef.current && containerRef.current.clientWidth<900){
      setCellScreen(true)
    } else{
      setCellScreen(false)
    }
  },[cellScreen])

  useEffect(() => {
    if(section3.current)
    setTotalHeight(section3.current.clientHeight)
  }, [totalHeight, size])

  return (
    <div data-scroll data-scroll-container>
      <Head>
        <title>Estelle Bétry psychomotricienne diplomée d'état DE à Mouriès</title>   
      </Head>
      <SmoothScrollProvider options={{smooth : true, multiplier : 1, smartphone:{smooth : true}, tablet:{smooth:true}, firefoxMultiplier: 1000}}>
        <Wrapper>         
          <div className='containerRef' ref={containerRef} data-scroll-speed="1">
            <div className="menu-container" 
              data-scroll 
              data-scroll-sticky 
              data-scroll-target=".containerRef"
            >
              <nav>
                <Menu color="white" backgroundColor={`${(menuViolet ) ?"#9f7f92" : (!menuViolet && menuBleu) ? "#28536b": cellScreen ? "#9f7f92" : "transparent"}`} />
              </nav>
            </div>
            <div ref={section1}>
              <HomeMain data-scroll data-scroll-section/>
            </div>
            

            <InView as="div" className="homeSectionTwo" threshold='0.35' onChange={(inView, entry)=> setMenuViolet(inView)} ref={section2}>
              <HomeSectionFirst backgroundColor={`${(!menuViolet && menuBleu) ? "#28536b": "transparent"}`} data-scroll data-scroll-section />
            </InView>

            <InView as="div" className='presentation' style={{marginTop:"-1px"}} threshold='0.05' onChange={(inView, entry)=> setMenuBleu(inView)} ref={section3}>
              <HomePresentationSection data-scroll data-scroll-section sectionInView={menuBleu}/>
            </InView>

            <InView as="div" className='footer-container' onChange={(inView, entry)=>setMenuViolet(inView)} ref={footer}>
              <Footer data-scroll data-scroll-section color="#9f7f92"/>
            </InView> 
          </div>
        </Wrapper>
      </SmoothScrollProvider>
  
    </div>
  )
}

const Wrapper = styled.div`
  margin : 0;
  position: relative;
  width: 100%;
  z-index: 2;
  height: 100%;

  div.menu-container{
    z-index: 5;
    position: absolute;
    width: 100%;  
   
  }

  nav{
    z-index: 3;
    position : absolute;
    width: 560px;
    left: 15px; 
  }

  .footer-container{
    height: 100%;
  }

  //Ne pas toucher !!!! Fait apparaître le footer.
  /***********************/

  
  

  //OK
  @media (width:360px) and (height:640px){
    height: 10620px;
  }
  @media (width:411px) and (height:731px){
    height: 11020px;
  }
  @media (width:411px) and (height:823px){
    height: 11620px;
  }
  @media (width:375px) and (height:667px){
    height: 10695px;
  }
  @media (width:414px) and (height:736px){
    height: 11050px;
  }
  @media (width:360px) and (height:740px){
    height: 9080px;
  }
  @media (width:375px) and (height:812px){
    height: 11645px;
  }
  @media (width:768px) and (height:1024px){
    height: 12210px;
  }
  @media (width:1024px) and (height:1366px){
    height: 14245px;
  }
  @media (width:540px) and (height:720px){
    height: 10530px;
  }
  @media (width:280px) and (height:653px){
    height: 11430px;
  }
`

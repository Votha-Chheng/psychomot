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
      <SmoothScrollProvider options={{smooth : true, multiplier : 1, firefoxMultiplier: 1000}}>
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

  .containerRef{
    position: relative;
  }

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

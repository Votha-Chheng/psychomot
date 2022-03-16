import Head from 'next/head'
import '../styles/globals.css'
import Menu from "../components/menu"

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"/>
        <meta name="description" content="Estelle Bétry, psychomotricienne diplômé dans les Alpilles. Cabinet libéral, atelier Barkley de guidance parentale, atelier relaxation, espace du Devenson."/>
        <meta property="og:title" content="Estelle Bétry, psychomotricienne libérale à Mouriès (13) Bouches-du-Rhône" />
        <meta property="og:image" content="https://zupimages.net/up/21/34/cg2g.jpg"/>
        <meta property="og:image:type" content="image/jpg"/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr" />
        <link rel="icon" href="/logopsy.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet/css" href='/global.css'/>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"></link>
        <title>Estelle Bétry psychomotricienne à Mouriès</title>
      </Head>

      <main data-scroll-container className='container'>
        <Component {...pageProps} />      
      </main> 
    </>
  )
}

export default MyApp

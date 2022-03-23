import Footer from '../components/footer/Footer'
import NavBar from '../components/navBar/NavBar'
import '../styles/globals.css'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="../styles/globals.css" rel="stylesheet" />
      </Head>
      <NavBar />
      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default MyApp

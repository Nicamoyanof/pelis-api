import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import {store, wrapper } from "../redux/strore";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="../styles/globals.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);

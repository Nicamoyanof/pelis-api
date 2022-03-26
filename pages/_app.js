import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import {store, wrapper } from "../redux/strore";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);

// pages/_app.js
import "@/styles/globals.css";
import Menu from "@/components/Menu";
import Footer from "@/sections/Footer";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

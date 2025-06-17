// pages/_app.js
import "@/styles/globals.css";
import Menu from "@/components/menu";
import Footer from "@/sections/footer";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

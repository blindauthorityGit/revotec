// pages/_app.js
import "@/styles/globals.css";
import Menu from "@/components/menu";
import Footer from "@/sections/footer";
import { GlobalsProvider } from "@/context/GlobalsContext";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Menu />
            <GlobalsProvider value={pageProps.globals}>
                <Component {...pageProps} />
            </GlobalsProvider>
            <Footer />
        </>
    );
}

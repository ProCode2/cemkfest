import { SessionProvider } from "next-auth/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className="text-white">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </SessionProvider>
  );
}

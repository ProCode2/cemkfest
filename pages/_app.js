import { SessionProvider } from "next-auth/react";
import { useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const teamRef = useRef();
  const spandanRef = useRef();
  const eventRef = useRef();

  return (
    <SessionProvider session={pageProps.session}>
      <main className="text-white flex flex-col w-screen h-full">
        <Navbar teamRef={teamRef} spandanRef={spandanRef} eventRef={eventRef} />
        <Component
          {...pageProps}
          teamRef={teamRef}
          spandanRef={spandanRef}
          eventRef={eventRef}
        />
        <Footer />
      </main>
    </SessionProvider>
  );
}

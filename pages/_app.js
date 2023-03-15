import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { checkAdminAccess } from "../feUtils/functions";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    checkAdminAccess()
      .then((res) => {
        console.log(res);
        if (res.ok) setAdmin(true);
        else setAdmin(false);
      })
      .catch((e) => {
        console.log(e);
        setAdmin(false);
      });
  }, []);
  return (
    <SessionProvider session={pageProps.session}>
      <main className="text-white flex flex-col w-full h-full">
        <Navbar admin={admin} />
        <Component {...pageProps} />
        <Footer />
      </main>
    </SessionProvider>
  );
}

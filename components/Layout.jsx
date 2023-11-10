import { useState, useEffect } from "react";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Head from "next/head";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return (
    <>
      <Head>
        <title>Goolluck Investments</title>
        <link rel="icon" href="/assets/header_logo.png" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Layout;

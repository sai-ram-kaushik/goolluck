/** @format */

import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className='flex items-center justify-center w-full h-screen'>
        <h1>This Website is under maintainance</h1>
      </div>
    </>
  );
}

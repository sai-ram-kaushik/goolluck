/** @format */

import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Component {...pageProps} /> */}
      <div className='flex items-center justify-center w-full h-screen lg:h-[80vh]'>
        <h1>This Website is under maintainance</h1>
      </div>
    </Layout>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="bg-sky-100 lg:basis-1/6 order-last lg:order-first">
        <Navbar />
      </div>
      <div className="bg-green-100 lg:basis-1/2 flex-1">
        <Component {...pageProps} />
      </div>
      <div className="bg-sky-100 lg:basis-1/4 order-first lg:order-last">
        <Sidebar />
      </div>
    </div>
  );
}

export default MyApp;

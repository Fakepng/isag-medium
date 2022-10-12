import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex ">
      <Navbar />
      <div className="flex-1 min-h-screen bg-red-100">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

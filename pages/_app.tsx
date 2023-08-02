import Metadata from "@/components/Metadata";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metadata />
      <Component {...pageProps} />
    </>
  );
}

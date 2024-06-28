import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={` ${inter.className}`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <GoogleAnalytics gaId="G-NMPJQ7T4F2" />
      </main>
    </>
  );
}

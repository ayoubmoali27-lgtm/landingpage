import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",   // 👈 add this
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.variable}>   {/* 👈 use .variable, not .className */}
      <Component {...pageProps} />
    </main>
  );
}
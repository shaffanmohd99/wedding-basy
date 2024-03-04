import Typography from "@/components/reuseable/Typography";
import { Great_Vibes } from "next/font/google";
// import { useRouter } from "next/router";
import HomePage from "./home";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

// const inter = Inter({ subsets: ['latin'] })
const great_vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const [languange, setLanguange] = useState("bm");

  return (
    <div className="flex justify-center items-center bg-[#faf7f2] ">
      <Head>
        <title>Walimatul Urus Shaffan & Basyirah</title>
        <meta property="og:title" content="Walimatul Urus Shaffan & Basyirah" />
        <meta
          property="og:description"
          content="27 April 2024 | Rinching Terrace,Kajang"
        />
        <meta
          property="og:image"
          content="https://april27.loveshaffanbasyirah.com/assets/gambar_3.jpg" // Replace with the correct path to your image
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div
        className="w-full max-w-lg"
        // className="max-w-sm flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-screen max-h-screen bg-[#faf7f2]">
          <div className="w-full h-full relative">
            <img
              src="/assets/gambarhihi.jpeg"
              // src="/assets/gambar.jpg"
              className="h-full w-full select-none object-cover"
              alt="gambar"
            />
            {/* <div className="absolute inset-0 bg-[#bc8c53] opacity-60"></div> */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 40 }}
              className={`${great_vibes.className} absolute inset-0 flex flex-col gap-2  `}
            >
              <div className="bg-[#faf7f2] flex  flex-col items-center justify-center rounded px-2 h-[100px] ">
                <Typography variant="h5" className="text-center text-black">
                  Walimatul Urus
                </Typography>
                {/* <Typography variant="h3" className="text-center text-black">
                of
              </Typography> */}
                <Typography
                  variant="h3"
                  className="text-center text-black  font-semibold"
                >
                  Shaffan & Basyirah
                </Typography>
              </div>
            </motion.div>
          </div>
        </div>
        <HomePage languange={languange} />
      </div>
    </div>
  );
}

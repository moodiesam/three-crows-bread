import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import crowWhite from './public/crow_white.png'
import crowLightGrey from './public/crow_light_grey.png'
import crowDarkGrey from './public/crow_dark_grey.png'

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: '400',
})

export default function Home() {
  return (
    <section className={`grid justify-center items-center ${playfairDisplay.className} min-h-screen bg-black text-slate-50`}>
      <h1 className="text-6xl italic text-center">Three Crows Bread</h1>
      <h2 className="text-4xl text-center">Coming Soon</h2>
      <div className="flex">
        <Image 
          src={crowDarkGrey}
          alt="Picture of a Crow"
        />
        <Image 
          src={crowLightGrey}
          alt="Picture of a Crow"
        />
        <Image 
          src={crowDarkGrey}
          alt="Picture of a Crow"
        />
      </div>
    </section>
  );
}

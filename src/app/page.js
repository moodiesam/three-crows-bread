import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import crowPic from './public/crow_white.png'

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: '400',
})

export default function Home() {
  return (
    <div className={`grid justify-center items-center ${playfairDisplay.className} min-h-screen bg-black text-slate-50`}>
      <h1 className="text-6xl italic">Three Crows Bread</h1>
      <Image 
        src={crowPic}
        alt="Picture of a Crow"
        />
    </div>
  );
}

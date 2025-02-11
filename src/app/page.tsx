import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";
import localFont from "next/font/local";
const bebasNeue = localFont({ src: "/fonts/BebasNeue-Regular.ttf" });
export default function Home() {
  return (
    <div className={`${bebasNeue.className} h-full w-full `}>
      <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Navbar />

          <section>
            <main>
              <Hero />
            </main>
          </section>
        </div>
        <section>
          <Features />
        </section>
      </div>
    </div>
  );
}

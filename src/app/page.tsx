import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logoticker";
import Navbar from "@/components/navbar";

import localFont from "next/font/local";
const bebasNeue = localFont({ src: "/fonts/BebasNeue-Regular.ttf" });
export default function Home() {
  return (
    <div className={`${bebasNeue.className} h-full w-full `}>
      <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="  items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Navbar />

          <section>
            <main className="pt-40 z-0">
              <Hero />
            </main>
          </section>
          <LogoTicker />
        </div>
        <section>
          <Features />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}

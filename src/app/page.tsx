import Navbar from '@/components/custom/NavBar';
import localFont from 'next/font/local'
const bebasNeue = localFont({src: '/fonts/BebasNeue-Regular.ttf'});
export default function Home() {
  return (
    <div className={`${bebasNeue.className} h-full w-full>`}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
        <Navbar />
        <h1 className="inline-block text-xl md:text-4xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
          Dev&apos;s Got Latent
        </h1>
      </div>
    </div>
  );
}

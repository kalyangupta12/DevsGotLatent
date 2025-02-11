import { RainbowButton } from "./magicui/rainbow-button";
import { ShimmerButton } from "./magicui/shimmer-button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" ">
        <h1 className="  font-bold text-5xl md:text-7xl lg:text-[180px] ">
          Dev&apos;s Got Latent
        </h1>
      </div>
      <div>
        <p className="lg:text-2xl pb-8">
          Post your projects, get real user engagement, receive AI-powered
          feedback, and collaborate with developers worldwide.
        </p>
      </div>
      <div className="flex gap-x-6 items-center">
        <RainbowButton className="w-100% text-xl py-4">
          Explore Projects
        </RainbowButton>
        <ShimmerButton shimmerColor="#C10007" shimmerSize="0.2em">
          <span className="text-center text-lg px-6 font-medium leading-none  text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Get Roasted!
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

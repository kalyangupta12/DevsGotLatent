"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Image
        src={theme === "dark" ? "/logo-trans.png" : "/logo-dark.png"}
        alt="logo"
        width={200}
        height={200}
      />
    </div>
  );
};

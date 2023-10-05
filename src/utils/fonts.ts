import { Bellefair, Barlow,Barlow_Condensed } from "next/font/google";

export const titleFont = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
});

export const textFont_1 = Barlow({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const textFont_2 = Barlow_Condensed({
    weight: ["500", "600", "700"],
    subsets: ["latin"],
  });
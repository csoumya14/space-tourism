"use client";
import { Description } from "@/components/Home/Description/Description";
import { FC } from "react";
import { ExploreButton } from "./page.style";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
  return (
    <>
      <Description />
      <ExploreButton type="button">EXPLORE</ExploreButton>
    </>
  );
};

export default HomePage;

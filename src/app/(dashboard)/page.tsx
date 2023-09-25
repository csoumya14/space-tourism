"use client";
import { Description } from "@/components/Home/Description/Description";
import { FC } from "react";
import { ExploreButton, Wrapper } from "./page.style";
import { useRouter } from "next/navigation";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
  const router = useRouter();

  const goToPage = () => {
    router.push("/destination");
  };
  return (
    <>
      <Description />
      <ExploreButton type="button" onClick={goToPage} className="fontBellefair">
        Explore
      </ExploreButton>
    </>
  );
};

export default HomePage;

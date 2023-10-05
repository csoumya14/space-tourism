"use client";
import { Description } from "@/components/Home/Description/Description";
import { FC } from "react";
import { ExploreButton } from "./HomePage.style";
import { useRouter } from "next/navigation";
import HomeLayout from "./layout";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
  const router = useRouter();

  const goToPage = () => {
    router.push("/destination");
  };
  return (
    <HomeLayout>
      <Description />
      <ExploreButton type="button" onClick={goToPage} className="fontBellefair">
        Explore
      </ExploreButton>
    </HomeLayout>
  );
};

export default HomePage;

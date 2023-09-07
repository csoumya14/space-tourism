import { FC } from "react";
import {
  Container,
  DescriptionText,
  MainHeading,
  SubText,
} from "./Description.style";
import { Banner } from "@/components/Banner/Banner";

interface DescriptionProps {}

export const Description: FC<DescriptionProps> = () => {
  return (
    <Container>
      <SubText textLevel={"p"} className="fontBarlowCondensed">
        So, you want to travel to
      </SubText>
      <MainHeading textLevel={"h1"} className="fontBellefair">
        Space
      </MainHeading>
      <DescriptionText textLevel={"p"} className="fontBarlow">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </DescriptionText>
    </Container>
  );
};

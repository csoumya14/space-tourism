import { Banner } from "@/components/Banner/Banner";
import { FC } from "react";

interface DestinationProps {}

const DestinationPage: FC<DestinationProps> = () => {
  return (
    <section>
      <Banner textLevel={"p"}>Pick your destination</Banner>
    </section>
  );
};

export default DestinationPage;

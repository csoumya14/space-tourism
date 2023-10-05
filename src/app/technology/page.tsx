import { PageTitle } from "@/components/PageTitle/PageTitle";
import { TechnologyTabs } from "@/components/Technology/TechnologyTabs/TechnologyTabs";
import { PageTitleTypes } from "@/enums/PageTitle";
import { TechnologyType } from "@/types/displayData";
import TechnologyLayout from "./layout";

const TechnologyPage = async (): Promise<JSX.Element> => {
  const data: TechnologyType[] = await getData();
  return (
    <TechnologyLayout>
      <PageTitle pageNumber={"03"} title={PageTitleTypes.Technology} />
      <TechnologyTabs technologyData={data} />
    </TechnologyLayout>
  );
};

export default TechnologyPage;

async function getData() {
  const res = await fetch(`http://localhost:3001/technology`);
  return res.json();
}

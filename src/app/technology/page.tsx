import { PageTitle } from "@/components/PageTitle/PageTitle";
import { TechnologyTabs } from "@/components/Technology/TechnologyTabs/TechnologyTabs";
import { PageTitleTypes } from "@/enums/PageTitle";
import { TechnologyType } from "@/types/displayData";

interface TechnologyProps {}

const TechnologyPage = async (): Promise<JSX.Element> => {
  const data: TechnologyType[] = await getData();
  return (
    <>
      <PageTitle pageNumber={"03"} title={PageTitleTypes.Technology} />
      <TechnologyTabs technologyData={data} />
    </>
  );
};

export default TechnologyPage;

async function getData() {
  const res = await fetch(`http://localhost:3001/technology`);
  return res.json();
}

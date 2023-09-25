import { CrewType } from "@/types/displayData";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PageTitleTypes } from "@/enums/PageTitle";
import { CrewTabs } from "@/components/Crew/CrewTabs/CrewTabs";

const CrewPage = async (): Promise<JSX.Element> => {
  const data: CrewType[] = await getData();
  return (
    <>
      <PageTitle pageNumber={"02"} title={PageTitleTypes.Crew} />
      <CrewTabs crewData={data} />
    </>
  );
};

export default CrewPage;

async function getData() {
  const res = await fetch(`http://localhost:3001/crew`);
  return res.json();
}

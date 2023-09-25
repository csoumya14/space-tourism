import { DestinationType } from "@/types/displayData";
import DestinationLayout from "./layout";
import DestinationTabs from "@/components/Destination/DestinationTabs/DestinationTabs";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PageTitleTypes } from "@/enums/PageTitle";

interface DestinationPageProps {}

const DestinationPage = async (): Promise<JSX.Element> => {
  const data: DestinationType[] = await getData();
  return (
    <DestinationLayout>
      <PageTitle pageNumber={"01"} title={PageTitleTypes.Destination} />
      <DestinationTabs destinationData={data} />
    </DestinationLayout>
  );
};

export default DestinationPage;

async function getData() {
  const res = await fetch(`http://localhost:3001/destinations`);
  return res.json();
}

import { DestinationType } from "@/types/displayData";
import DestinationLayout from "../layout";
import { DestinationTitle } from "@/components/Destination/DestinationTitle/DestinationTitle";
import DestinationTabs from "@/components/Destination/DestinationTabs/DestinationTabs";

interface DestinationProps {
  posts: DestinationType[];
}

const DestinationPage = async (): Promise<JSX.Element> => {
  const data: DestinationType[] = await getData();
  console.log({ data });
  return (
    <DestinationLayout>
      <DestinationTitle />
      <DestinationTabs />
      <ul>
        {data.map((destinationItem) => (
          <li key={destinationItem.name}>{destinationItem.description}</li>
        ))}
      </ul>
    </DestinationLayout>
  );
};

export default DestinationPage;

async function getData() {
  const res = await fetch(`http://localhost:3001/destinations`);
  return res.json();
}

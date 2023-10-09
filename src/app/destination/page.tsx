"use client";
import DestinationLayout from "./layout";
import DestinationTabs from "@/components/Destination/DestinationTabs/DestinationTabs";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PageTitleTypes } from "@/enums/PageTitle";
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const DestinationPage = () => {
  const { data, error } = useSWR("/api/destinations", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <DestinationLayout>
      <PageTitle pageNumber={"01"} title={PageTitleTypes.Destination} />
      {data.length !== 0 && (
        <DestinationTabs destinationData={data.destination} />
      )}
    </DestinationLayout>
  );
};

export default DestinationPage;

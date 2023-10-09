"use client";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { TechnologyTabs } from "@/components/Technology/TechnologyTabs/TechnologyTabs";
import { PageTitleTypes } from "@/enums/PageTitle";
import TechnologyLayout from "./layout";
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const TechnologyPage = () => {
  const { data, error } = useSWR("/api/technology", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <TechnologyLayout>
      <PageTitle pageNumber={"03"} title={PageTitleTypes.Technology} />
      {data.length !== 0 && <TechnologyTabs technologyData={data.technology} />}
    </TechnologyLayout>
  );
};

export default TechnologyPage;

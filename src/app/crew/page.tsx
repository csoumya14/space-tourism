"use client";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PageTitleTypes } from "@/enums/PageTitle";
import { CrewTabs } from "@/components/Crew/CrewTabs/CrewTabs";
import CrewLayout from "./layout";
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const CrewPage = () => {
  const { data, error } = useSWR("/api/crew", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <CrewLayout>
      <PageTitle pageNumber={"02"} title={PageTitleTypes.Crew} />
      {data.length !== 0 && <CrewTabs crewData={data.crew} />}
    </CrewLayout>
  );
};

export default CrewPage;

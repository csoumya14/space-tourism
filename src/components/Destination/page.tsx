import { FC, useEffect, useState } from "react";

interface DestinationProps {}

export const Destination: FC<DestinationProps> = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      const res = await fetch("http://localhost:3001/destinations");
      const data = await res.json();
      setDestinations(data);
      setLoading(false);
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <>loading...</>;
  }
  console.log(destinations);
  return (
    <div>
      <h2>Pick your destination</h2>
    </div>
  );
};

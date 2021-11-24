import { useState, useEffect } from "react";

export interface Beverage {
  name: string;
  logo: string;
}

function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        dataSet(d);
        doneSet(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

function CustomHookComponent() {
  const { data, done } = useFetchData<Beverage[]>("/alterra.json");

  return <div>{done && <img src={data![0].logo} alt="Alterra logo" />}</div>;
}

export default CustomHookComponent;

import { useState, useEffect } from "react";

export interface Data {
  name: string;
  logo: string;
}

function useFetchData(url: string): {
  data: Data[] | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Data[] | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Data[]) => {
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
  const { data, done } = useFetchData("/alterra.json");
  return <div>{done && <img src={data![0].logo} alt="Alterra logo" />}</div>;
}

export default CustomHookComponent;

import { useEffect, useState } from "react";

const usePlantsFetch = () => {
  const [dataLoader, setDataLoader] = useState(true);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoader(true);
        const res = await fetch("/plants.json");
        const result = await res.json();
        setData(result);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setTimeout(() => {
          setDataLoader(false);
        }, 1500);
      }
    };

    fetchData();
  }, [setDataLoader]);

  return { dataLoader, data, errorMessage };
};

export default usePlantsFetch;

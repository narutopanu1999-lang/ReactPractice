import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
};

export default useCurrencyInfo;

import { useEffect, useState } from "react";

interface CurrencyData {
  [key: string]: number; // This assumes currency values are numbers
}

const getCurrencyInfo = (currency: string) => {
  const [currencyData, setCurrencyData] = useState<CurrencyData>({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setCurrencyData(res[`${currency}`]));
  }, [currency]);

  return currencyData;
};

export default getCurrencyInfo;

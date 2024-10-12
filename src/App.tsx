import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import getCurrencyInfo from "./hooks/getCurrencyInfo";

import "./App.css";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyData = getCurrencyInfo(from);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    setCurrencyOptions(Object.keys(currencyData));
  }, [currencyData]);

  // Conversion logic
  useEffect(() => {
    if (currencyData && currencyData[to]) {
      setConvertedAmount(amount * currencyData[to]);
    }
  }, [amount, to, currencyData]);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  }

  return (
    <>
 
      <InputBox
      handleSwap={handleSwap}
        currencyOptions={currencyOptions}
        from={from}
        to={to}
        onAmountChange={(amount) => setAmount(amount)}
        onFromChange={(from) => setFrom(from)}
        onToChange={(to) => setTo(to)}
        convertedAmount={convertedAmount}
      />
    </>
  );
}

export default App;

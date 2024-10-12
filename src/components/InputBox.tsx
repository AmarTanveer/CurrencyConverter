
interface Props {
  onFromChange: (from: string) => void;
  onToChange: (to: string) => void;
  currencyOptions: string[];
  onAmountChange: (amount: number) => void;
  convertedAmount: number;
  from: string;
  to: string;
  handleSwap: () => void;
}

function InputBox({ currencyOptions, onFromChange, onToChange, onAmountChange, convertedAmount, from, to, handleSwap }: Props) {
  

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-8 w-full items-center">
      <h1 className="text-white w-fit tracking-widest text-center bg-blue-800 px-4 py-2 rounded-md">CURRENCY CONVERTER</h1>
         <div className="bg-blue-900 w-1/3 h-[1px]"></div>
         </div>

      <div className="w-1/3 h-1/3 rounded-lg bg-blue-900 flex flex-col justify-center items-center gap-3">
        <div className="w-5/6 h-1/3 bg-white flex justify-between p-5 rounded-lg">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm text-gray-400">From</h3>
            <input
              className="w-1/3"
              type="number"
              name="from"
              id="from"
              defaultValue={1}
              min={1}
              onChange={(e) => onAmountChange(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm text-gray-400">Currency Type</h3>
            <select name="currency" value={from} onChange={(e) => onFromChange(e.target.value)} >
              {currencyOptions.map((currencyOption, index) => (
                <option key={index} value={currencyOption}>
                  {currencyOption}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="bg-blue-600 px-4 absolute py-1 text-white rounded-md" onClick={handleSwap}>
          swap
        </button>
        <div className="w-5/6 h-1/3 bg-white flex justify-between p-5 rounded-lg">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm text-gray-400">To</h3>
            <input
              className="w-1/3"
              type="number"
              name="from"
              id="to"
              min={1}
              disabled
              value={convertedAmount}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm text-gray-400">Currency Type</h3>
            <select name="currency" value={to} onChange={(e) => onToChange(e.target.value)}>
              {currencyOptions.map((currencyOption, index) => (
                <option key={index} value={currencyOption}>
                  {currencyOption}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputBox;

import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        type="button"
        onClick={handleClick}
        className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100"
      >
        You pressed me <span>{count}</span> times
      </button>

      <button
        type="button"
        onClick={handleReset}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Reset
      </button>
    </div>
  );
};

export default UseStateCounter;

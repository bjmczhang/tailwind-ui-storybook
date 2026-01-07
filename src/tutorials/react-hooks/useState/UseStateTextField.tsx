import { useState } from "react";

const DEFAULT_TEXT = "hello";

const UseStateTextField = () => {
  const [text, setText] = useState(DEFAULT_TEXT);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText(DEFAULT_TEXT);
  };

  return (
    <div className="flex flex-col items-start gap-4 ">
      <input
        id="email"
        name="email"
        type="email"
        value={text}
        onChange={handleChange}
        aria-label="Email"
        className="w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
      <p>You typed: {text}</p>
      <button
        type="button"
        onClick={handleReset}
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Reset
      </button>
    </div>
  );
};

export default UseStateTextField;

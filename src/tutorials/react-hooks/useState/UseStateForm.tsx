import { useState } from "react";

const DEFAULT_TEXT = "Ben";
const DEFAULT_AGE = 38;

const UseStateForm = () => {
  const [text, setText] = useState(DEFAULT_TEXT);
  const [age, setAge] = useState(DEFAULT_AGE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleIncrement = () => {
    setAge(age + 1);
  };

  const handleReset = () => {
    setText(DEFAULT_TEXT);
    setAge(DEFAULT_AGE);
  };

  return (
    <div className="space-y-2">
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={text}
        placeholder="you@example.com"
        aria-label="Email"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleIncrement}
          className="rounded-sm bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Increment age
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="rounded-sm bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100"
        >
          Reset
        </button>
      </div>
      <p>
        Hello, {text}. You are {age}.
      </p>
    </div>
  );
};

export default UseStateForm;

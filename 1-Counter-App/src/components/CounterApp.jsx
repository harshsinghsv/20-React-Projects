import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-200 font-inter rounded-3xl shadow-xl/30">
      <h2 className="text-2xl font-bold mb-4">Counter App</h2>
      <p className="text-xl mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-3xl inset-shadow-sm inset-shadow-white/50"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-3xl inset-shadow-sm inset-shadow-white/50"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-3xl inset-shadow-sm inset-shadow-white/50"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;

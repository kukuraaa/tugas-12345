import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const tambah = () => {
    setCount(count + 1);
  };
  const kurang = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h1>{count}</h1>

      <button onClick={tambah}>+</button>
      <button onClick={kurang}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;
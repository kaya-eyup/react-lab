import { useState } from "react";

export function Counter() {
  // 1) state: ekrandaki sayı
  const [count, setCount] = useState(0);
  // 2) handleIncrement: sayıyı 1 artırır
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  // 3) handleDecrement: sayıyı 1 azaltır, 0'ın altına inmez
  function handleDecrement() {
    setCount((prev) => Math.max(0, prev - 1));
  }
  // 4) handleIncrementTwice: deney ② — aynı tıklamada iki kez +1
  function handleIncrementTwice() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Sayaç</h2>
      <p>{count}</p>
      <button onClick={handleDecrement} disabled={count === 0}>−</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleIncrementTwice}>+2 (deney)</button>
    </div>
  );
}

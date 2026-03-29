"use client"
import {useState} from 'react'

function Throttle() {
  let [count, setCount] = useState(0);
    function throttle(func, delay) {
        let timer = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - timer < delay) {
                return;
            }
            timer = now;
            return func(...args);
        };
    }
      const throttledFunc = throttle(() => {
    setCount((prev) => prev + 1); 
  }, 5000);
 return (
    <div>
      <h2>Throttle: {count}</h2>
      <button onClick={throttledFunc}>
        Click Me
      </button>
    </div>
  );

}

export default Throttle
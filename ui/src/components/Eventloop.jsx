"use client";

import { useState, useEffect } from 'react';

function Eventloop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("first");

    const promise1 = new Promise((resolve, reject) => {
      console.log("second");
      reject(true);
    });

    promise1.catch(() => {
      console.log("error");
    });

    const timer1 = setTimeout(() => {
      console.log("forth");
      setCount(c => c + 100);
    }, 1000);


    // const timer3 = setInterval(() => {
    //   console.log("sixth");
    //   setCount(c => c + 300);
    // }, 5000);

    // ✅ cleanup (VERY IMPORTANT)
    return () => {
      clearTimeout(timer1);
      clearInterval(timer3);
    };
  }, []);

  return <div>Eventloop: {count}</div>;
}

export default Eventloop;
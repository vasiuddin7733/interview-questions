"use client";

import { useState } from 'react';

function Debounce1() {
    let [count, setConut] = useState(100)
    function debounce(func, deplay){
        let timer
        return function(...args){
            clearTimeout(timer)
            setTimeout(() => {
                console.log("before dounce:" + count);
                // func(...args)
            }, deplay);
;
        }
    }
    const debounce1 = debounce((a,b,c=300) => setConut(count+a+b+c), 1000)
    debounce1(100,200,500)

    console.log("after debounce:" + count);
  return (
    <div>Debounce1: {count}</div>
  )
}

export default Debounce1
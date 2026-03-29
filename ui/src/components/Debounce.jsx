"use client";

import { useState } from 'react';

function Debounce() {
    let [count, setConut] = useState(100)
    function debounce(func, deplay){
        let timer
        return function(...args){
            clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, args)
            }, deplay);
;
        }
    }
    const debounce1 = debounce((a,b) => setConut(count+a+b), 1000)
    debounce1(200,200)
  return (
    <div>Debounce: {count}</div>
  )
}

export default Debounce
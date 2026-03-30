"use client";
import React from "react";

function Reduce() {
  const arr1 = [1, 2, 3,4,5];
  const arr2 = ["a", "b", "c", "a"];
  const arr3 = [1, [1,2,[1,2,3,[1,2,3,4]]]];

  const sum = arr1.reduce((acc, cur)=>acc+cur, 0)
  const mutiply = arr1.reduce((acc, cur)=>acc*cur, 1)
  const maxVal = arr1.reduce((acc,cur)=>cur>acc?cur:acc, arr1[0])
  const minVal = arr1.reduce((acc,cur)=>cur<acc?cur:acc, arr1[0])
  const countKey = arr2.reduce((acc, cur)=> { acc[cur] = (acc[cur] || 0) + 1; return acc; }, {})
  const countKey2 = arr2.reduce((acc, cur)=> { acc[cur] = acc[cur]?acc[cur]+1:1; return acc; }, {})
  const flattened1 =(arr)=> arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattened1(cur) : cur), [])
  
  return (
    <div>
      <h2>Sum: {sum}</h2>
      <h2>Product: {mutiply}</h2>
      <h2>Max Value: {maxVal}</h2>
      <h2>Min Value: {minVal}</h2>
      <h2>Count: {JSON.stringify(countKey)}</h2>
      <h2>Count2: {JSON.stringify(countKey2)}</h2>
      <h2>Flattened: {JSON.stringify(flattened1(arr3))}</h2>
    </div>
  );
}

export default Reduce;
import React from 'react'

export default function Closure() {
  let count = 10;
  const inner = () => {
    count++;
    return <div>{count}</div>;
  };
  return inner();
}

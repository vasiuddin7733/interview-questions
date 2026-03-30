import React from 'react'

function ArrObj() {
    const arr = ["a", "b", "c","a"];

  const obj1 = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur]||0)+1;
    return acc;
  }, {});

  const obj2 = arr.reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
  }, {});

  const obj3 = arr.reduce((acc, cur) => {
    acc[cur] = {count: (acc[cur]?.count || 0) + 1};
    return acc;
  }, {});



  return (
    <div>
      {/* <div>ArrObj1: {JSON.stringify(obj1)}</div>
      <div>ArrObj2: {JSON.stringify(obj2)}</div> */}
      <div>ArrObj3: {JSON.stringify(obj3)}</div>
    </div>
  )
}

export default ArrObj
import React from 'react'

function Duplicates() {
    const arr = [1, 2, 3, 4, 5, 1, 2];

    const removeDuplicate1 =  arr.reduce((acc,cur)=>{
        !acc[cur] && (acc[cur] = cur)
        return acc
    },[])

    const removeDuplicate2 =  arr.reduce((acc,cur)=>{
        !acc[cur] && (acc.push(cur))
        return acc
    },[])

    const removeDuplicate3 =  arr.reduce((acc,cur)=>[...new Set([...acc, cur])],[])

    const removeDuplicate4 =  [...new Set(arr)]

    const removeDuplicate5 =  arr.reduce((acc,cur)=>{
        !acc.includes(cur) && acc.push(cur)
        return acc
    },[])

    const removeDuplicate6 =  arr.reduce((acc,cur)=>{
        let reDu = false
        !acc.includes(cur) && (reDu = true)
        if(reDu) acc.push(cur)
        return acc
    },[])
  
    return (
      <div>
        <div>Duplicate1: {JSON.stringify(removeDuplicate1)}</div>
        <div>Duplicate2: {JSON.stringify(removeDuplicate2)}</div>
        <div>Duplicate3: {JSON.stringify(removeDuplicate3)}</div>
        <div>Duplicate4: {JSON.stringify(removeDuplicate4)}</div>
        <div>Duplicate5: {JSON.stringify(removeDuplicate5)}</div>
        <div>Duplicate6: {JSON.stringify(removeDuplicate6)}</div>
      </div>
    )

}

export default Duplicates
import React from 'react'

function Reduce() {
    function  reduce((acc, curr) => acc + curr, 0) {
        let arr1 = [1,2,3,4,5]
        return arr1.reduce((acc, curr) => acc + curr, 0)
    }
 return (
    <div>Reduce</div>
  )
}

export default Reduce
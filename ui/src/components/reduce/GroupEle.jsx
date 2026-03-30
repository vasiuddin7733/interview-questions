import React from 'react'

function GroupEle() {
    const users = [
    { name: "A", age: 20, location: "hyderabad" },
    { name: "B", age: 25, location: "bangalore" },
    { name: "C", age: 20, location: "chennai" },
    { name: "D", age: 25, location: "mumbai" },
    ];

    const group1 = users.reduce((acc, cur) => {
        !acc[cur.age] && (acc[cur.name] = cur.name);
        return acc;
    }, {});

    const group2 = users.reduce((acc, cur) => {
        !acc[cur.age] && (acc[cur.name] = {name:cur.name});
        return acc;
    }, {});

    const group3 = users.reduce((acc, cur) => {
        !acc[cur.age] && (acc[cur.name] = {name:cur.name, age:cur.age});
        return acc;
    }, {});

    const group4 = users.reduce((acc, cur) => {
        !acc[cur.age] && (acc[cur.name] = cur);
        return acc;
    }, {});

    const group5 = users.reduce((acc, cur) => {
        !acc[cur.age] ?(acc[cur.age] = [cur]): acc[cur.age].push(cur);
    return acc; 
    }, {});

    const group6 = users.reduce((acc, curr) => {
        if (!acc[curr.age]) acc[curr.age] = [];
        acc[curr.age].push(curr);
        return acc;
    }, {});

    return (
        <div>
            <h2>Group5: {JSON.stringify(group5)}</h2>
        </div>
    )
}

export default GroupEle
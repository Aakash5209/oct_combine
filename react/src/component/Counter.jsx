// const { useEffect } = require("react")
// const { useState } = require("react")

import {useState,useEffect} from 'react'




export const Counter = ()=>{
    // const [count,setCount] = useState(()=>{
    //     const saveCont = localStorage.getItem('counter')
    //     return saveCont? parseInt(saveCont,10) :0
    // })

    let [count,setCount] = useState(0)

    // const [count2,setCount2] = useState(0)

    let obj = {count:10}
    // setCount2(count2+1)

    // useEffect(()=>{
    //     console.log("useeffect is fire having dep on count222222222")


    // },[count2])

    useEffect(()=>{
        console.log("useeffect is fire having dep on count")
        // console.log(count)
        localStorage.setItem('counter',count)



    },[count])

    // console.log('obj - count',obj.count)

    // useEffect(()=>{
    //     console.log("i m use effect empty dep")

    // })

    const handleAdd=()=>{
        setCount(count++)
        obj.count++

        console.log("obj count--",obj.count)
    }

    

    return <>
    <h1>count vale is {count}</h1>
    <h1>count vale is {obj.count}</h1>
    {/* <h1>count vale is {count2}</h1> */}
    {/* <button onClick={()=>setCount(count+1)}>ADD</button> */}
    <button onClick={()=>setCount(count++)}>ADD</button>


    <button onClick={()=>setCount(count-1)}>DECE</button>
    <button onClick={()=>setCount(0)}>reset</button>
    {/* <button onClick={()=>setCount2(count2+1)}>add in count2</button> */}
    </>
}
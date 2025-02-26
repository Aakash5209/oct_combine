import { useEffect, useState } from "react"

export const Fetch = ()=>{

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((response)=>{
            if(!response.ok){
                throw new Error("netwokr issue")
            }
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    },[])


    return <>
    <div>
        <h1>here is ur data</h1>
        <h2>{data.map((ietm)=>(
            <h6>{ietm.title}</h6>
        ))}</h2>
    </div>
    </>
}
import { useEffect, useState } from "react"
import axios from 'axios'



export const Axios = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((response) => {
                console.log(response)
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])


    return <>

        <div>
            <h1>here is ur data</h1>
            <h2>{data.map((ietm) => (
               <>
                <h6>{ietm.title}</h6>
                <p>{ietm.body}</p>
               </>
            ))}</h2>
        </div>

    </>


}
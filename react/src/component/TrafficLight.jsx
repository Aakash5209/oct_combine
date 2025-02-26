import { useEffect, useState } from "react"
import './traffic.css'

export const TrafficLight = ()=>{

    const [currentLight,setCurrentLight] = useState('red')

    useEffect(()=>{
        let timer;
        timer = setInterval(()=>{
            setCurrentLight((prevLight)=>{
                if(prevLight==='red') return 'yellow'
                if(prevLight==='yellow') return 'green'
                return 'red'

            })

        },2000)


        return ()=>clearInterval(timer)
    },[])



    return <>
    <h1>Traffic Light</h1>
    <div className="singal_conatiner">
        <div className={`circle ${currentLight==='red'?'red':''}`}></div>
        <div className={`circle ${currentLight==='yellow'?'yellow':''}`}></div>
        <div className={`circle ${currentLight==='green'?'green':''}`}></div>
       

    </div>
    </>
}
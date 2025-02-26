import { useEffect, useState } from "react"



export const StopWatch = ()=>{

    const [time, setTime] = useState(0)
    const [ isRunning, setIsRunning] = useState(false)


    useEffect(()=>{
        let timer;

        if(isRunning){
            timer =  setInterval(() => {
                setTime((prev)=>prev+10)
                
             }, 10);

        }

        return ()=> clearInterval(timer)
    },[isRunning])

    const formatTime=(time)=>{
        const ms =`0${Math.floor(time%1000)}`.slice(-2)
        const sec = `${Math.floor((time/1000)%60)}`.slice(-2)
        const min = `0${Math.floor((time/60000)%60)}`.slice(-2)

        return `${min} : ${sec} : ${ms}`

    }


    const handelStop = ()=>{
        setIsRunning(false)

    }
    const handelStart = ()=>{
        setIsRunning(true)

    }



    return<>
    <h1>stop watch</h1>
    <div>
        <h1> current time  {formatTime(time)} </h1>
        <button onClick={handelStart}>Start</button>
        <button onClick={handelStop}>Stop</button>
        <button onClick={()=>setTime(0)}>Reset</button>
    </div>
    </>
}
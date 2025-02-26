import { useEffect, useState } from "react"




export const AutomaticOtp = ()=>{

    const [otp,setOtp] = useState('')
    const [counter, setCounter] = useState(20) 

    const generateOtp = ()=>{
        const newOtp =   1000 + Math.floor( Math.random() * 9000)
        setOtp(newOtp)
    }

    useEffect(()=>{
        let timer1
        let timer2
        generateOtp()

        // console.log("hiiii")

        timer1 = setInterval(()=>{
            setCounter(prev=>prev>0?prev-1:prev)
        },1000)

        timer2 =  setInterval(()=>{
            generateOtp()
            setCounter(20)


        },20000)

        return ()=>{
            clearInterval(timer1)
            clearInterval(timer2)
        }

    },[])


    return <>
    <h1>Your Otp is {otp}</h1>
    <h2>New Otp will generate in {counter} sec</h2>
    </>
}
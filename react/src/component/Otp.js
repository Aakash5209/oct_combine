import { useEffect, useState } from "react"




export const Otp = ()=>{

    const [otp,setOtp] = useState('')

    const handleOtp = ()=>{
        const newOtp =   1000 + Math.floor(Math.random()*9000)
        setOtp(newOtp)
    }

    useEffect(()=>{
        handleOtp()

    },[])


    return <>
    <h1>OTP is {otp}</h1>

    <button onClick={handleOtp}>Generate Otp</button>



    </>
}
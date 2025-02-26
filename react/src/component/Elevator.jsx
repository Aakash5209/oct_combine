import { useState } from "react"
import './elevator.css'


export const Elevator = ()=>{

    const [currentFloor,setCurrentFloor] = useState(1)
    const [targetFloor, settargetFloor] = useState(null)
    const [isMoving,setIsMoving] = useState(false)


    const Floors = [1,2,3,4,5]



    const moveToFloor = (floor)=>{
        if(floor == currentFloor) return
        settargetFloor(floor)
        setIsMoving(true)

        // delay
        const timeToMove = Math.abs(floor-currentFloor)*1000

        setTimeout(()=>{

            setIsMoving(false)
            setCurrentFloor(floor)
        },timeToMove)

    }

    return <>
    <div className="elevatorContainer">
        <div className="elevatorShaft">
            <div className= {`elevator`} style={{bottom:`${(currentFloor -1)*20}%`}}>
                {isMoving?"Moving....":`Floor ${currentFloor}`}


            </div>
        </div>

        <div className="btn">
            {Floors.map((floor)=>(
                <button
                onClick={()=>moveToFloor(floor)}

                >{`Got to floor ${floor}`}</button>
            ))}
        </div>

    </div>

    </>
}
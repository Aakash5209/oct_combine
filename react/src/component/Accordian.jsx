import { useState } from "react"

export const Accordian = ()=>{

    const [activeindex,setActiveIndex] = useState(null)

    const data = [
        {title:'section 1', decription:"hi i m section 1"},
        {title:'section 2', decription:"hi i m section 2"},
        {title:'section 3', decription:"hi i m section 3"},
        {title:'section 4', decription:"hi i m section 4"},
    ]

    const handleIndex = (index)=>{

        setActiveIndex(activeindex===index?null:index)

    }



    return <>
    <h1>hi i m Accordian</h1>
    <div className="container">
        {
            data.map((item,index)=>(
            <div>
                <button onClick={()=>handleIndex(index)}>{item.title}</button>

                {
                    activeindex === index && <p>{item.decription}</p>
                }

            </div>
        ))
        }

    </div>
    </>
}
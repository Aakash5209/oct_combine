import { useState } from "react"

export const DynamicTab = ()=>{

    const [tabs,setTabs] = useState(['Tab 1'])
    const [activeIndex,setActiveIndex] = useState(0)


    const handleAdd = ()=>{
        setTabs([...tabs,`Tab ${tabs.length+1}`])

    }
    const removeTab = ()=>{
        
        setTabs(tabs.filter((_,i)=>i!==activeIndex))
        setActiveIndex(tabs.length-2)

    }

    return <>
    <h1>This is Dyanmic tab</h1>
    <div>
        <button onClick={handleAdd}>Add Tab</button>
        <div>

            {tabs.map((tab,index)=>(
                <button onClick={()=>setActiveIndex(index)}
                style={{background:index===activeIndex?'yellow':''}}>
                    {tab}
                </button>
            ))}

            <button onClick={removeTab}>Remove Tab</button>

          
        </div>
    </div>

    </>
}
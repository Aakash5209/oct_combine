import { useState } from "react"
import './modal.css'


export const Modal = ()=>{

    const [isOpen,setIsOpen] =  useState(false)

    return <>
   <div className="container">
        <button onClick={()=>setIsOpen(true)}> open Modal</button>
        
        { isOpen &&(
            <div className="modal-overlay" onClick={()=>setIsOpen(false)}>


                <div className="modal" onClick={(e)=>e.stopPropagation()}>
                <h2>Modal is open here the required details</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem est consectetur molestias.</p>
                <button onClick={()=>setIsOpen(false)}> close</button>
                </div>


            </div>

        )}

    </div>
    </>




}
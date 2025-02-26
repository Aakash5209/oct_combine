import { useEffect, useState } from "react"


export const ImageGallery = ()=>{

    const [currrentIndex, setCurrentIndex] = useState(0)

    const images = [
        "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
        "https://fastly.picsum.photos/id/1081/200/300.jpg?grayscale&hmac=HbMhQ7XjQLFTS14IBMZ0YejdZm_pSPmzzI4jODn7ch4",
        "https://fastly.picsum.photos/id/1081/200/300.jpg?blur=5&hmac=RFqj7erEJXouFmBuH7LkpoWZmxjS00jBZulqmyvE99A"
    ]

    useEffect(()=>{
        console.log(currrentIndex)

    },[currrentIndex])

    const handleNext = ()=>{
        setCurrentIndex((currrentIndex+1)%images.length)

        
    }

    const handlePrev = ()=>{
        
     setCurrentIndex((currrentIndex+images.length-1)%images.length)


    }


    return <>
    <h1>Image Gallery</h1>
    <div className="gallery-container">
        <img src={images[currrentIndex]} alt="random img" />

        <div className="btn">
          
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>


    </div>
    </>




}
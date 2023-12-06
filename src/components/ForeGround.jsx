import React from "react"; 
import Card from "./Card"

function ForeGround() {
    const data = [
        {
            desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize : ".9mb",
            close: false,
            tag : {
                isOpen : true,
                tagTitle : "Downlaod Now",
                tagColor : "bg-green-600",
            }
        },
        {
            desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize : ".9mb",
            close: false,
            tag : {
                isOpen : true,
                tagTitle : "Downlaod Now",
                tagColor : "bg-green-600",
            }
        },
        {
            desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize : ".9mb",
            close: false,
            tag : {
                isOpen : true,
                tagTitle : "Upload",
                tagColor : "bg-sky-500",
            }
        },
    ]
  return (
    <>
        <div className='flex gap-5 flex-wrap w-full h-full fixed top-0 left-0 z-[3] p-5'>
            {
                data.map((item, index) => (
                    <Card key={index} data={item}/>
                ))
            }
        </div>
    </>
  )
}

export default ForeGround

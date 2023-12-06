import React, { useRef } from "react";
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"



function Card({data}) {
    const ref = useRef(null);
  return (
    <>
        <motion.div 
        drag 
        dragConstraints={ref}
        ref={ref}
        whileDrag={{scale : 1.2}} 
        dragElastic={1.2}
        dragTransition={{bounceStiffness: 600, bounceDamping: 10}} 
        className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[30px] text-white px-8 py-10 overflow-hidden">
            <FaRegFileAlt/>
            <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
            <div className="footer absolute bottom-0 px-0 w-full h-20 left-0">
                <div className="flex items-center justify-between px-8 text-zinc-200">
                    <h5>{data.fileSize}</h5>
                    {data.close? <IoClose className="cursor-pointer"/> : <LuDownload className="cursor-pointer"/>}
                </div>


                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-5 ${data.tag.tagColor} flex items-center justify-center`}>
                        <h3 className="text-sm">{data.tag.tagTitle}</h3>
                    </div>
                    )
                }



            </div>
        </motion.div>
    </>
  )
}

export default Card

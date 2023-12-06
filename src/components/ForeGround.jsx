import Card from "./Card"
import data from "../data/data.js"

function ForeGround() {
    
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

import { useState } from 'react'
import {sublinks,data} from '../data'

const SubLinks = () => {
  const [display, setDisplay] = useState(0)
 
  const { image, info, title } = sublinks[display]

  const indexHandler = (id)=>{
    setDisplay(id-1)
  }
  return (
    <section className="align-element mt-4 mb-24 ">
      <div className="border-t-2 mt-6 pb-4 lg:border-none"></div>
      {data.map((links) => {
        const { id, index, link } = links
        return (
          <>
            <div className="border-b-2  grid justify-center mb-4   lg:border-none lg:inline-grid lg:ml-48">
              <button
                className="active:border-b-2 pb-2  border-red-500 focus:outline-none  focus:border-b-2 "
                key={index}
                onClick={() => indexHandler(id)}
              >
                <p className="pb-2 ">{link}</p>
              </button>
            </div>
          </>
        )
      })}
      <div className="lg:border-b-2 w-100"></div>
      <div className=" mt-10 gap-24 lg:grid grid-cols-2 items-center ">
        <div className="relative top-20 sm:relative right-20 order-first ">
          <div className="bg-blue-800  lg:h-[300px] align-element rounded-tr-full rounded-br-full">
            <img
              src={image}
              alt=""
              className="relative left-[120px] bottom-20 sm:relative left-20 bottom-10   "
            />
          </div>
        </div>
        <div className="grid justify-center mt-24 m-auto   lg: text-center ">
          <h3 className="pb-4 font-bold text-3xl  text-wrap lg:pb-4 font-bold text-3xl ">
            {title}
          </h3>
          <h4 className=" mb-4 text-md leading-8  max-w-xl text-slate-500">
            {info}
          </h4>
          <button className="btn bg-[#5368df] text-white hover:bg-white hover:text-[#5368df] hover:border-[#5368df]">
            More Info
          </button>
        </div>
      </div>
    </section>
  )
}

export default SubLinks

import React from 'react'
import Forms from './Forms'

const SubFooter = () => {
  return (
    <div className="bg-[#5368df]">
      <div className="align-element grid  justify-center text-center">
        <h3 className="mt-6 text-white text-[20px] capitalize">
          35,000+ already joined
        </h3>
        <h2 className="text-white text-[30px] mb-6">
          Stay up-to-date with what we're doing
        </h2>

        <div className="lg:ml-20 mb-20">
          <Forms />
        </div>
      </div>
    </div>
  )
}

export default SubFooter

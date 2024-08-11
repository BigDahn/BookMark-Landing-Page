import {useState} from 'react'

const Accords = ({title,info}) => {
  const [moreInfo, setMoreInfo] = useState(false)

  const handleInfo = () => {
    setMoreInfo(!moreInfo)
  }
  return (
    <div className="align-element mb-4 border-b-2">
      <div className="flex justify-between pb-4 ">
        <h3>{title}</h3>
        <button onClick={() => handleInfo() }>
          <img src="/Bookmark image/icon-arrow.svg" 
          className={moreInfo ? 'rotate-180' : 'rotate-0'}
          alt="" />
        </button>
      </div>
      {moreInfo && <p className="text-justify pb-6">{info}</p>}
    </div>
  )
}

export default Accords

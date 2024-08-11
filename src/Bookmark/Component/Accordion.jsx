import {questions} from '../data'
import Accords from './Accords'

const Accordion = () => {
  return (
    <section className="align-element">
      <div className=" grid justify-center m-auto mt-8 text-center lg:mt-32  ">
        <h2 className="pb-4 font-bold text-3xl  text-wrap lg:pb-4 font-bold text-3xl">
          Frequently Asked Questions
        </h2>
        <h4 className="text-wrap pb-6 leading-loose text-lg text-slate-500  lg:text-wrap pb-6 leading-loose text-lg text-slate-500">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </h4>
        <div className="border-b-2 mb-4"></div>
        <div className="">
          {questions.map((question) => {
            return <Accords key={question.id} {...question} />
          })}
        </div>
      </div>
      <button className="btn bg-[#5368df] text-white w-[120px] mt-4 mb-8 ml-16 hover:bg-white hover:text-[#5368df] hover:border-[#5368df] lg:mt-10 lg:ml-[550px]">
        More Info
      </button>
    </section>
  )
}

export default Accordion



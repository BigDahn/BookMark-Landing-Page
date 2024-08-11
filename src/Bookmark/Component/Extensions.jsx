

const Extensions = () => {
  return (
    <section className="align-element grid justify-center ">
      <div className=" grid justify-center m-auto  text-center  ">
        <h2 className="pb-4 font-bold text-3xl  text-wrap lg:pb-4 font-bold text-3xl">
          Download the extension
        </h2>
        <h4 className="text-wrap pb-6 leading-loose text-lg text-slate-500 lg:text-wrap pb-6 leading-loose text-lg text-slate-500">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </h4>
      </div>
      <article className="align-element grid grid-row-3 lg:grid-cols-3 gap-8 relative">
        <div className=" w-66 rounded grid justify-center text-center shadow shadow-gray-900  ">
          <img
            src="/Bookmark image/logo-chrome.svg"
            className="w-24 ml-[92px] mt-4 lg:ml-24 "
          />
          <h2 className="leading-loose m-4 font-bold ">Add to Chrome</h2>
          <p className="leading-loose tracking-normal m-4 font-medium">
            Minimum version 62
          </p>
          <img src="/Bookmark image/bg-dots.svg" alt="" />
          <button className="btn bg-[#5368df] text-white w-[240px] ml-5 mb-6 mt-10 mr-4 hover:bg-white hover:text-[#5368df] hover:border-[#5368df] ">
            Add & Install Extension
          </button>
        </div>
        <div className=" w-66 rounded text-center grid justify-center shadow shadow-gray-900 lg:relative top-10 left-10  ">
          <img
            src="/Bookmark image/logo-firefox.svg"
            className="w-24 ml-[92px] mt-4 lg:ml-24 "
          />
          <h2 className="leading-loose m-4 font-bold ">Add to Firefox</h2>
          <p className="leading-loose tracking-normal m-4 font-medium">
            Minimum version 55
          </p>
          <img src="/Bookmark image/bg-dots.svg" alt="" />
          <button className="btn bg-[#5368df] text-white w-[240px] ml-5 mb-6 mt-10 hover:bg-white hover:text-[#5368df] hover:border-[#5368df]">
            Add & Install Extension
          </button>
        </div>
        <div className=" w-66 rounded text-center grid justify-center shadow shadow-gray-900  lg:relative top-20 left-20 ">
          <img
            src="/Bookmark image/logo-opera.svg"
            className="w-24 ml-[92px] mt-4 lg:ml-24 "
          />
          <h2 className="leading-loose m-4  font-bold ">Add to Opera</h2>
          <p className="leading-loose tracking-normal m-4 font-medium">
            Minimum version 46
          </p>
          <img src="/Bookmark image/bg-dots.svg" alt="" />
          <button className="btn bg-[#5368df] text-white mb-6 mt-10  w-[240px] ml-5 hover:bg-white hover:text-[#5368df] hover:border-[#5368df]">
            Add & Install Extension
          </button>
        </div>
      </article>
    </section>
  )
}

export default Extensions

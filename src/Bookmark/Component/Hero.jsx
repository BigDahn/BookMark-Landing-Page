


const Hero = () => {
  return (
    <section className="align-element py-20 grid  lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className=" max-w-4xl lg:max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          A Simple Bookmark Manager
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-10 flex flex-row   lg:flex ">
          <button className="btn w-[105px] bg-[#5368df] text-white hover:bg-white hover:text-[#5368df] hover:border-[#5368df] lg:w-[160px] ">
            Get It On Chrome
          </button>
          <button className="btn w-[105px] ml-4 lg:ml-6 lg:w-[160px]">
            Get It On FireFox
          </button>
        </div>
      </div>
      <div className="relative left-8 order-first lg:order-last relative right-0">
        <div className="bg-blue-800 align-element relative rounded-tl-full rounded-bl-full opacit-100">
          <img
            src="/Bookmark image/illustration-hero.svg"
            alt=""
            className="relative bottom-20 right-30 sm:relative bottom-10 right-[100px]  "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

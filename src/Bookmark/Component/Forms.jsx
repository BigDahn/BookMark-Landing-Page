import {  useForm } from 'react-hook-form'

const Forms = () => {
const {
  register,
  handleSubmit,
  
  formState: { errors },
} = useForm()

 const onSubmit = (data) => {
  console.log(data)
 }
  return (
    <form
      className="grid grid-rows-2  lg:grid-cols-2 "
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={
          errors.email &&
          ' border border-red-500 h-[68px] rounded-md bg-red-500'
        }
      >
        <input
          type="text"
          id="email"
          name="email"
          size="30"
          placeholder="Enter Your Email Address"
          className={
            errors.email
              ? 'cursor-pointer peer rounded-sm  bg-white border  font-bold text-cslate-900  hover:border-cslate-900 focus:outline-none focus:ring-[#d7da2f] focus:border-red-600 block flex-1 min-w-0 w-full text-sm p-2.5'
              : 'cursor-pointer peer rounded-sm  bg-white border border-cslate-500 font-bold text-cslate-900 hover:border-cslate-900 focus:outline-none focus:ring-[#d7da2f] focus:border-[#d7da2f] block flex-1 min-w-0 w-full text-sm p-2.5'
          }
          {...register('email', {
            required: "Email is Required",
               pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Whoops, make sure it's an email!"
              }
              
              
            
          })}
        />
        {errors.email && (
          <p className="text-white text-left pl-2 pb-2 text-[12px]">
            {errors.email.message}
          </p>
        )}
        {errors.email && (
          <span>
            <img
              src="/Bookmark image/icon-error.svg"
              alt=""
              className="relative  lg:relative bottom-[58px] left-[250px]"
            />
          </span>
        )}
      </div>

      <button
        className="border border-red-500 mt-2  text-white rounded-md bg-red-500  h-[40px] lg:mt-0 ml-4 mr-4 hover:bg-white hover:text-red-500 "
        onClick={onSubmit}
      >
        Contact Us
      </button>
    </form>
  )
}

export default Forms

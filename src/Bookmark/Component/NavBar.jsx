import { useDispatch, useSelector} from "react-redux"

import { openModal } from "../features/modalSlice/ModalSlice"

const NavBar = () => {
  const dispatch = useDispatch()
  
  const { isModalOpen } = useSelector((state) => state.modal)
 
  
  return (
    <nav className="">
      <div className="navbar align-element flex justify-between mt-4 ">
        <div className={isModalOpen && `opacity-0`}>
          <img src="/Bookmark image/logo-bookmark.svg" alt="" />
        </div>
        <button className="lg:hidden w-8" onClick={() => dispatch(openModal())}>
          <img
            src="/Bookmark image/icon-hamburger.svg"
            alt=""
            className={isModalOpen && `opacity-0`}
          />
        </button>
        <ul className=" hidden lg:flex p-auto cursor-pointer">
          <a href="#features">
            <li className="pr-8 hover:text-red-500">FEATURE</li>
          </a>
          <li className="pr-8 hover:text-red-500">PRICING</li>
          <li className="pr-8 hover:text-red-500">CONTACT</li>
          <li className="pr-8  border pl-8 rounded-md bg-red-600 text-white pt-[2px] pb-[2px] hover:border-red-500 hover:text-red-500 hover:bg-white">
            LOGIN
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

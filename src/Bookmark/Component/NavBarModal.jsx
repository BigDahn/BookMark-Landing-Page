import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../features/modalSlice/ModalSlice'

const NavBarModal = () => {
  const { isModalOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  return (
    <aside
      className={`${
        isModalOpen
          ? `    align-element bg-[#51556b] h-[65vh] pt-4 w-full   fixed top-0 left-0 z-40 opacity-95 translate-y-0  gap-y-4 ease-linear transition-all delay-100 lg:hidden  `
          : ` w-full align-element bg-[#51556b] h-[65vh]  fixed top-0 left-0  gap-y-4  -translate-y-full ease-linear transition-all delay-100 `
      }`}
    >
      <div className="flex justify-between">
        <img src="/Bookmark image/logo-bookmark.svg" alt="" className="" />
        <button onClick={() => dispatch(closeModal())}>
          <img src="/Bookmark image/icon-close.svg" alt="" />
        </button>
      </div>
      <div className="grid mt-8 justify-center cursor-pointer ">
        <ul className="text-white w-[40vh] text-center ">
          <li className="border-b-2 pb-2 mb-8 hover:text-red-500">FEATURES</li>
          <li className="border-b-2 pb-2 mb-8 hover:text-red-500">PRICING</li>
          <li className="border-b-2 pb-2 mb-8 hover:text-red-500">CONTACT</li>
          <button className="border pl-12 pr-12 w-[40vh] rounded mt-6 pb-[2px] pt-[2px] hover:border-red-500 hover:text-red-500 ">
            <li>LOGIN</li>
          </button>
        </ul>
      </div>
      <div className="flex mt-10 justify-center cursor-pointer ">
        <img
          src="/Bookmark image/icon-twitter.svg"
          alt=""
          className="pr-8 h-4"
        />
        <img src="/Bookmark image/icon-facebook.svg" alt="" className="h-4" />
      </div>
    </aside>
  )
}

export default NavBarModal

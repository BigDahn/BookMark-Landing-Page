import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="align-element pt-4 pb-4 gap-4 flex flex-col lg:flex-row justify-between">
        <div className=" grid gap-4 justify-center lg:flex">
          <img src="/Bookmark image/logo-bookmark.svg" alt="" />
          <ul className="grid gap-2 justify-center  lg:flex">
            <a href="">
              <li className="hover:text-red-500">FEATURES</li>
            </a>
            <a href="">
              <li className="hover:text-red-500">PRICING</li>
            </a>
            <a href="">
              <li className="hover:text-red-500">CONTACT</li>
            </a>
          </ul>
        </div>

        <div className=" flex gap-4   justify-center lg:flex  ">
          <img
            src="/Bookmark image/icon-facebook.svg"
            alt=""
            className="gap-2"
          />
          <img src="/Bookmark image/icon-twitter.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer

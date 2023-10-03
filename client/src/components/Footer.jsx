import React from "react";

import {} from "react-icons/";

import logo from "../../images/logo.png";
import { SiEthereum } from "react-icons/si";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32" /> */}
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">

      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Can contact me at</p>
      <p className="text-white text-sm text-center font-medium mt-2">codesai127.0.0.1@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-white mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">© 2023-2024 sai_terukula</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;

import React from "react";
import { BsFillPersonBadgeFill, BsPerson, BsPersonCircle, BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt, BiSolidSchool } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum} from "react-icons/si";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Name of the College, Person and Project.
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        The purpose of this crypto exchange project is to enable the exchange of Ethereum,
         offering users a platform to transfer their digital assets securely and conveniently.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="SAKET COLLEGE OF ARTS, SCIENCE & COMMERCE"
          icon={<BiSolidSchool fontSize={21} className="text-white" />}
          subtitle=""
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="TERUKULA SAI"
          icon={<BsPerson fontSize={21} className="text-white align-text-top"/>}
          subtitle="PNR No : 2021016400730531‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
                    Roll No : 233026 "
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Decentralized Transaction Web3 Application"
          icon={<SiEthereum fontSize={21} className="text-white" />}
          subtitle=""
        />
      </div>
    </div>
  </div>
);

export default Services;

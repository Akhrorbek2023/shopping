import React from "react";
import Logo from "../assets/images/logoImage1.svg";
import Logo2 from "../assets/images/logoImage2.svg";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import About from "./About";
import Partnership from "./Partnership";
import Information from "./Information";
import Users from "./Users";

import AppStore from "./AppStore";

const Footer = () => {
  return (
    <div className="py-[40px]">
      <div className="container">
        <div className="flex justify-between sm:block">
       <div className="w-[27%]">
       <Link className="flex items-center space-x-2 mb-4">
            <img src={Logo} alt="Logo" />
            <img src={Logo2} alt="Logo" />
          </Link>
          <p className="mb-4 w-[280px]">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <Icons />
       </div>
       <div>
        <About/>
       </div>
       <div>
        <Partnership/>
       </div>
       <div>
        <Information/>
       </div>
       <div>
        <Users/>
       </div>
       <div>
        <AppStore/>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

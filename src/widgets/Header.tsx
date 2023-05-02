"use client";
import "./style.css";
import { IconDeviceMobile } from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="flex justify-between header-main">
      <div className="flex justify-center items-center">
        <img src="./images/logo.png" alt="logo" className="header-logo-img" />
        <span className="text-gray-800 text-title1 header-logo-text">
          Browse livestock
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-gray-800 text-title1 header-logo-text pr-2">
          Call us
        </span>
        <IconDeviceMobile className="header-mobile-icon mr-2" />
        <span className="text-gray-800 text-title1 header-logo-text pr-6">
          (888)-333-1597
        </span>
        <button className="text-gray-800 header-btn-sell mr-3">
          Sell livestock
        </button>
        <button className="header-btn-myaccount">My account</button>
      </div>
    </div>
  );
};

export default Header;

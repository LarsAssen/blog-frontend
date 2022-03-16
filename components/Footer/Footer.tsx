import React from "react";
import FooterCategories from "./FooterCategories";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";
import FooterSubscribeBox from "./FooterSubscribeBox";

const Footer: React.FC = () => {
  return (
    <footer className="border-t body-font text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <FooterCategories />
          <FooterCategories />
          <FooterCategories />
          <FooterSubscribeBox />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">The Running explorer</span>
          </a>
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

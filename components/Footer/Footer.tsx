import React from "react";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200">
      <div
        className="
          container
          flex flex-wrap
          items-center
          justify-center
          px-4
          py-8
          mx-auto
          lg:justify-between
        "
      >
        <div className="flex flex-wrap justify-center">
          <FooterNav />
        </div>
        <div className="flex items-center my-4 lg:my-0"></div>
        <FooterSocials />
      </div>
    </footer>
  );
};

export default Footer;

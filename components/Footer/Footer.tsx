import React from "react";
import BottomFooter from "./BottomFooter";
import FooterCategories from "./FooterCategories";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";
import FooterSubscribeBox from "./FooterSubscribeBox";
import TopFooter from "./TopFooter";

const Footer: React.FC = () => {
  return (
    <footer className="border-t body-font text-gray-600">
      {/* <TopFooter /> */}
      <BottomFooter />
    </footer>
  );
};

export default Footer;

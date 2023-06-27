import React from "react";

const Footer = () => {
  return (
    <footer>
    <hr/>
      <div className="md:flex md:justify-between lt:grid lt:text-center lt:gap-5 md:gap-0 wrapper py-8">
        <p className="text-pColor md:text-base text-xs">
          Copyright © 2023 Manish Etiquette
        </p>
        <p className="text-pColor md:text-base text-xs">
        Powered by Manish Etiquette
        </p>
      </div>
    </footer>
  );
};

export default Footer;

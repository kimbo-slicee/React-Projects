import React from "react";

const Footer = () => {
  return(
  <>
    <footer className="bg-primary-200 text-center py-4 mt-8 ">
      <p className="text-sm text-primary-500">
        &copy; {new Date().getFullYear()} My Todo App. All rights reserved.
      </p>
    </footer>
  </>
  )

};

export default Footer;

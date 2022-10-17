import React from "react";
import { Helmet } from "react-helmet";

const HelmetMe = ({ children }) => {
  return (
    <Helmet>
      <title>{children} - Abdullah</title>
    </Helmet>
  );
};

export default HelmetMe;

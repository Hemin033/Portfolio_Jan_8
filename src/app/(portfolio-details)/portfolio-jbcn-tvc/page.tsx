import React from "react";
import { Metadata } from "next";
import JBCNTVCMain from "@/pages/portfolio/details/portfolio-jbcn-tvc-main";

export const metadata: Metadata = {
  title: "JBCN TVC - Portfolio Details",
};

const JBCNTVCPage = () => {
  return (
    <JBCNTVCMain/>
  );
};

export default JBCNTVCPage;
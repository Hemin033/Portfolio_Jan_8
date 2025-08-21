import { Metadata } from "next";
import PortfolioDetailsTwentyOneMain from "@/pages/portfolio/details/portfolio-details-21-main";

export const metadata: Metadata = {
  title: "Automation - Portfolio Details",
};

export default function PortfolioDetailsTwentyOne() {
  return (
    <>
      <PortfolioDetailsTwentyOneMain />
    </>
  );
}

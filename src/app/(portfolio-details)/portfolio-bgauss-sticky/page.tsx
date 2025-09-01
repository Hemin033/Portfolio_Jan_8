import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import FooterTwo from "@/layouts/footers/footer-two";
import BgaussStickyMasonryArea from "@/components/portfolio/details/bgauss-sticky-masonry-area";

export const metadata: Metadata = {
  title: "BGauss – Sticky & Masonry Layout",
};

export default function Page() {
  return (
    <Wrapper>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BgaussStickyMasonryArea />
          </main>
          <FooterTwo topCls="" whiteFooter={true} />
        </div>
      </div>
    </Wrapper>
  );
}



'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix d-flex align-items-center justify-content-center min-vh-50">
      <div className="container ">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title hemin-hero-title tp_reveal_anim mb-4">
                <span className="tp-reveal-line mt-40">Hi, I&apos;m Hemin</span>
                <span className="tp-reveal-line" style={{paddingBottom: "20px", width: "100%", display: "inline-block"}}>Almost award-winning <br /> designer</span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim mb-0" style={{lineHeight: "1.8", width: "100%", display: "block"}}>
                Graphic Designer & Art Director with a multidisciplinary approach to solving 
                visual problems.
              </span>
              <Link className="tp-btn-black-2 mt-30" href="/contact">
                Let&apos;s Talk{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

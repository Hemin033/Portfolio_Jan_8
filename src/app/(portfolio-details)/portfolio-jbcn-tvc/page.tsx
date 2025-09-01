import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import FooterTwo from "@/layouts/footers/footer-two";

export const metadata: Metadata = {
  title: "JBCN TVC - Portfolio Details",
};

const sources = [
  "/assets/videos/jbcn-tvc/1616649026800.mp4",
  "/assets/videos/jbcn-tvc/1697799496355.mp4",
];

export default function Page() {
  return (
    <Wrapper>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-project-details-3-top tp-project-details-3-ptb">
              <div className="container container-1560">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-project-details-3-title-box">
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation">JBCN TVC</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details-video">
              <div className="container" style={{ maxWidth: "1800px" }}>
                <div className="row gx-4">
                  <div className="col-xl-6 col-lg-6 col-md-12 mb-60">
                    <div className="showcase-details-2-section-box mb-20">
                      <h4 className="showcase-details-2-section-title">TVC 1</h4>
                    </div>
                    <div className="showcase-details-2-content-right mb-20" style={{border:'1px dashed #D1D5DB', padding:'16px', borderRadius:'8px', background:'#FAFAFA'}}>
                      <h5 style={{marginBottom:8}}>Add your explanation</h5>
                      <p style={{margin:0, color:'#6B7280'}}>Describe goals, your role, key shots, challenges solved, and results. Replace this text with 3–5 concise lines.</p>
                    </div>
                    <figure className="project-details-video-overlay">
                      <video controls preload="metadata" playsInline style={{ width: "100%" }}>
                        <source src={sources[0]} type="video/mp4" />
                      </video>
                    </figure>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-12 mb-60">
                    <div className="showcase-details-2-section-box mb-20">
                      <h4 className="showcase-details-2-section-title">TVC 2</h4>
                    </div>
                    <div className="showcase-details-2-content-right mb-20" style={{border:'1px dashed #D1D5DB', padding:'16px', borderRadius:'8px', background:'#FAFAFA'}}>
                      <h5 style={{marginBottom:8}}>Add your explanation</h5>
                      <p style={{margin:0, color:'#6B7280'}}>Describe goals, your role, key shots, challenges solved, and results. Replace this text with 3–5 concise lines.</p>
                    </div>
                    <figure className="project-details-video-overlay">
                      <video controls preload="metadata" playsInline style={{ width: "100%" }}>
                        <source src={sources[1]} type="video/mp4" />
                      </video>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterTwo topCls="" whiteFooter={true} />
        </div>
      </div>
    </Wrapper>
  );
}



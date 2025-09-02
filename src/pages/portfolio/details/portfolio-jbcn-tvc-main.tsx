import React from "react";
import Wrapper from "@/layouts/wrapper";
import FooterTwo from "@/layouts/footers/footer-two";

const sources = [
  "/assets/videos/jbcn-tvc/1616649026800.mp4",
  "/assets/videos/jbcn-tvc/1697799496355.mp4",
];

export default function JBCNTVCMain() {
  return (
    <Wrapper>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Page Title */}
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



            {/* Project Description Section */}
            <div className="showcase-details-2-area pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3">
                    <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        ✕ Enterprise Focus
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div className="showcase-details-2-content-right tp_title_anim">
                      <p className="pb-25">This enterprise-grade AI automation platform streamlines complex business processes through intelligent workflow optimization and predictive decision-making capabilities.</p>
                      <p>The platform integrates with existing enterprise systems to provide seamless automation, reducing operational costs while improving accuracy and efficiency across all departments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Content */}
            <div className="container mb-100">
              <div className="row gx-4">
                
                {/* TVC 1 */}
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <video controls style={{ width: "100%", marginBottom: "30px" }}>
                    <source src={sources[0]} type="video/mp4" />
                  </video>
                </div>

                {/* TVC 2 */}
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <video controls style={{ width: "100%", marginBottom: "30px" }}>
                    <source src={sources[1]} type="video/mp4" />
                  </video>
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

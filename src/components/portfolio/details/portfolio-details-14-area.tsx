import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';

// images
import full_image from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg';
import full_image_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import port_img_1 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';

// videos
const videos = [
  "/assets/videos/jbcn-tvc/1616649026800.mp4",
  "/assets/videos/jbcn-tvc/1697799496355.mp4",
];

// slider setting
const slider_setting:SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

export default function PortfolioDetailsFourteenArea() {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
      {/* details are */}
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
      {/* details are */}

      {/* Project Description Section */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf/>
                  Enterprise Focus
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

      {/* video section */}
      <div className="project-details-video">
        <div className="container" style={{ maxWidth: '1800px' }}>
          <div className="row gx-4">
            
            {/* TVC 1 */}
            <div className="col-xl-12 col-lg-12 col-md-12 mb-60">
              <div className="tp-project-details-3-thumb">
                <div className="tp-project-details-3-thumb-box">
                  <figure className="project-details-video-overlay" data-speed=".8">
                    <video controls preload="metadata" playsInline style={{ width: '100%' }}>
                      <source src={videos[0]} type="video/mp4" />
                    </video>
                  </figure>
                </div>
              </div>
            </div>

            {/* Text Field Before TVC 2 */}
            <div className="col-xl-12 mb-60">
              <div className="showcase-details-2-area">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-3">
                      <div className="showcase-details-2-section-left">
                        <span className="ab-inner-subtitle mb-25">
                          <Leaf/>
                          TVC 2 Focus
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-9">
                      <div className="showcase-details-2-content-right tp_title_anim">
                        <p className="pb-25">The second commercial emphasizes user experience and accessibility features of the platform. We created compelling visuals that demonstrate real-world applications.</p>
                        <p>This TVC focuses on cost reduction and efficiency improvements across different enterprise departments and operational workflows.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TVC 2 */}
            <div className="col-xl-12 col-lg-12 col-md-12 mb-60">
              <div className="tp-project-details-3-thumb">
                <div className="tp-project-details-3-thumb-box">
                  <figure className="project-details-video-overlay" data-speed=".6">
                    <video controls preload="metadata" playsInline style={{ width: '100%' }}>
                      <source src={videos[1]} type="video/mp4" />
                    </video>
                  </figure>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title tp-char-animation">Enterprise AI Solutions</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Enterprise Focus
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
      {/* details area */}

    {/*details thumb */}
        <div id="xyz" className="tp-project-details-3-thumb mb-120">
          <div className="container container-1560">
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-thumb-box">
                    <Image data-speed=".8" src={full_image_2} alt="port-img" style={{ height: 'auto' }}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
    {/* details thumb */}

    {/* details area */}
    <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="showcase-details-2-section-title tp-char-animation">Scalable Architecture</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      System Design
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">Built on cloud-native architecture, the platform scales automatically to handle enterprise workloads while maintaining consistent performance and reliability.</p>
                    <p>Advanced security protocols and compliance features ensure data protection and regulatory adherence across global deployments.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area */}

     {/* removed image slider for TVC focus */}
    </>
  )
}

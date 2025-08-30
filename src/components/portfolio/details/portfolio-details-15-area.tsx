import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';

// images
import full_image from '@/assets/img/inner-project/redd/Red-Logo-on-red-colour.jpg';
import full_image_2 from '@/assets/img/inner-project/redd/Symbol-Evelution.jpg';
import port_img_1 from '@/assets/img/inner-project/redd/Logo-Mockup.jpg';
import port_img_2 from '@/assets/img/inner-project/redd/Stationary.jpg';
import port_img_3 from '@/assets/img/inner-project/redd/Long-Ambulance-02.png';
import port_img_4 from '@/assets/img/inner-project/redd/Uniform.jpg';
import port_img_5 from '@/assets/img/inner-project/redd/Vehical-Mockup.jpg';

// slider images
const slider_images = [port_img_3,port_img_4,port_img_5,port_img_4];

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

export default function PortfolioDetailsFifteenArea() {
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
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation rizvi-title-custom">REDD</h2>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                  <div className="tp-project-details-3-scroll smooth">
                      <a onClick={scrollTo} className="pointer">
                        <span>
                            <ScrollDownTwo/>
                        </span>
                        Scroll to Explore
                      </a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                      <a href="#">
                        Visit  Website
                        <span>
                            <UpArrowFour/>
                        </span>
                      </a>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details are */}

      {/* full image */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
          <Image data-speed=".8" src={full_image} alt="REDD Logo on Red Background" style={{ height: 'auto' }}/>
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title rizvi-section-title">Emergency Services Branding</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Brand Strategy
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p className="pb-25">REDD is a comprehensive emergency services brand identity that represents reliability, urgency, and trust in critical situations. The brand system was designed to work across multiple emergency service applications.</p>
                      <p>The visual identity emphasizes bold, clear communication with high visibility elements essential for emergency services, ensuring immediate recognition and professional credibility in life-saving scenarios.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details area */}

    {/*details thumb */}
        <div id="xyz" className="tp-project-details-3-full-width-thumb mb-120">
            <Image data-speed=".8" src={full_image_2} alt="REDD Symbol Evolution Process" style={{ height: 'auto' }}/>
        </div>
    {/* details thumb */}

    {/* details area */}
    <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="showcase-details-2-section-title rizvi-section-title">Brand Excellence</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                                          <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Visual Identity
                      </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">The REDD symbol evolution showcases the development process from concept to final implementation, demonstrating strategic thinking in emergency services branding where clarity and instant recognition are paramount.</p>
                    <p>The final brand system includes comprehensive applications across vehicles, uniforms, stationery, and emergency equipment, ensuring consistent professional identity across all service touchpoints.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area */}

     {/* gallery showcase */}
     <div className="showcase-details-thumb-wrap pb-120">
          <div className="container container-1430">
            <div className="row gx-30">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_1} alt="REDD Logo Mockup" style={{height: "400px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_2} alt="REDD Stationery Design" style={{height: "400px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_3} alt="REDD Long Ambulance Branding" style={{height: "600px", width: "100%", objectFit: "contain", objectPosition: "center", backgroundColor: "#f8f9fa"}}/>
                  </div>
                </div>
            </div>
            <div className="row gx-30">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_4} alt="REDD Uniform Design" style={{height: "400px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_5} alt="REDD Vehicle Mockup" style={{height: "400px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* gallery showcase */}
    </>
  )
}

import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';

// images
import full_image from '@/assets/img/inner-project/fatmans-cafe/logo-5-e1554790199183.jpg';
import full_image_2 from '@/assets/img/inner-project/fatmans-cafe/Free-Texture-Paper-Logo-Mockup-on-Wooden-Table-2-e1554790357273.jpg';
import port_img_1 from '@/assets/img/inner-project/fatmans-cafe/fat-mans-1-e1554790793552.jpg';
import port_img_2 from '@/assets/img/inner-project/fatmans-cafe/Fatmans-Menu.jpg';
import port_img_3 from '@/assets/img/inner-project/fatmans-cafe/FMC-Truck-Branding-Mockup-e1554790986103.jpg';
import port_img_4 from '@/assets/img/inner-project/fatmans-cafe/Coaster-mockup-01-of-02-e1554791073114.jpg';
import port_img_5 from '@/assets/img/inner-project/fatmans-cafe/Coaster-mockup-02-of-02-e1554791090815.jpg';

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

export default function PortfolioDetailsSixArea() {
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
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation rizvi-title-custom">Fat Man's Cafe</h2>
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
          <Image data-speed=".8" src={full_image} alt="Fat Man's Cafe Logo Design" style={{ height: 'auto' }}/>
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title rizvi-section-title">A quirky café to feed your appetite</h4>
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
                      <p className="pb-25">A quirky cafe & grill in Mumbai with cool vibe. An ideal place to hang out with friends and enjoy wide variety of food.</p>
                      <p>This was our pitch to the owner of the cafe Mr. Rajiv Tandon. We created a new visual language based on Fat Man's philosophy. We recreated the mascot of the cafe along with the logo and visual identity.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details area */}

    {/*details thumb */}
        <div id="xyz" className="tp-project-details-3-full-width-thumb mb-120">
            <Image data-speed=".8" src={full_image_2} alt="Fat Man's Cafe Logo Mockup on Wood" style={{ height: 'auto' }}/>
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
                    <p className="pb-25">We felt after our initial interaction with the team that it had to be given a look of an upmarket Cafe & Grill. Keeping that in mind we worked out a new logo looking very contemporary and classy.</p>
                    <p>The new character looked very polished and approachable. The new visual language added lot of fun and zing to the whole thing.</p>
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
                      <Image src={port_img_1} alt="Fat Man's Cafe Logo Design" style={{height: "400px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_2} alt="Fat Man's Cafe Mascot Design" style={{height: "400px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_3} alt="Fat Man's Cafe Menu Design" style={{height: "500px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row gx-30">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_4} alt="Fat Man's Cafe Signage" style={{height: "400px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30">
                      <Image src={port_img_5} alt="Fat Man's Cafe Interior Branding" style={{height: "400px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* gallery showcase */}
    </>
  )
}

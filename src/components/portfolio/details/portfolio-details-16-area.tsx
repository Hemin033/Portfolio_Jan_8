import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';
import PortfolioNavigation from '../portfolio-navigation';

// images
import full_image from '@/assets/img/inner-project/rizvi/Old-and-New-Logo.jpg';
import full_image_2 from '@/assets/img/inner-project/rizvi/Full-size-brand-close-up.png';
import port_img_1 from '@/assets/img/inner-project/rizvi/Stationary-e1554803131367.jpg';
import port_img_2 from '@/assets/img/inner-project/rizvi/Badge-mockup-101-1-e1554803417692.jpg';
import port_img_3 from '@/assets/img/inner-project/rizvi/A4_Brochure-e1554803688357.jpg';
import port_img_4 from '@/assets/img/inner-project/rizvi/All-four-posters.jpg';
import port_img_5 from '@/assets/img/inner-project/rizvi/Lift-mockup-e1554803882296.jpg';
import sketches_1 from '@/assets/img/inner-project/rizvi/sketches.jpg';
import sketches_2 from '@/assets/img/inner-project/rizvi/sketches 2 .jpg';

// slider images
const slider_images = [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5, sketches_1, sketches_2];

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

export default function PortfolioDetailsSixteenArea() {
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
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation rizvi-title-custom">Rizvi Institute of Management Studies & Research</h2>
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
          <Image data-speed=".8" src={full_image} alt="Rizvi Logo Evolution - Oldest to New Logo" style={{ height: 'auto' }}/>
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title rizvi-section-title">To develop intellectual, knowledge based community</h4>
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
                      <p className="pb-25">Rizvi Institute of Management Studies & Research is a leader amongst the new generation of B-schools in India today. In more than 2 decades of existence, the institute has already created a niche for itself in the field of management education.</p>
                      <p>We have created a comprehensive brand experience that is clean, simple, honest and professional. We have created a visual identity that scales and co-brands well. The new visual storytelling is evocative, real, and clear, and the voice captures Rizvi's devotion to the success of its students, collaborative spirit, and integrity.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details area */}

      {/* design process sketches */}
      <div className="showcase-details-thumb-wrap pb-120">
          <div className="container container-1560">
            <div className="row gx-80">
                <div className="col-xl-6 col-lg-6">
                  <div className="showcase-details-thumb mb-80">
                      <Image data-speed=".8" src={sketches_1} alt="Rizvi Design Sketches - Initial Concepts" style={{height: "auto"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="showcase-details-thumb mb-80">
                      <Image data-speed=".8" src={sketches_2} alt="Rizvi Design Process - Development" style={{height: "auto"}}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* design process sketches */}

    {/* details area - Brand Excellence */}
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
                    <p className="pb-25">Messaging centers around empowerment, accessibility and academic excellence. The logo embodies Rizvi's tradition of focussing on excellence in education and life.</p>
                    <p>Set up in the serene and scenic neighborhood of Carter Road Bandra, the RIMSR provides students with an infrastructure that enables conducive atmosphere for learning. Our graduates are young aspirants battling their way up with cannons of confidence and competence instilled in them by the institute.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area - Brand Excellence */}

    {/* full-stretch brand close-up */}
    <div className="tp-project-details-3-full-width-thumb mb-120 container-1800 flex mx-auto">
        <Image data-speed=".8" src={full_image_2} alt="Rizvi Institute Logo with Tagline - The Tradition of Academic Excellence" style={{ height: 'auto' }}/>
    </div>
    {/* full-stretch brand close-up */}





     {/* gallery showcase */}
     <div className="showcase-details-thumb-wrap pb-120">
          <div className="container container-1560">
            <div className="row gx-15">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-15">
                      <Image data-speed=".8" src={port_img_1} alt="Rizvi Stationery Design" style={{height: "500px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-15">
                      <Image data-speed=".8" src={port_img_2} alt="Rizvi Badge Design" style={{height: "500px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-15">
                      <Image data-speed=".8" src={port_img_3} alt="Rizvi Brochure Design" style={{height: "600px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row gx-15">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-15">
                      <Image data-speed=".8" src={port_img_4} alt="Rizvi Poster Designs" style={{height: "500px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-15">
                      <Image data-speed=".8" src={port_img_5} alt="Rizvi Environmental Signage" style={{height: "500px", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* gallery showcase */}

      {/* portfolio navigation */}
      <PortfolioNavigation currentPath="/portfolio-details-16" />
      {/* portfolio navigation */}
    </>
  )
}

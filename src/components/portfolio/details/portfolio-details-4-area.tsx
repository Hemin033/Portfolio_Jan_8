import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';
import PortfolioNavigation from '../portfolio-navigation';

// images
import full_image from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg';
import full_image_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import port_img_1 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';

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

export default function PortfolioDetailsFourArea() {
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
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation">Creative Branding Project</h2>
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
          <Image data-speed=".8" src={full_image} alt="port-img" style={{ height: 'auto' }}/>
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title tp-char-animation">Brand Identity</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Creative Process
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p className="pb-25">This branding project focused on creating a unique visual identity that captures the essence of modern creativity. We developed a comprehensive brand system that reflects innovation and artistic excellence.</p>
                      <p>The design process involved extensive research, concept development, and iterative refinement to achieve a cohesive brand experience across all touchpoints.</p>
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
                    <h4 className="showcase-details-2-section-title tp-char-animation">The Vision</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      Design Philosophy
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">Our vision was to create a brand that stands out in the competitive creative landscape while maintaining authenticity and purpose. Every design decision was made with the user experience in mind.</p>
                    <p>The final result is a cohesive brand system that communicates professionalism, creativity, and innovation across all digital and print materials.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area */}

     {/* slider images area */}
     <div className="pd-visual-slider-wrap pb-40">
          <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
              {slider_images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="pd-visual-slider-thumb fix">
                    <Image src={imgSrc} alt="port-img" style={{height:"auto"}}/>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      {/* slider images area */}

      {/* portfolio navigation */}
      <PortfolioNavigation currentPath="/portfolio-details-4" />
      {/* portfolio navigation */}
    </>
  )
}

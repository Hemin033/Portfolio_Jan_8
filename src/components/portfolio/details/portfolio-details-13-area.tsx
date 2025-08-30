import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';

// images
import full_image from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-06-1-e1554806392835.jpg';
import full_image_2 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-05-1-e1554806442179.jpg';
import port_img_1 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-09-e1554806472849.jpg';
import port_img_2 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-11-1-e1554806845844.jpg';
import port_img_3 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-13-1-e1554806897167.jpg';
import port_img_4 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-15-e1554806540977.jpg';
import port_img_5 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-16-e1554806555770.jpg';
import port_img_6 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-17-e1554806581530.jpg';
import port_img_7 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-18-1-e1554807034961.jpg';
import port_img_8 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-19-e1554806615864.jpg';
import port_img_9 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-20-e1554806638923.jpg';
import port_img_10 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-21-e1554806657339.jpg';
import port_img_11 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-22-e1554806696843.jpg';
import port_img_12 from '@/assets/img/inner-project/officers-choice/OCW-Packaging-Redesign-26.jpg';

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

export default function PortfolioDetailsThirteenArea() {
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
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation rizvi-title-custom">Officer's Choice</h2>
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
          <Image data-speed=".8" src={full_image} alt="Officer's Choice Whisky Packaging Redesign" style={{ height: 'auto' }}/>
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title rizvi-section-title">World's largest selling whisky</h4>
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
                      <p className="pb-25">Launched in 1988 and positioned in the regular whiskey segment, Officer's Choice Whisky is one of the largest whisky brands in the world and also one of the largest exported spirits brand with a presence in over 18 countries.</p>
                      <p>As part of our internal exercise we pick up any brand and try to see it from a different contemporary perspective. As part of this exercise we visualized rebranding of Officer's Choice whisky.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details area */}

    {/*details thumb */}
        <div id="xyz" className="tp-project-details-3-full-width-thumb mb-120">
            <Image data-speed=".8" src={full_image_2} alt="Officer's Choice Bottle Design Concepts" style={{ height: 'auto' }}/>
        </div>
    {/* details thumb */}

    {/* details area */}
    <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="showcase-details-2-section-title rizvi-section-title">Design Excellence</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                                          <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Creative Vision
                      </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">This also worked as our pitch to the client. Although the clients were hesitant to change the current look but they were very happy and appreciative of our approach and effort.</p>
                    <p>The comprehensive packaging redesign explores contemporary visual language while respecting the brand's heritage and market position in the competitive whisky segment.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area */}

     {/* packaging gallery showcase */}
     <div className="showcase-details-thumb-wrap pb-120">
          <div className="container container-1430">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                                             <Image src={port_img_1} alt="Officer's Choice Packaging Design 1" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                                             <Image src={port_img_2} alt="Officer's Choice Packaging Design 2" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_3} alt="Officer's Choice Premium Bottle Design" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_4} alt="Officer's Choice Label Design" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_5} alt="Officer's Choice Brand Identity" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_6} alt="Officer's Choice Complete Packaging System" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_7} alt="Officer's Choice Bottle Mockup 1" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_8} alt="Officer's Choice Premium Bottle Design Showcase" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_9} alt="Officer's Choice Bottle Mockup 3" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_10} alt="Officer's Choice Premium Design" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_11} alt="Officer's Choice Luxury Packaging" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-50">
                      <Image src={port_img_12} alt="Officer's Choice Final Design Concept" style={{height: "auto", width: "100%", objectFit: "cover", objectPosition: "center"}}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* packaging gallery showcase */}
    </>
  )
}

import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import { ScrollDownTwo } from '@/components/svg';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

// images
import hero_image from '@/assets/img/inner-project/skoda/1.jpg';
import campaign_img_1 from '@/assets/img/inner-project/skoda/2.jpg';
import details_thumb_1 from '@/assets/img/inner-project/skoda/3.jpg';
import details_thumb_2 from '@/assets/img/inner-project/skoda/4.jpg';
import details_thumb_3 from '@/assets/img/inner-project/skoda/5.jpg';
import campaign_img_2 from '@/assets/img/inner-project/skoda/6.jpg';
import additional_img_1 from '@/assets/img/inner-project/skoda/7.png';
import additional_img_2 from '@/assets/img/inner-project/skoda/8.png';
import additional_img_3 from '@/assets/img/inner-project/skoda/9.png';

// carousel images array for first 3 images
const carousel_images = [hero_image, campaign_img_1, details_thumb_1];

// carousel settings
const carousel_setting: SwiperOptions = {
  slidesPerView: 2.5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  speed: 1000,
  centeredSlides: true,
  navigation: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    '1400': {
      slidesPerView: 2.5,
    },
    '1200': {
      slidesPerView: 2.2,
    },
    '992': {
      slidesPerView: 1.8,
    },
    '768': {
      slidesPerView: 1.5,
    },
    '576': {
      slidesPerView: 1.2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  modules: [Autoplay, Navigation, Pagination],
}

export default function PortfolioDetailsSevenArea() {
  const scrollTo = () => {
    scroller.scrollTo('skoda-details', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  
  return (
    <>
      {/* empty header section */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
          <div className="container container-1560">
            {/* Empty header as requested */}
          </div>
      </div>
      {/* empty header section */}

      {/* overview section */}
      <div id="skoda-details" className="showcase-details-2-area pt-120 pb-120">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box mb-80">
                      <h4 className="showcase-details-2-section-title">
                        Overview
                      </h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        ✕ Brand Strategy
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p className="pb-25">Skoda challenged us to create a compelling automotive campaign that showcases their innovative design and engineering excellence. The project focused on highlighting the brand's commitment to sustainability and cutting-edge technology in the automotive industry.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* overview section */}

      {/* first 3 images - 3 column grid */}
      <div className="showcase-details-thumb-wrap pb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={hero_image} 
                        alt="Skoda Campaign Image 1" 
                        style={{
                          width: '100%', 
                          height: 'auto'
                        }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={campaign_img_1} 
                        alt="Skoda Campaign Image 2" 
                        style={{
                          width: '100%', 
                          height: 'auto'
                        }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={details_thumb_1} 
                        alt="Skoda Campaign Image 3" 
                        style={{
                          width: '100%', 
                          height: 'auto'
                        }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* first 3 images */}

      {/* first video container */}
      <div className="video-placeholder-container mb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row">
                <div className="col-xl-12">
                  <div className="video-placeholder">
                      <span>Video Content Placeholder 1</span>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* first video container */}

      {/* second 2 images */}
      <div className="showcase-details-thumb-wrap pb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-30">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="square-image-container mb-30">
                      <Image 
                        src={details_thumb_2} 
                        alt="Skoda Campaign Image 4" 
                        style={{
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          aspectRatio: '1/1'
                        }}
                      />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="square-image-container mb-30">
                      <Image 
                        src={details_thumb_3} 
                        alt="Skoda Campaign Image 5" 
                        style={{
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          aspectRatio: '1/1'
                        }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* second 2 images */}

      {/* second video container */}
      <div className="video-placeholder-container mb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row">
                <div className="col-xl-12">
                  <div className="video-placeholder">
                      <span>Video Content Placeholder 2</span>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* second video container */}

      {/* full width image 9 */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
          <div className="container" style={{maxWidth: '1800px'}}>
            <Image src={additional_img_3} alt="Skoda Campaign Image 9" style={{ height: 'auto', width: '100%' }}/>
          </div>
      </div>
      {/* full width image 9 */}

      {/* remaining images scroll */}
      <div className="showcase-details-thumb-wrap pb-120">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="square-image-container mb-30">
                      <Image 
                        src={campaign_img_2} 
                        alt="Skoda Campaign Image 6" 
                        style={{
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          aspectRatio: '1/1'
                        }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="square-image-container mb-30">
                      <Image 
                        src={additional_img_1} 
                        alt="Skoda Campaign Image 7" 
                        style={{
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          aspectRatio: '1/1'
                        }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="square-image-container mb-30">
                      <Image 
                        src={additional_img_2} 
                        alt="Skoda Campaign Image 8" 
                        style={{
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          aspectRatio: '1/1'
                        }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* remaining images scroll */}

    </>
  )
}
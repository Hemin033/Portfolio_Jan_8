
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollDownTwo } from '@/components/svg';
import { scroller } from 'react-scroll';
import PortfolioNavigation from '../portfolio-navigation';

// Import Signi images
import hero_image from '@/assets/img/inner-project/signi/1.jpg';
import campaign_img_1 from '@/assets/img/inner-project/signi/2.jpg';
import details_thumb_1 from '@/assets/img/inner-project/signi/3.jpg';
import signi_5_1 from '@/assets/img/inner-project/signi/5.1.png';
import signi_5_2 from '@/assets/img/inner-project/signi/5.2.png';
import signi_5_3 from '@/assets/img/inner-project/signi/5.3.png';
import signi_6 from '@/assets/img/inner-project/signi/6.2.jpg';
import signi_6_2 from '@/assets/img/inner-project/signi/6.2.jpg';
import signi_6_3 from '@/assets/img/inner-project/signi/6.3.jpg';
import signi_21 from '@/assets/img/inner-project/signi/21.jpg';
import signi_22 from '@/assets/img/inner-project/signi/22.jpg';
import signi_23 from '@/assets/img/inner-project/signi/23.jpg';

const PortfolioDetailsTwentyTwoArea = () => {
  const scrollTo = (target: string) => {
    scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <>
      {/* top hero header like RW Science/BGauss */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
          <div className="container container-1560">
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-title-box">
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation">SIGNI</h2>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                  <div className="tp-project-details-3-scroll smooth">
                      <a onClick={() => scrollTo('signi-details')} className="pointer">
                        <span>
                            <ScrollDownTwo/>
                        </span>
                        Scroll to Explore
                      </a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                      <a href="#" rel="noopener noreferrer">
                        Visit  Website
                        <span>
                            {/* reuse available arrow icon if any; keeping blank here */}
                        </span>
                      </a>
                  </div>
                </div>
            </div>
          </div>
      </div>

      {/* overview section */}
      <div id="signi-details" className="showcase-details-2-area pt-120 pb-120">
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
                      <p className="pb-25">Signi challenged us to create a compelling automotive campaign that showcases their innovative design and engineering excellence. The project focused on highlighting the brand's commitment to sustainability and cutting-edge technology in the automotive industry.</p>
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
                        alt="Signi Campaign Image 1" 
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
                        alt="Signi Campaign Image 2" 
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
                        alt="Signi Campaign Image 3" 
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

      {/* second 3 images - 5.1, 5.2, 5.3 */}
      <div className="showcase-details-thumb-wrap pb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={signi_5_1} 
                        alt="Signi Campaign Image 5.1" 
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
                        src={signi_5_2} 
                        alt="Signi Campaign Image 5.2" 
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
                        src={signi_5_3} 
                        alt="Signi Campaign Image 5.3" 
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
      {/* second 3 images */}

      {/* third 3 images - 6, 6.2, 6.3 */}
      <div className="showcase-details-thumb-wrap pb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={signi_6} 
                        alt="Signi Campaign Image 6" 
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
                        src={signi_6_2} 
                        alt="Signi Campaign Image 6.2" 
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
                        src={signi_6_3} 
                        alt="Signi Campaign Image 6.3" 
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
      {/* third 3 images */}

      {/* fourth 3 images - 21, 22, 23 */}
      <div className="showcase-details-thumb-wrap pb-120">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={signi_21} 
                        alt="Signi Campaign Image 21" 
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
                        src={signi_22} 
                        alt="Signi Campaign Image 22" 
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
                        src={signi_23} 
                        alt="Signi Campaign Image 23" 
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
      {/* fourth 3 images */}

      {/* removed full-width and remaining scroll sections to keep consistent 3-column grids */}
      
      {/* portfolio navigation */}
      <PortfolioNavigation currentPath="/portfolio-details-22" />
      {/* portfolio navigation */}
    </>
  );
};

export default PortfolioDetailsTwentyTwoArea;

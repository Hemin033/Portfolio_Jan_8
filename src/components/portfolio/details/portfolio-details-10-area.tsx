import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import { Leaf, ScrollDownTwo, UpArrowFour } from '@/components/svg';

// images (BGauss) - use public paths
const img1 = '/assets/img/inner-project/bgauss/1.jpg';
const img2 = '/assets/img/inner-project/bgauss/2.jpg';
const img3 = '/assets/img/inner-project/bgauss/3.png';
const img4 = '/assets/img/inner-project/bgauss/4.jpg';
const img5 = '/assets/img/inner-project/bgauss/5.jpg';
const img6 = '/assets/img/inner-project/bgauss/6.png';
const img7 = '/assets/img/inner-project/bgauss/7.png';
const img8 = '/assets/img/inner-project/bgauss/CleanShot 2025-09-01 at 14.18.51.png';

// no slider needed

export default function PortfolioDetailsTenArea() {
  const scrollTo = () => {
    scroller.scrollTo('bgauss-details', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      {/* details are */}
      {/* top hero header like RW Science */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
          <div className="container container-1560">
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-title-box">
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation">BGAUSS</h2>
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
                      <a href="#" rel="noopener noreferrer">
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

      {/* hero image removed as requested */}

      {/* sticky + masonry layout */}
      {/* RW Science-style layout */}
      <div id="bgauss-details"></div>
      <div className="showcase-details-thumb-wrap pb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={img8} 
                        alt="BGauss CleanShot" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={img7} 
                        alt="BGauss Image 7" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={img1} 
                        alt="BGauss Image 1" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>

      {/* overview + image 5 side-by-side; keep half grid, make image column full-height */}
      <div className="showcase-details-2-area pb-120">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row align-items-stretch gx-4">
                <div className="col-xl-6 col-lg-6">
                  <div className="showcase-details-2-section-box mb-30">
                      <h4 className="showcase-details-2-section-title">Overview</h4>
                  </div>
                  <div className="showcase-details-2-content-right">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Web Design
                      </span>
                      <p className="pb-25">A clean, performance-focused web experience for BGauss that highlights product details with crisp imagery and a minimal layout.</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6" style={{display:'flex'}}>
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1200px', margin: '0 auto', height: '100%', width: '100%'}}>
                      <Image 
                        src={img5} 
                        alt="BGauss Image 5" 
                        width={1600}
                        height={1100}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>

      {/* removed image 4; overview now sits alongside image 5 */}

      {/* remaining images scroll */}
      <div className="showcase-details-thumb-wrap pb-120">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="square-image-container mb-30">
                      <Image 
                        src={img6} 
                        alt="BGauss Image 6" 
                        width={1600}
                        height={1600}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1/1' }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="square-image-container mb-30">
                      <Image 
                        src={img2} 
                        alt="BGauss Image 2" 
                        width={1600}
                        height={1600}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1/1' }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="square-image-container mb-30">
                      <Image 
                        src={img3} 
                        alt="BGauss Image 3" 
                        width={1600}
                        height={1600}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1/1' }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>

      {/* masonry handles all images; removed extra grid rows to avoid duplicates */}

      {/* end sticky + masonry */}
    </>
  )
}

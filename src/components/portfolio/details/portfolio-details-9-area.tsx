import React from 'react';
import { scroller } from 'react-scroll';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';

// images (RW Science) - reference from public directory to avoid module resolution issues
const full_image = '/assets/img/inner-project/rw-science/1.png';
const full_image_2 = '/assets/img/inner-project/rw-science/2.png';
const port_img_1 = '/assets/img/inner-project/rw-science/3.png';
const port_img_2 = '/assets/img/inner-project/rw-science/4.png';
const port_img_3 = '/assets/img/inner-project/rw-science/5.png';
const port_img_4 = '/assets/img/inner-project/rw-science/6.png';
const port_img_5 = '/assets/img/inner-project/rw-science/7.png';
const port_img_6 = '/assets/img/inner-project/rw-science/8.png';

// no slider needed for true-to-size layout

export default function PortfolioDetailsNineArea() {
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
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation">RW Science</h2>
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

      {/* first row - 3 images, true-to-size */}
      <div className="showcase-details-thumb-wrap pb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={full_image} 
                        alt="RW Science Image 1" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={full_image_2} 
                        alt="RW Science Image 2" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={port_img_1} 
                        alt="RW Science Image 3" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* first row */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title tp-char-animation">Creative Storytelling</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Web Design
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p className="pb-25">A modern web experience crafted for RW Science, combining clean layouts, clear information hierarchy, and performant media to articulate complex ideas simply.</p>
                      <p>Built with accessibility and responsiveness in mind, the design ensures seamless exploration across devices while reinforcing brand credibility.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details area */}

    {/* second row - 3 images, true-to-size */}
      <div id="xyz" className="showcase-details-thumb-wrap pb-60">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={port_img_2} 
                        alt="RW Science Image 4" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={port_img_3} 
                        alt="RW Science Image 5" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1000px', margin: '0 auto'}}>
                      <Image 
                        src={port_img_4} 
                        alt="RW Science Image 6" 
                        width={1500}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* second row */}

    {/* third row - 2 images, true-to-size */}
      <div className="showcase-details-thumb-wrap pb-120">
          <div className="container" style={{maxWidth: '1800px'}}>
            <div className="row gx-4">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1200px', margin: '0 auto', height: 'auto', overflow: 'visible'}}>
                      <Image 
                        src={port_img_5} 
                        alt="RW Science Image 7" 
                        width={1600}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="showcase-details-thumb mb-30" style={{maxWidth: '1200px', margin: '0 auto', height: 'auto', overflow: 'visible'}}>
                      <Image 
                        src={port_img_6} 
                        alt="RW Science Image 8" 
                        width={1600}
                        height={1000}
                        style={{ width: '100%', height: 'auto' }}
                      />
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* third row */}

      {/* removed slider for true-to-size presentation */}
    </>
  )
}

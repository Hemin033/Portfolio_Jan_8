import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';
import g_1 from '@/assets/img/home-03/gallery/gal-1.jpg';
import g_2 from '@/assets/img/home-03/gallery/gal-2.jpg';
import g_3 from '@/assets/img/home-03/gallery/gal-3.jpg';
import g_4 from '@/assets/img/home-03/gallery/gal-4.jpg';
import g_5 from '@/assets/img/home-03/gallery/gal-5.jpg';


const gallery_images = [
  g_1, g_2, g_3, g_4, g_5, g_3, g_1, g_2, g_3, g_4, g_5, g_3
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  return (
    <div 
      className="tp-gallery-area fix p-relative" 
      style={{ 
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflow: 'hidden'
      }}
    >
      <div className="tp-gallery-shape-1" style={{ width: '100%', left: 0, right: 0 }}>
        <Image className="img-1" src={shape_1} alt="shape" style={{ ...imgStyle, width: '100%', maxWidth: 'none' }} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={{ ...imgStyle, width: '100%', maxWidth: 'none' }} />
      </div>
      <div className="tp-gallery-shape-2" style={{ width: '100%', left: 0, right: 0 }}>
        <Image className="img-1" src={shape_2} alt="shape" style={{ ...imgStyle, width: '100%', maxWidth: 'none' }} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={{ ...imgStyle, width: '100%', maxWidth: 'none' }} />
      </div>
      <div style={{ padding: 0, margin: 0, width: '100%' }}>
        <div style={{ margin: 0, width: '100%' }}>
          <div style={{ padding: 0, width: '100%' }}>
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active" style={{ margin: 0 }}>
                <Marquee className="tp-gallery-titming" speed={100} direction='left'>

                  {gallery_images.map((g, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <Image src={g} alt="gallery-img" style={{ height: 'auto' }} />
                      </div>
                    </div>
                  ))}

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

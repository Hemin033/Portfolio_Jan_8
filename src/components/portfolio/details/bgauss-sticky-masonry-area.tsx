import React from 'react';
import Image from 'next/image';

const images = [
  '/assets/img/inner-project/bgauss/1.jpg',
  '/assets/img/inner-project/bgauss/2.jpg',
  '/assets/img/inner-project/bgauss/3.png',
  '/assets/img/inner-project/bgauss/4.jpg',
  '/assets/img/inner-project/bgauss/5.jpg',
  '/assets/img/inner-project/bgauss/6.png',
  '/assets/img/inner-project/bgauss/7.png',
  '/assets/img/inner-project/bgauss/CleanShot 2025-09-01 at 14.18.51.png',
];

export default function BgaussStickyMasonryArea() {
  return (
    <div className="container" style={{maxWidth: '1800px'}}>
      <div className="row">
        <div className="col-xl-4">
          <div style={{position: 'sticky', top: 120}}>
            <h4 className="showcase-details-2-section-title">Overview</h4>
            <p>A curated gallery with persistent context on the left.</p>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="row gx-4">
            {images.map((src, i) => (
              <div key={src} className="col-xl-6 col-lg-6 col-md-6">
                <div className="showcase-details-thumb mb-30" style={{maxWidth: '1200px', margin: '0 auto'}}>
                  <Image src={src} alt={`BGauss ${i+1}`} width={1600} height={1100} style={{width: '100%', height: 'auto'}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



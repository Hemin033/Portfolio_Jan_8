import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { portfolio_data } from "@/data/portfolio-data";

// prop type
type IProps = {
  style_2?: boolean;
};
export default function PortfolioGridColThreeArea({ style_2 = false }: IProps) {
  const [activeFilter, setActiveFilter] = useState<string>('*');

  // Filter portfolio data based on active filter
  const filteredData = activeFilter === '*' 
    ? portfolio_data 
    : portfolio_data.filter(item => item.show === activeFilter.replace('.', ''));

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? "1800" : "1530"}`}>
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-60">
                <button 
                  onClick={() => handleFilterClick('*')} 
                  className={activeFilter === '*' ? 'active' : ''}
                >
                  <span>SHOW ALL</span>
                </button>
                <button 
                  onClick={() => handleFilterClick('.cat1')} 
                  className={activeFilter === '.cat1' ? 'active' : ''}
                >
                  <span>GEN AI</span>
                </button>
                <button 
                  onClick={() => handleFilterClick('.cat3')} 
                  className={activeFilter === '.cat3' ? 'active' : ''}
                >
                  <span>BRANDING</span>
                </button>
                <button 
                  onClick={() => handleFilterClick('.cat4')} 
                  className={activeFilter === '.cat4' ? 'active' : ''}
                >
                  <span>WEB DESIGN</span>
                </button>
                <button 
                  onClick={() => handleFilterClick('.cat5')} 
                  className={activeFilter === '.cat5' ? 'active' : ''}
                >
                  <span>TVC</span>
                </button>
                <button 
                  onClick={() => handleFilterClick('.cat7')} 
                  className={activeFilter === '.cat7' ? 'active' : ''}
                >
                  <span>PRODUCTS</span>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="row grid">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="View<br>Projects">
                <Link href={item.detailsPath} className="cursor-hide">
                    <Image
                      className="anim-zoomin"
                      src={item.img}
                      alt="port-img"
                      width={style_2 ? 573 : 486}
                      height={style_2 ? 683 : 576}
                      style={{ height: "100%" }}
                    />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

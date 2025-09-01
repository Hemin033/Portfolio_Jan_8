import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";


// data
const portfolio_data = [
  // BRANDING PROJECTS (cat3)
  {
    id: 1,
    img: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
    category: "Branding",
    title: "Righteous Properties",
    year: "2024",
    show: "cat3",
    detailsPath: "/portfolio-details-17",
  },
  {
    id: 2,
    img: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
    category: "Branding",
    title: "Rizvi Institute of Management Studies & Research",
    year: "2023",
    show: "cat3",
    detailsPath: "/portfolio-details-16",
  },
  {
    id: 3,
    img: "/assets/img/inner-project/portfolio-col-2/port-3.jpg",
    category: "Branding",
    title: "Fat Man's Cafe",
    year: "2023",
    show: "cat3",
    detailsPath: "/portfolio-details-6",
  },
  {
    id: 4,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "Branding",
    title: "REDD",
    year: "2024",
    show: "cat3",
    detailsPath: "/portfolio-details-15",
  },
  {
    id: 5,
    img: "/assets/img/inner-project/portfolio-col-2/port-5.jpg",
    category: "Branding",
    title: "Officers Choice",
    year: "2024",
    show: "cat3",
    detailsPath: "/portfolio-details-13",
  },
  // GEN AI PROJECTS (cat1)
  {
    id: 6,
    img: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
    category: "Gen AI",
    title: "Gen AI Card",
    year: "2024",
    show: "cat1",
    detailsPath: "/portfolio-details-4",
  },
  // WEB DESIGN PROJECTS (cat4)
  {
    id: 7,
    img: "/assets/img/inner-project/portfolio-col-2/port-7.jpg",
    category: "Web Design",
    title: "Skoda",
    year: "2024",
    show: "cat4",
    detailsPath: "/portfolio-details-7",
  },
  {
    id: 8,
    img: "/assets/img/inner-project/portfolio-col-2/port-8.jpg",
    category: "Web Design",
    title: "Signi",
    year: "2024",
    show: "cat4",
    detailsPath: "/portfolio-details-22",
  },
  {
    id: 9,
    img: "/assets/img/inner-project/portfolio-col-2/port-9.jpg",
    category: "Web Design",
    title: "RW Science",
    year: "2024",
    show: "cat4",
    detailsPath: "/portfolio-details-9",
  },
  {
    id: 10,
    img: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
    category: "Web Design",
    title: "BGauss",
    year: "2024",
    show: "cat4",
    detailsPath: "/portfolio-details-10",
  },
  // TVC PROJECTS (cat5)
  {
    id: 11,
    img: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
    category: "TVC",
    title: "Tata AIA",
    year: "2024",
    show: "cat5",
    detailsPath: "/portfolio-details-11",
  },
  {
    id: 13,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "TVC",
    title: "JBCN",
    year: "2024",
    show: "cat5",
    detailsPath: "/portfolio-details-14",
  },
  {
    id: 14,
    img: "/assets/img/inner-project/portfolio-col-2/port-5.jpg",
    category: "TVC",
    title: "JBCN",
    year: "2024",
    show: "cat5",
    detailsPath: "/portfolio-details-18",
  },
  // PRODUCTS (cat7)
  {
    id: 15,
    img: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
    category: "Products",
    title: "Custom ChatGPT",
    year: "2024",
    show: "cat7",
    detailsPath: "/portfolio-details-19",
  },
  {
    id: 16,
    img: "/assets/img/inner-project/portfolio-col-2/port-7.jpg",
    category: "Products",
    title: "Speaking Tool",
    year: "2024",
    show: "cat7",
    detailsPath: "/portfolio-details-20",
  },
  {
    id: 17,
    img: "/assets/img/inner-project/portfolio-col-2/port-8.jpg",
    category: "Products",
    title: "Automation",
    year: "2024",
    show: "cat7",
    detailsPath: "/portfolio-details-21",
  },
];

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
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="View<br>Demo">
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

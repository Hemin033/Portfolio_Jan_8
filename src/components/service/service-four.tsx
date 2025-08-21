import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Digital Graphic Design",
    desc: "I create visuals that tell a story and work seamlessly across digital platforms. Bold compositions, purposeful typography, and strategic use of color come together to make designs that stand out and resonate. From campaign assets to full digital experiences, my work is crafted to grab attention, hold it, and leave a lasting impression.",
    category: ["Visual Systems", "Typography", "Color Strategy"],
  },
  {
    id: 2,
    title: "Generative AI",
    desc: "I use Generative AI to explore unexpected directions, generate quick concept variations, and refine ideas with speed. It’s a tool to spark creativity, not replace it — helping me bring unique visual concepts to life faster and with greater impact.",
    category: ["Concepts", "Exploration", "Refinement"],
  },
  {
    id: 3,
    title: "Art Direction",
    desc: "I set the visual tone for projects, ensuring every element aligns with a clear creative vision. From the smallest detail to the largest rollout, I keep design language consistent and compelling across all platforms.",
    category: ["Creative Direction", "Consistency", "Systems"],
  },
  {
    id: 4,
    title: "Branding",
    desc: "I build brand identities that are authentic, memorable, and strategic. Beyond logos and color palettes, I create systems that tell a brand’s story and strengthen its presence at every touchpoint.",
    category: ["Identity", "Guidelines", "Application"],
  },
];
export default function ServiceFour() {
  
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">Skills</span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">What I do best</h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href="/service"
                  >
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

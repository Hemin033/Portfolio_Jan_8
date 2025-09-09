// import React from 'react';
// import Image from 'next/image';
// import logo from '@/assets/img/logo/logo-white.png';
// import { RightArrow, SvgBgSm } from '@/components/svg';
// import Link from 'next/link';

// export default function FooterFour() {
//   return (
//     <footer>
//       <div className="tp-footer-3-area dark-bg pt-120">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
//               <div className="tp-footer-3-widget-wrapper footer-col-3-1">
//                 <div className="tp-footer-3-widget mb-40">
//                   <h4 className="tp-footer-3-title">Website map</h4>
//                   <div className="tp-footer-3-menu">
//                     <ul>
//                       <li><a href="#">Home</a></li>
//                       <li><a href="#">About</a></li>
//                       <li><a href="#">Landing</a></li>
//                       <li><a href="#">Blog</a></li>
//                       <li><a href="#">Contact</a></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="tp-footer-3-widget">
//                   <h4 className="tp-footer-3-title">Newsletter</h4>
//                   <div className="tp-footer-3-input-box d-flex align-items-center">
//                     <input type="text" placeholder="Enter Address..." />
//                     <button className="tp-footer-3-btn p-relative">
//                       <span className="icon-1">
//                         <RightArrow clr='#19191A' />
//                       </span>
//                       <span className="icon-2">
//                         <SvgBgSm/>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
//               <div className="tp-footer-3-widget text-md-center footer-col-3-2">
//                 <div className="tp-footer-3-logo-box">
//                   <p className="mb-100">
//                     Drop us a line sed id semper <br />
//                     risus in hend rerit.
//                   </p>
//                   <Link className="tp-footer-3-logo p-relative" href="/">
//                     <Image src={logo} alt="logo" />
//                   </Link>
//                   <p className="tp-footer-3-copyright">
//                     {new Date().getFullYear()} Themepure <br /> © All rights reserved
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
//               <div className="tp-footer-3-widget-wrapper footer-col-3-3">
//                 <div className="tp-footer-3-widget mb-30">
//                   <h4 className="tp-footer-3-title">Contact</h4>
//                   <div className="tp-footer-2-contact-item">
//                     <span>
//                       <a href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
//                       target="_blank">740 NEW SOUTH HEAD RD, TRIPLE BAY SWFW 3108, NEW YORK</a>
//                       </span>
//                   </div>
//                   <div className="tp-footer-2-contact-item">
//                     <span>P: <a href="tel:+725214456">+ 725 214 456</a></span>
//                     <span>E: <a href="mailto:contact@liko.com">contact@liko.com</a></span>
//                   </div>
//                 </div>
//                 <div className="tp-footer-3-widget">
//                   <h4 className="tp-footer-3-title">Follow</h4>
//                   <div className="tp-footer-3-social">
//                     <a href="#"><i className="fa-brands fa-twitter"></i></a>
//                     <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
//                     <a href="#"><i className="fa-brands fa-instagram"></i></a>
//                     <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </footer>
//   )
// }
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-white.png";
import logo_2 from "@/assets/img/logo/logo.png";
import { RightArrow } from "@/components/svg";
import { X, Instagram, Linkedin, Globe } from "lucide-react";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false,topCls='footer-bottom' }: IProps) {
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-60 pb-15 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-footer-2-widget footer-col-2-1 text-center">
                <div className="tp-footer-2-contact-item">
                  <span>Email :</span>
                  <span>
                    <a href="mailto:designer@example.com">designer@example.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-footer-2-widget footer-col-2-2 text-center">
                <div className="tp-footer-2-contact-item">
                  <span>Call Today :</span>
                  <span>
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-footer-2-widget footer-col-2-3 text-center">
                <div className="tp-footer-2-contact-item">
                  <span>Social :</span>
                  <div className="tp-footer-2-social d-flex justify-content-center gap-3">
                    <a href="#" aria-label="Twitter">
                      <X size={16} />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <Instagram size={16} />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                    <a href="#" aria-label="Website">
                      <Globe size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  © Copyright {new Date().getFullYear()}. All Rights Reserved by <a href="#" style={{ textDecoration: 'underline' }}>oldshan</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
            <div className="tp-copyright-2-left text-center text-lg-end">
                <p>
                  Created by <a href="#" style={{ textDecoration: 'underline' }}>Hemin Shah</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}

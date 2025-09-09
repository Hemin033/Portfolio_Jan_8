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

export default function FooterTwo({ whiteFooter = false,topCls='footer-top' }: IProps) {
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-contact-item">
                  <span>Email :</span>
                  <span>
                    <a href="mailto:designer@example.com">designer@example.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-contact-item">
                  <span>Call Today :</span>
                  <span>
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <div className="tp-footer-2-contact-item">
                  <span>Social :</span>
                  <div className="tp-footer-2-social">
                    <a href="#" className="mb-10" aria-label="Twitter">
                      <X size={16} />
                    </a>
                    <a href="#" className="mb-10" aria-label="Instagram">
                      <Instagram size={16} />
                    </a>
                    <a href="#" className="mb-10" aria-label="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                    <a href="#" className="mb-10" aria-label="Website">
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

import React from 'react';
import Link from 'next/link';
import { getPortfolioNavigation } from '@/data/portfolio-data';
import { PrevIcon, NextIcon } from '@/components/svg';

interface PortfolioNavigationProps {
  currentPath: string;
}

export default function PortfolioNavigation({ currentPath }: PortfolioNavigationProps) {
  const navigation = getPortfolioNavigation(currentPath);

  if (!navigation.prev && !navigation.next) {
    return null;
  }

  return (
    <div className="tp-portfolio-navigation-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-portfolio-navigation-wrapper d-flex justify-content-between align-items-center">
              {/* Previous Project */}
              <div className="tp-portfolio-navigation-prev">
                {navigation.prev ? (
                  <Link href={navigation.prev.detailsPath} className="tp-portfolio-nav-link">
                    <div className="tp-portfolio-nav-content d-flex align-items-center">
                      <div className="tp-portfolio-nav-icon me-3">
                        <PrevIcon />
                      </div>
                      <div className="tp-portfolio-nav-text">
                        <span className="tp-portfolio-nav-label">Previous Project</span>
                        <h5 className="tp-portfolio-nav-title">{navigation.prev.title}</h5>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="tp-portfolio-nav-placeholder"></div>
                )}
              </div>

              {/* Category Info */}
              <div className="tp-portfolio-navigation-category text-center">
                <div className="tp-portfolio-category-badge">
                  <span className="tp-portfolio-category-text">{navigation.category}</span>
                </div>
              </div>

              {/* Next Project */}
              <div className="tp-portfolio-navigation-next">
                {navigation.next ? (
                  <Link href={navigation.next.detailsPath} className="tp-portfolio-nav-link">
                    <div className="tp-portfolio-nav-content d-flex align-items-center">
                      <div className="tp-portfolio-nav-text text-end">
                        <span className="tp-portfolio-nav-label">Next Project</span>
                        <h5 className="tp-portfolio-nav-title">{navigation.next.title}</h5>
                      </div>
                      <div className="tp-portfolio-nav-icon ms-3">
                        <NextIcon />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="tp-portfolio-nav-placeholder"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tp-portfolio-navigation-area {
          border-top: 1px solid #eee;
          padding-top: 60px;
        }

        .tp-portfolio-navigation-wrapper {
          min-height: 80px;
        }

        .tp-portfolio-nav-link {
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .tp-portfolio-nav-link:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }

        .tp-portfolio-nav-content {
          padding: 20px;
          border: 1px solid #f0f0f0;
          border-radius: 8px;
          transition: all 0.3s ease;
          background-color: #fff;
          min-width: 250px;
        }

        .tp-portfolio-nav-content:hover {
          border-color: #333;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .tp-portfolio-nav-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          color: #333;
        }

        .tp-portfolio-nav-label {
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 4px;
        }

        .tp-portfolio-nav-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0;
          line-height: 1.3;
        }

        .tp-portfolio-category-badge {
          background-color: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 20px;
          padding: 8px 20px;
        }

        .tp-portfolio-category-text {
          font-size: 14px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .tp-portfolio-nav-placeholder {
          width: 250px;
          height: 1px;
        }

        @media (max-width: 768px) {
          .tp-portfolio-navigation-wrapper {
            flex-direction: column;
            gap: 20px;
          }

          .tp-portfolio-nav-content {
            min-width: 200px;
          }

          .tp-portfolio-nav-placeholder {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
}
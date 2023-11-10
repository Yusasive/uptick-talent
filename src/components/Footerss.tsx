"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 divide-y border-t-gray-500 border-2 border-b-none dark:text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="sm:w-2/5">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">
              Brand name
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-gray-400 text-sm gap-x-3 gap-y-8 sm:w-3/5 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">Useful Links</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Jobs
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">Our Programs</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Uptick Tech Beginners
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Uptick Tech Talents
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Uptick Tech Business
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Uptick Tech Map
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-50">Contact Us</div>
            <div className="flex flex-col justify-start space-x-3">
              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none">
                  <g clip-path="url(#clip0_975_234)">
                    <path
                      d="M32.2129 0.459961H0.787109V31.8857H32.2129V0.459961Z"
                      fill="white"
                      fill-opacity="0.01"
                    />
                    <path
                      d="M11.9147 5.4917C12.3903 5.4917 12.8286 5.74967 13.0595 6.16556L14.6612 9.05071C14.8709 9.42848 14.8808 9.88539 14.6875 10.2719L13.1445 13.3579C13.1445 13.3579 13.5916 15.6569 15.463 17.5283C17.3345 19.3997 19.6257 19.8391 19.6257 19.8391L22.7113 18.2964C23.098 18.103 23.5552 18.113 23.9331 18.3231L26.8265 19.9317C27.242 20.1627 27.4996 20.6007 27.4996 21.0761V24.3977C27.4996 26.0893 25.9284 27.311 24.3257 26.7702C21.0339 25.6595 15.9241 23.5447 12.6854 20.3059C9.44671 17.0672 7.33185 11.9575 6.22112 8.66568C5.68032 7.0629 6.90205 5.4917 8.59357 5.4917H11.9147Z"
                      stroke="white"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_975_234">
                      <rect
                        width="32.0805"
                        height="32.0805"
                        fill="white"
                        transform="translate(0.459717 0.459961)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p> +234 9037424764</p>
              </div>

              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none">
                  <g clip-path="url(#clip0_975_242)">
                    <path
                      d="M32.5402 0.459961H0.459717V32.5404H32.5402V0.459961Z"
                      fill="white"
                      fill-opacity="0.01"
                    />
                    <path
                      d="M3.13306 26.5254H29.8668V16.5002V6.4751H16.4999H3.13306V16.5002V26.5254Z"
                      stroke="white"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.13306 6.4751L16.4999 16.5002L29.8668 6.4751"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.4999 6.4751H3.13306V16.5002"
                      stroke="#DBDBDB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.8669 16.5002V6.4751H16.5"
                      stroke="#DBDBDB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_975_242">
                      <rect
                        width="32.0805"
                        height="32.0805"
                        fill="white"
                        transform="translate(0.459717 0.459961)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>hey@upticktalent.africa</p>
              </div>

              <div className="flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none">
                  <g clip-path="url(#clip0_975_253)">
                    <path
                      d="M32.5402 0.959961H0.459717V33.0404H32.5402V0.959961Z"
                      fill="white"
                      fill-opacity="0.01"
                    />
                    <path
                      d="M16.5 30.367C16.5 30.367 26.5251 22.3469 26.5251 13.6584C26.5251 8.12169 22.0368 3.6333 16.5 3.6333C10.9632 3.6333 6.47485 8.12169 6.47485 13.6584C6.47485 22.3469 16.5 30.367 16.5 30.367Z"
                      stroke="white"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 17.6686C18.7147 17.6686 20.5101 15.8732 20.5101 13.6585C20.5101 11.4438 18.7147 9.64844 16.5 9.64844C14.2854 9.64844 12.49 11.4438 12.49 13.6585C12.49 15.8732 14.2854 17.6686 16.5 17.6686Z"
                      stroke="white"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_975_253">
                      <rect
                        width="32.0805"
                        height="32.0805"
                        fill="white"
                        transform="translate(0.459717 0.959961)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  7A, Hara-Hyel House, Dogon Karfe, Jos, Plateau State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 1968 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

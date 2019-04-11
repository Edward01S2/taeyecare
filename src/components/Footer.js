import React from "react";
import { Link } from "gatsby";
import TaLogo from "../img/taeye_logo_white.svg";
import Phone from "../img/phone-call.svg";
import Fax from "../img/file-text.svg";
import Email from "../img/mail.svg";
import Hours from "./Hours";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="pt-8 pb-8 bg-ta-300 text-white">
          <div className="container mx-auto">
            <div className="flex">
              <div className="w-1/5 flex flex-col items-center">
                <Link to="/" >
                  <div>
                    <TaLogo className="h-10 w-auto"/>
                  </div>
                </Link>
                <div className="hidden md:block md:pt-3">
                  <ul className="list-reset text-sm">
                    <li className="footer-links hover:text-white pb-1">@2019 Ta Eye Associates</li>
                    <li className="footer-links hover:text-white">Privacy & Policy</li>
                  </ul>
                </div>
              </div>

              <div className="w-1/5 flex flex-col items-center">
                <ul className="m-0 p-0 list-outside list-none">
                  <li className="pb-3">
                    <h4 className="text-base font-bold tracking-widest uppercase">Company</h4>
                  </li>
                  <li className="pb-3">
                    <Link to="work" className="footer-links hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li className="pb-3">
                    <Link to="services" className="footer-links hover:text-white">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="articles" className="footer-links hover:text-white">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/5 flex flex-col items-center">
                <ul className="m-0 p-0 list-outside list-none">
                  <li className="pb-3">
                    <h4 className="text-base font-bold tracking-widest uppercase">Resources</h4>
                  </li>
                  <li className="pb-3">
                    <Link to="work" className="footer-links hover:text-white">
                      Appointments
                    </Link>
                  </li>
                  <li className="pb-3">
                    <Link to="services" className="footer-links hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="articles" className="footer-links hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/5 flex flex-col items-center">
                <ul className="m-0 p-0 list-outside list-none">
                <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Phone className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <p>(888) 888-8888</p>
                    </li>
                    <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Fax className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <p>(888) 888-8888</p>
                    </li>
                    <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Email className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <p>office@taeyecare.com</p>
                    </li>
                </ul>
              </div>

              <div className="w-1/5 flex justify-end">
                <Hours />
              </div>


            </div>


      
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

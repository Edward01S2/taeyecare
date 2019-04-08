import React from "react";
import { Link } from "gatsby";
import { Logo } from "./Svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="pt-8 pb-8">
          <div className="container mx-auto">
            <div className="flex">
              <div className="w-1/4">
                <Logo />
                <div className="hidden md:block md:pt-3">
                  <ul className="list-reset text-sm">
                    <li className="footer-links hover:text-white pb-2">@2019 Ta Eye Associates</li>
                    <li className="footer-links hover:text-white">Privacy & Policy</li>
                  </ul>
                </div>
              </div>

              <div className="w-1/4">
                <h4 className="footer-head">Company</h4>
                <ul className="list-reset">
                  <li className="pb-2">
                    <Link to="work" className="footer-links hover:text-white">
                      Work
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link to="services" className="footer-links hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="articles" className="footer-links hover:text-white">
                      Articles
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/4">
                <h4 className="footer-head">Resources</h4>
                <ul className="list-reset">
                  <li className="pb-2">
                    <Link to="contact" className="footer-links hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="email" className="footer-links hover:text-white">
                      Email
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-1/4">
                <h4 className="footer-head hidden md:block">Social</h4>
                
              </div>
            </div>


      
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

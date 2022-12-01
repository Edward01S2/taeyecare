import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link, animateScroll } from 'react-scroll'

import TaLogo from "../img/taeye_logo_white.svg";
import Phone from "../img/phone-call.svg";
import Fax from "../img/file-text.svg";
import Email from "../img/mail.svg";
import Hours from "./Hours";

function formatPhone(num) {
  var cleaned = ('' + num).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}



const Footer = class extends React.Component {
  scrollToTop() {
    animateScroll.scrollToTop();
  }

  render() {
    return (
      <footer>
        <div className="p-8 text-white bg-ta-300 md:p-8 lg:p-8 xl:px-0 xl:py-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap md:justify-between">
              <div className="flex flex-col w-full md:w-1/5 md:items-center xl:items-start">
                <button onClick={this.scrollToTop} className="focus:outline-none">
                  <div>
                    <TaLogo className="w-auto h-10 xl:h-16"/>
                  </div>
                </button>
                <div className="hidden md:block md:pt-3">
                  <ul className="text-sm list-reset">
                    <li className="pb-1 text-white">@2019 Ta Eye Associates</li>
                    <li className="text-white">Privacy & Policy</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col w-1/2 md:w-auto md:items-center">
                <ul className="p-0 m-0 list-none list-outside">
                  <li className="pt-4 pb-3 md:pt-0">
                    <h4 className="text-base font-bold tracking-widest uppercase">Company</h4>
                  </li>
                  <li className="pb-3">
                    <Link
                      to="services"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={600}
                      className="text-white"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="pb-3">
                  <Link
                      to="about"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={600}
                      className="text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li className="pb-3">
                  <Link
                      to="team"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={600}
                      className="text-white"
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col w-1/2 md:w-auto md:items-center">
                <ul className="p-0 m-0 list-none list-outside">
                  <li className="pt-4 pb-3 md:pt-0">
                    <h4 className="text-base font-bold tracking-widest uppercase">Resources</h4>
                  </li>
                  <li className="pb-3">
                  <Link
                      to="appts"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={600}
                      className="text-white"
                    >
                      Appointments
                    </Link>
                  </li>
                  <li className="pb-8">
                  <Link
                      to="contact"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={600}
                      className="text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:w-auto md:items-center">
                <ul className="p-0 m-0 list-none list-outside">
                <li className="flex items-center content-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 w-8 h-8 fill-current text-ta-100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Phone className="absolute z-10 w-4 h-4 text-white stroke-current absolute-center" />
                      </div>
                      <a className="text-white" href={`tel:${this.props.site.phone}`}>{formatPhone(this.props.site.phone)}</a>
                    </li>
                    <li className="flex items-center content-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 w-8 h-8 fill-current text-ta-100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Fax className="absolute z-10 w-4 h-4 text-white stroke-current absolute-center" />
                      </div>
                      <a className="text-white" href={`tel:${this.props.site.fax}`}>{formatPhone(this.props.site.fax)}</a>
                    </li>
                    <li className="flex items-center content-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 w-8 h-8 fill-current text-ta-100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Email className="absolute z-10 w-4 h-4 text-white stroke-current absolute-center" />
                      </div>
                      <a className="text-white" href={`mailto:${this.props.site.email}`}>{this.props.site.email}</a>
                    </li>
                </ul>
              </div>

              <div className="flex flex-col hidden md:w-1/5 md:items-center">
                <Hours />
              </div>


            </div>


      
          </div>
        </div>
      </footer>
    );
  }
};

export default () => (
  <StaticQuery
    query={graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "site-page" } }) {
        frontmatter {
          settings {
            phone
            fax
            email
          }
        }
      }
    }
    `}
    render={(data) => (
      <Footer site={data.markdownRemark.frontmatter.settings} />
    )}
  />
)

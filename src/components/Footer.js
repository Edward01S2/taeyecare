import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

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
  render() {
    return (
      <footer>
        <div className="p-8 bg-ta-300 text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="flex flex-col md:w-1/5 md:items-center">
                <Link to="/" >
                  <div>
                    <TaLogo className="h-10 w-auto"/>
                  </div>
                </Link>
                <div className="hidden md:block md:pt-3">
                  <ul className="list-reset text-sm">
                    <li className="text-white pb-1">@2019 Ta Eye Associates</li>
                    <li className="text-white">Privacy & Policy</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col w-1/2 md:w-1/5 md:items-center">
                <ul className="m-0 p-0 list-outside list-none">
                  <li className="pt-4 pb-3">
                    <h4 className="text-base font-bold tracking-widest uppercase">Company</h4>
                  </li>
                  <li className="pb-3">
                    <Link to="work" className="text-white">
                      Services
                    </Link>
                  </li>
                  <li className="pb-3">
                    <Link to="articles" className="text-white">
                      About
                    </Link>
                  </li>
                  <li className="pb-3">
                    <Link to="services" className="text-white">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col w-1/2 md:w-1/5 md:items-center">
                <ul className="m-0 p-0 list-outside list-none">
                  <li className="pt-4 pb-3  ">
                    <h4 className="text-base font-bold tracking-widest uppercase">Resources</h4>
                  </li>
                  <li className="pb-3">
                    <Link to="work" className="text-white">
                      Appointments
                    </Link>
                  </li>
                  <li className="pb-3">
                    <Link to="services" className="text-white">
                      Blog
                    </Link>
                  </li>
                  <li className="pb-8">
                    <Link to="articles" className="text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:w-1/5 md:items-center">
                <ul className="m-0 p-0 list-outside list-none">
                <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Phone className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <a className="text-white" href={`tel:${this.props.site.phone}`}>{formatPhone(this.props.site.phone)}</a>
                    </li>
                    <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Fax className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <a className="text-white" href={`tel:${this.props.site.fax}`}>{formatPhone(this.props.site.fax)}</a>
                    </li>
                    <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Email className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
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

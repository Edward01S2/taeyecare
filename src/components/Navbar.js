import React from "react";
import { Logo, Menu, Close } from "./Svg";
import { Link, animateScroll } from 'react-scroll'
import TaLogo from "../img/taeye_logo.svg"


const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnClick: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      btnClick: !state.btnClick
    }));
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

  render() {
    const menuBtn = this.state.btnClick;
    return (
      <nav role="navigation" aria-label="main-navigation" className={this.props.classes}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap md:py-4 md:px-4 lg:px-4 xl:px-0 xl:py-2">
            <div className="flex items-center flex-no-shrink text-black pt-2">
              <div className="text-blue pb-2 pl-8 md:pl-0">
              <button onClick={this.scrollToTop} className="focus:outline-none">
                <div>
                  <TaLogo className={`h-10 w-auto items-center`}/>
                </div>
              </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={this.handleClick}
                className={`${this.props.menuBg} navbar-burger flex items-center px-6 py-4 border-none focus:outline-none`}
                data-target="navMenu"
              >
                {menuBtn ? (
                  <Menu classes={`fill-current h-5 w-5 ${this.props.menuBtn}`} />
                ) : (
                  <Close classes={`fill-current h-5 w-5 ${this.props.menuBtn}`} />
                )}
              </button>
            </div>
            <div
              id="navMenu"
              className=
                {`w-full flex-grow ${this.props.menuBg} text-gray-700 py-6 md:flex md:flex-initial md:items-center md:w-auto md:bg-transparent md:py-0 ` +
                (menuBtn ? "block" : "hidden")
              }
            >
              <div className="text-lg flex flex-col text-center items-center md:flex-row md:text-left">
                <Link
                  activeClass="link-active"
                  to="services"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="text-gray-700 hover:text-ta-100 hover:no-underline mt-4 md:mr-8 md:mt-0 lg:mr-8"
                >
                  services
                </Link>
                <Link
                  activeClass="link-active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className={`block text-gray-700 hover:text-ta-100 hover:no-underline mt-6 md:mr-8 md:mt-0 lg:mr-8`}
                >
                  about
                </Link>
                <Link
                  activeClass="link-active"
                  to="team"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className={`block text-gray-700 hover:text-ta-100 hover:no-underline mt-6 md:mt-0 lg:mr-8`}
                >
                  team
                </Link>
                <Link
                  activeClass="link-active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className={`block text-gray-700 hover:text-ta-100 hover:no-underline mt-6 md:mt-0 lg:mr-8`}
                >
                  contact
                </Link>
                <Link
                  activeClass="btn-active"
                  offset={-100}
                  to="appts"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className={`bg-ta-blue hover:bg-ta-200 hover:no-underline text-white font-semibold py-2 px-3 rounded shadow`}
                >
                  appointments
                </Link>

                {/* <Social classes="flex items-center justify-center my-6 md:hidden" /> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

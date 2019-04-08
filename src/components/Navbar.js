import React from "react";
import { Link } from "gatsby";
import { Logo, Menu, Close } from "./Svg";

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

  render() {
    const menuBtn = this.state.btnClick;
    return (
      <nav role="navigation" aria-label="main-navigation" className={this.props.classes}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap md:py-4 md:px-4 lg:px-4 xl:px-0 xl:py-2">
            <div className="flex items-center flex-no-shrink text-black pt-2">
              <div className="text-blue pb-2 pl-8 md:pl-0">
                <Logo classes={this.props.logo} layout="items-center" svg="" />
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
              <div className="text-lg flex flex-col text-center md:flex-row md:text-left">
                <Link
                  to="/services"
                  className={`${this.props.navItems} nav-item hover:bg-blue-dark hover:shadow trans-y hover:text-white mt-4 md:mr-8 md:mt-0 lg:mr-8`}
                >
                  services
                </Link>
                <Link
                  to="/blog"
                  className={`${this.props.navItems} block nav-item hover:bg-blue-dark hover:shadow trans-y hover:text-white mt-6 md:mr-8 md:mt-0 lg:mr-8`}
                >
                  work
                </Link>
                <Link
                  to="/contact"
                  className={`${this.props.navItems} block nav-item hover:bg-blue-dark hover:shadow trans-y hover:text-white mt-6 md:mt-0`}
                >
                  let's talk
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

import React from 'react'
import MenuSvg from "../img/menu.svg";
import CloseSvg from "../img/close.svg";
import TaLogo from "../img/taeye_logo.svg"

import { Link } from "gatsby";

const Logo = ({layout, svg}) => (
  <Link to="/" >
    <div className={`${layout}`}>
      <TaLogo className={`h-10 w-auto ${svg}`}/>
    </div>
  </Link>
)

const Menu = ({classes}) => (
  <div>
    <MenuSvg className={classes} />
  </div>
)

const Close = ({classes}) => (
  <div>
    <CloseSvg className={classes} />
  </div>
)

export {Logo, Menu, Close}
import { Fragment } from "react";

import MainNavigation from "./main-navigation";

function Layout(props) {
  return <main>{props.children}</main>;
}

export default Layout;

import React from "react";
import Footer from "./Footer";
import AppNav from "./AppNav";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <React.Fragment>
      <Logo />
      <AppNav />
      <p>List of cities: </p>
      <Footer />
    </React.Fragment>
  );
}

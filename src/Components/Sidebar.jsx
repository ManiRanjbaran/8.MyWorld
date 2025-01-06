import React from "react";
import Footer from "./Footer";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <React.Fragment>
      <div className={styles.sidebar}>
        <Logo />
        <AppNav />
        <p>List of cities: </p>
        <Footer />
      </div>
    </React.Fragment>
  );
}

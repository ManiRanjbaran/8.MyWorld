import React from "react";
import Footer from "../Footer/Footer";
import AppNav from "../AppNav/AppNav";
import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <React.Fragment>
      <div className={styles.sidebar}>
        <Logo />
        <AppNav />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
}

import React from "react";
import Nav from "./Nav";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import styles from "../nav/nav.module.css";

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const hamburgerIcon = (
    <FiMenu className={styles.hamburger} 
    onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <MdOutlineClose
      className={styles.hamburger}
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <nav className="mobileNav">
      {open ? closeIcon : hamburgerIcon}
      {open && <Nav  />}
    </nav>
  );
}

export default MobileNav;

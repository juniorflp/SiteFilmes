import React from "react";
import MobileNav from "../nav/MobileNav";
import WebNav from "../nav/WebNav";
import styles from "./sobre.module.css";

function Sobre() {
  return (
    <>
      <WebNav />
      <MobileNav />

      <section className={styles.sobre} >
        <h1>Sobre</h1>
        <div className={styles.barra}></div>
        <div className={styles.contP}>
          <p>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one Where does it come from? Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia,{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default Sobre;

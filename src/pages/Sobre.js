import React from "react";
import Nav from "../nav/Nav";
import styles from "./sobre.module.css";

function Sobre() {
  return (
    <> 
    <Nav/>
      <section className={`${styles.sobre} animeLeft`}>
       
        <h1>Sobre</h1>
        <p>
          Where does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one{" "}
          Where does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          {" "}
        </p>
        
      </section>
    
    </>
    
  );
}

export default Sobre;

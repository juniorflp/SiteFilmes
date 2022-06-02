import React from "react";
import styles from "./backToTop.module.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function BackToTop() {
  const [top, setTop] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {top && (
        <div>
          <BsFillArrowUpCircleFill className={styles.btnUp}
          onClick={scrollup} />
        </div>
      )}
    </>
  );
}

export default BackToTop;

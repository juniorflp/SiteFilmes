import React from "react";
import styles from "./card.module.css";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card({serie}) {

  const data = new Date(serie.release_date)
  const newData = data.toLocaleDateString()
  const nota = serie.vote_average.toFixed(1)

  
  return (
    <div className={`${styles.cardSeries} animeLeft`}>

      <span className={styles.iconFav}>
        <MdFavoriteBorder />
      </span>

      <img
        className={styles.fotoCard}
        src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
      />

      <div className={styles.cardDetails}>
        <div className={styles.contStar}>
          <AiFillStar className={styles.iconStar} />
          <span className={styles.nota}>{nota}</span>
        </div>

        <h1>{serie.title}</h1>

        <h2>{newData}</h2>

        <Link to={`/infos/${serie.id}`} key={serie.id} className={styles.btnDetails}>
          <div className={styles.contMais}>
            <AiOutlinePlusCircle className={styles.mais} /> 
            <span className={styles.textoMais}>Mais detalhes</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Card;

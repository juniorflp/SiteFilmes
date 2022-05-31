import React from "react";
import axios from "axios";
import styles from "./infos.module.css";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function InfoSeries() {
  const [filme, setFilme] = React.useState([]);
  const [generos, setGeneros] = React.useState([]);
  const foto = filme.backdrop_path;
  const stiles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${foto})`,
  };

  const imgBaseUrl = "https://image.tmdb.org/t/p/w400";
  const imgBaseUrl2 = "https://image.tmdb.org/t/p/original";
  const nota = filme.vote_average;

  const {id} = useParams()
  

  const navigate = useNavigate();

  React.useEffect(() => {
    load();
  }, [id]);

  async function load() {
    try {
      const resposta = await axios.get(
        // ` https://api.themoviedb.org/3/tv/${id}?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
        `https://api.themoviedb.org/3/tv/${id}?with_networks=213&api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
        // `https://api.themoviedb.org/3/movie/${id}?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`

      );
      setFilme(resposta.data);
      setGeneros(resposta.data.genres);
      console.log(resposta.data);
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <section className={styles.containerInfo}>
      {/* <img className={styles.bg} src={`${imgBaseUrl2}${filme.backdrop_path}`} alt="bg"/> */}
      <div className={styles.bg} style={stiles}></div>

      <div className={styles.botaoContainer}>
        <button className={styles.btnBack} onClick={() => navigate(-1)}>
          <BiArrowBack /> voltar
        </button>
      </div>

      <img
        className={styles.poster}
        src={`${imgBaseUrl}${filme.poster_path}`}
        alt="capa do filme"
      />

      <div className={styles.dados}>
        <h1>{filme.name}</h1>
        <div className={styles.score}>
          <AiFillStar className={styles.star} />
          {nota}
        </div>
        <p className={styles.genero}>
          {generos.map((genero) => genero.name + " | ")}
        </p>
        <p>{filme.overview}</p>
      </div>
    </section>
  );
}

export default InfoSeries;

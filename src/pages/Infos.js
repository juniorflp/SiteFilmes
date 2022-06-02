import React from "react";
import axios from "axios";
import styles from "./infos.module.css";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Load from "../load/Load";

function Infos() {
  const [filme, setFilme] = React.useState([]);
  const [generos, setGeneros] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const foto = filme.backdrop_path;
  const stiles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${foto})`,
  };

  const imgBaseUrl = "https://image.tmdb.org/t/p/w400";
  const imgBaseUrl2 = "https://image.tmdb.org/t/p/original";
  const nota = filme.vote_average;

  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    load();
  }, [id]);

  async function load() {
    setLoading(true);
    try {
      const resposta = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
      );
      setFilme(resposta.data);
      setGeneros(resposta.data.genres);
      console.log(resposta.data);
    } catch (error) {
      console.log("Error");
    } finally {
      setLoading(false);
    }
  }
  if (filme === null) return null;
  if (loading)
    return (
      <div>
        <Load />
      </div>
    );
  return (
    <section className={styles.containerInfo}>
      {/* <img className={styles.bg} src={`${imgBaseUrl2}${filme.backdrop_path}`} alt="bg"/> */}
      <div className={styles.bg} style={stiles}></div>

      <div className={styles.botaoContainer}>
        <button className={styles.btnBack} onClick={() => navigate(-1)}>
          <BiArrowBack /> voltar
        </button>
      </div>
      <div className={styles.fotoDados}>
        <img
          className={styles.poster}
          src={`${imgBaseUrl}${filme.poster_path}`}
          alt="capa do filme"
        />

        <div className={styles.dados}>
          <h1>{filme.title}</h1>
          <div className={styles.score}>
            <AiFillStar className={styles.star} />
            {nota}
          </div>
          <p className={styles.genero}>
            {generos.map((genero) => genero.name + " | ")}
          </p>
          <div className={styles.paragrafo}>
            <p>{filme.overview}</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Infos;

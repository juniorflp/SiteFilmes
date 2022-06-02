import React from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from "./lancamentos.module.css";
import { useLocation } from "react-router-dom";
import WebNav from "../nav/WebNav";
import MobileNav from "../nav/MobileNav";
import Load from "../load/Load";

function Busca() {
  const [series, setSeries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  //const urlAPI =`https://api.themoviedb.org/3/search/tv?query=love&api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
  const location = useLocation();
  const urlAPI = `https://api.themoviedb.org/3/search/movie${location.search}&api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`;

  React.useEffect(() => {
    load();
  }, [location.search]);

  async function load() {
    setLoading(true);
    try {
      const resposta = await axios.get(urlAPI);
      setSeries(resposta.data.results);
      console.log(resposta.data);
    } catch (erro) {
      console.log("erro");
    }finally{
      setLoading(false);
    }
  }
  if(series === null)return null;
  if(loading)return  <div><Load/></div>;
  return (
    <>
      <WebNav />
      <MobileNav />

      {series.length === 0 ? (
        <h3 className={`${styles.aviso} animeLeft`}>Digite um título...</h3>
      ) : (
        <div className={styles.contentLancamentos}>
          {series.map((serie) => (
            <Card key={serie.id} serie={serie} />
          ))}
        </div>
      )}
    </>
  );
}

export default Busca;

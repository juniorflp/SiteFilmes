import React from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from "./lancamentos.module.css";
import WebNav from "../nav/WebNav";
import MobileNav from "../nav/MobileNav";
import Load from "../load/Load";

function Lancamentos() {
  const [series, setSeries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    load();
  }, []);
  // "https://api.themoviedb.org/3/tv/airing_today?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR"
  async function load() {
    setLoading(true);
    try {
      const resposta = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-03-15&primary_release_date.lte=2022-05-22&api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
      );
      setSeries(resposta.data.results);
      console.log(resposta.data.results);
    } catch (error) {
      console.log("Error");
    }finally{
      setLoading(false)
    }
  }
  if(series === null)return null;
  if(loading)return  <div><Load/></div>;
  return (
    <>
      <WebNav />
      <MobileNav />
      <div className={styles.contentLancamentos}>
        {series.map((serie) => (
          <Card key={serie.id} serie={serie} />
        ))}
      </div>
    </>
  );
}

export default Lancamentos;

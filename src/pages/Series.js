import React from "react";
import axios from "axios";
import CardSerie from "../card/CardSerie";
import styles from "./lancamentos.module.css";
import Nav from "../nav/Nav";


function Series() {
  const [series, setSeries] = React.useState([]);

  React.useEffect(() => {
    load();
  }, []);
 
  async function load() {
    try {
      const resposta = await axios.get(
        // `https://api.themoviedb.org/3/movie/popular?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
        `https://api.themoviedb.org/3/trending/tv/day?with_networks=213&api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
      //  ` https://api.themoviedb.org/3/tv/airing_today?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
      // `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-03-15&primary_release_date.lte=2022-05-22&api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`

      );
      setSeries(resposta.data.results);
      console.log(resposta.data.results);
    } catch (error) {                                
      console.log("Error");
    }
  }

  return (
      <>
       <Nav/>
        <div className={styles.contentLancamentos}>
        {series.map((serie) => (
            <CardSerie key={serie.id} serie={serie} />
        ))}
        </div>
      </>
    
  );
}

export default Series;

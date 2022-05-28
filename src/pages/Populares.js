import React from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from "./lancamentos.module.css";
import Nav from "../nav/Nav";


function Populares() {
  const [series, setSeries] = React.useState([]);

  React.useEffect(() => {
    load();
  }, []);
 
  async function load() {
    try {
      const resposta = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR`
      );
      setSeries(resposta.data.results);
      console.log(resposta.data);
    } catch (error) {                                
      console.log("Error");
    }
  }

  return (
      <>
       <Nav/>
        <div className={styles.contentLancamentos}>
        {series.map((serie) => (
            <Card key={serie.id} serie={serie} />
        ))}
        </div>
      </>
    
  );
}

export default Populares;

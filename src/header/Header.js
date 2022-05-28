import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";


function Header() {

  const [search, setSearch]=React.useState('')

  let navigate = useNavigate()

  function buscar(e) {
    e.preventDefault()
    navigate('/busca?query='+search )
  }
 

  return (
    <header className={styles.header}>
      <div className={styles.headerItens}>
        <Link to="/" end><h1 className={styles.title}>Filmes Top</h1></Link>
        
        <form onSubmit={buscar}>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Digite um filme"
            className={styles.searchBar}
            onChange={({target})=>setSearch(target.value)}
          />
          <button type="submit" className={styles.btnSubmit}>Procurar</button>
        </form>
      </div>
    </header>
  );
}

export default Header;

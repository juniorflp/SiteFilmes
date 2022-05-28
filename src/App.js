// 8379d811565746e8306cca85bd4887c2 minha key api
// URL BASE - https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>&language=pt-BR
//tv/airing_today
//https://api.themoviedb.org/3/tv/airing_today?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Busca from "./pages/Busca";
import Lancamentos from "./pages/Lancamentos";
import Sobre from "./pages/Sobre";
import Populares from "./pages/Populares";
import Infos from "./pages/Infos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" end element={< Lancamentos/>}/>
            <Route path="lancamentos" element={< Lancamentos/>}/>
            <Route path="populares" element={< Populares/>}/>
            <Route path="sobre" element={<Sobre/>}/>
            <Route path="busca" element={<Busca/>}/>
            <Route path="infos/:id" element={<Infos/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

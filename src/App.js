// 8379d811565746e8306cca85bd4887c2 minha key api
// URL BASE - https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>&language=pt-BR
//tv/airing_today
//https://api.themoviedb.org/3/tv/airing_today?api_key=8379d811565746e8306cca85bd4887c2&language=pt-BR
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Busca from "./pages/Busca";
import Lancamentos from "./pages/Lancamentos";
import Sobre from "./pages/Sobre";
import Infos from "./pages/Infos";
import InfoSeries from "./pages/InfoSeries";
import Series from "./pages/Series";
import BackToTop from "./backToTop/BackToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <BackToTop/>
          <Routes>
            <Route path="/" end element={< Lancamentos/>}/>
            <Route path="lancamentos" element={< Lancamentos/>}/>
            <Route path="series" element={< Series/>}/>
            <Route path="sobre" element={<Sobre/>}/>
            <Route path="busca" element={<Busca/>}/>
            <Route path="infos/:id" element={<Infos/>}/>
            <Route path="infoseries/:id" element={<InfoSeries/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

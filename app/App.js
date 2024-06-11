const d = document;
import { FooterPage } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { eventsClicks } from "./helpers/events_clicks.js";
const $ROOT = d.getElementById("root");

export async function App() {
  while ($ROOT.firstChild) {
    $ROOT.removeChild($ROOT.firstChild);
  }
  //HEADER
  $ROOT.append(Header());

  //SECCION DE PELICULAS
  $ROOT.append(Main());

  //LOGICA PARA MANEJO DE RUTAS
  Router();
  
  //FOOTER
  $ROOT.append(FooterPage());
   
  // EVENTOS DE CLICKS
  eventsClicks();
}

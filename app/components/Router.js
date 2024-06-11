import { ajax } from "../helpers/ajax.js";
import { value } from "../helpers/events_clicks.js";
import { renderNewAllDataFilms } from "../helpers/render_new_all_data_films.js";
import { Loader } from "./Loader.js";
import { Videos } from "./Videos.js";

// FUNCION QUE SE ENCARGA DE ESPERAR A QUE SE CARGEN LAS IMAGENES EN UN CONTEXTO INVOCADO
const eventLoadImages=(images, loader)=>{
  let imagesLoaded = 0; //contador de imagenes
  if(images.length > 0){
    images.forEach(img => {
      img.addEventListener("load", () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          // Todas las imágenes se han cargado
          loader.classList.add("container-loader--hide");
        }
      });
    });
  }else{
    loader.classList.add("container-loader--hide");
  }
  return imagesLoaded;
}
export async function Router() {
  const d = document, w = window, $main = d.getElementById("main");
  let { hash } = location;

  while ($main.firstChild) {
    $main.removeChild($main.firstChild);
  }

  $main.append(Loader());

  if (!hash || hash === "#/") {
    $main.innerHTML = `<h2>Sección de Inicio</h2>`;
  } else if (hash.includes("#/busqueda")) {
    $main.innerHTML = `<h2>Sección de Búsqueda</h2>`;
  } else if (hash === "#/series") {
    $main.innerHTML = `<h2>Sección de Series</h2>`;
  } else if (hash === "#/peliculas") {
    //CONSULTA A API PARA MOSTRAR TODAS LAS PALICULAS
    await ajax({
      url: `http://localhost:3000/all-films/${value}`,
      cbSuccess:(allPosts) => {
        renderNewAllDataFilms(allPosts);
      },
    });
  } else {
    await ajax({ 
      url:`http://localhost:3000/movie/${localStorage.getItem("video_id")}/videos`, 
      cbSuccess:(data)=>{
        if(data.results.length == 0){
          console.warn("No hay videos para esta pelicula...")
        }else{
          let trailers = data.results.filter(video => video.type === "Trailer");  
          if(trailers.length > 0){
            let trailer = trailers[0];
            $main.append(Videos(trailer));
          }
          
        }
      }
    });
  }

  //****************LOADER**************************//
  const $LOADER=d.querySelector(".container-loader")
  // Detectar cuando se carguen todas las imágenes
  const images = d.querySelectorAll("img");
  eventLoadImages(images,$LOADER);
}

import { Router } from "../components/Router.js";
export let value=1;

export const eventsClicks = () => {
  const scrollBehavior = {
    behavior: "smooth",
    top: 0,
  };
  // Funcion para incrementar paginas
  const incrementPage = async(e,initial, limit, selector) => {
    if (e.target.matches(selector)) {
      e.preventDefault();
      if (value > initial && value <= limit) {
        value++; // Incrementa el valor de 'value'
        await Router();
        window.scrollTo(scrollBehavior);
      }
    }
    return value;
  };

  // Funcion para decrementar
  const decrementPage = async (e,initial, selector) => {
    if (e.target.matches(selector)) {
      e.preventDefault();
      if (value > initial) {
        value--; // Incrementa el valor de 'value'
        await Router();
        window.scrollTo(scrollBehavior);
      }
    }
    return value;
  };

  //EVENTOS DE CLICK GLOBALES
  document.addEventListener("click", (e) => {
    // FUNCION QUE INCREMENTA PAGINA
    incrementPage(e, 0, 500, ".container-buttons__button-next");
    decrementPage(e, 1, ".container-buttons__button-prev");
  });
};

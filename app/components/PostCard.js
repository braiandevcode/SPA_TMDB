import { PostCardTitle } from "./PostCardTitle.js";
import { PostCardDataMain } from "./PostCardDataMain.js";
import CREATE_ELEMENT from "../helpers/createElement.js";
import { PostCardDescriptionFilm } from "./PostCardDescriptionFilm.js";

const scrollBehavior = {
  behavior: "smooth",
  top: 0,
};

export function PostCard(props) {
  const ARTICLE = CREATE_ELEMENT("ARTICLE", {
    class: "post-cards-article container-flex",
  });
  // componente contenedor de titulo
  ARTICLE.append(PostCardTitle(props));
  // componente contenedor datos principales de pelicula
  ARTICLE.append(PostCardDataMain(props));

  ARTICLE.append(PostCardDescriptionFilm(props));

  // vento de click
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-cards-article__descriptions-film .post-cards-article__description-film-link")) return false;
    localStorage.setItem("video_id", e.target.dataset.id);
    window.scrollTo(scrollBehavior);
  });
  return ARTICLE;
}

import api from "../helpers/config.js"
import CREATE_ELEMENT from "../helpers/createElement.js";
export function PostCardDataImage(props){
    let { poster_path, title }= props;
    const CONTAINER_IMAGE= CREATE_ELEMENT("DIV", { class:"posts-cards-article__data-image-film" });
    const IMAGE_FILM= CREATE_ELEMENT("IMG", { class:"posts-cards-article__img-film", src: `${api.BASE_URL}${poster_path}`, alt:`Imagen de ${title}` });
    CONTAINER_IMAGE.append(IMAGE_FILM);

    return CONTAINER_IMAGE;
}

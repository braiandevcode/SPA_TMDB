import CREATE_ELEMENT from "../helpers/createElement.js";

export function PostCardDescriptionFilm(props){
    let { overview, id, title }= props;
    // let titleUrl = title.replace(/ /g, "-"); //OPCION 1
    let titleUrl="";
    for(let i=0; i < title.length; i++){
        if(title[i] === " "){
            titleUrl += "-";
        } else {
            titleUrl += title[i];
        }
    };

    const CONTAINER_DESCRIPTIONS_FILM =CREATE_ELEMENT("DIV", {class: "post-cards-article__descriptions-container" });
    const ELEMENT_CONTEXT=CREATE_ELEMENT("DIV", {class: "post-cards-article__descriptions-film"});
    const DESCRIPTION_TEXT=CREATE_ELEMENT("P", {class:"post-cards-article__description-film-text", title:`${overview}`});
    const LINK_FILM=CREATE_ELEMENT("a", {class:"link post-cards-article__description-film-link", href:`#/${titleUrl}`, rel:"noopener noreferrer", "data-id":`${id}` });
    
    DESCRIPTION_TEXT.textContent=overview;
    
    LINK_FILM.textContent="Ver Trailer";
    ELEMENT_CONTEXT.append(DESCRIPTION_TEXT);
    ELEMENT_CONTEXT.append(LINK_FILM);
    
    CONTAINER_DESCRIPTIONS_FILM.append(ELEMENT_CONTEXT);

    return CONTAINER_DESCRIPTIONS_FILM;
}
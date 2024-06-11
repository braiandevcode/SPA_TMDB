import CREATE_ELEMENT from "../helpers/createElement.js";

export function PostCardTitle(props){
    let { release_date, title }=props;
    let humanDate= new Date(release_date).toLocaleString();

    const CONTAINER_TITLE=CREATE_ELEMENT("DIV", {class: "post-cards-article__film-title"});
    const TITLE=CREATE_ELEMENT("H2", { class:"post-cards-article__title", title:`${title}`});
    const P_TEXT=CREATE_ELEMENT("P", {class: "post-cards-article__text-time"});
    const DATE_TIME=CREATE_ELEMENT("TIME", { class:"post-cards-article__time", "datetime":`${release_date}` });

    TITLE.textContent=title;
    DATE_TIME.textContent=`Lanzamiento: ${humanDate}`;

    P_TEXT.append(DATE_TIME);
    CONTAINER_TITLE.append(TITLE);
    CONTAINER_TITLE.append(P_TEXT);

    return CONTAINER_TITLE;
}
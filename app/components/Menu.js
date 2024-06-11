import CREATE_ELEMENT from "../helpers/createElement.js"
import { Link } from "./Link.js";

export function NavMenu(){
    const CONTAINER_NAV=CREATE_ELEMENT("NAV", {class: "head-navigation__nav container-flex"});
    const CONTAINER_MENU_LISTS=CREATE_ELEMENT("UL", { class: "head-navigation__lists container-flex"});
    let contentLinksNav=["Inicio", "Búsqueda", "Series", "Películas"];
    let hash =["#/", "#/busqueda", "#/series", "#/peliculas"];

    contentLinksNav.forEach((content, index)=>{
        const LIST=CREATE_ELEMENT("LI", { class: "head-navigation__list" });
        const LINKS_NAV=Link({ class:"link head-navigation__link", href:`${hash[index]}`});
        LINKS_NAV.textContent=content;
        LIST.append(LINKS_NAV);
        CONTAINER_MENU_LISTS.append(LIST);
    });
    CONTAINER_NAV.append(CONTAINER_MENU_LISTS);

    return CONTAINER_NAV;
}

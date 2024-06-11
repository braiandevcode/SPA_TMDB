import CREATE_ELEMENT from "../helpers/createElement.js"

export function SearchForm(){
    const CONTAINER_FORM_SEARCH= CREATE_ELEMENT("FORM", {class: "search-form" });
    const INPUT_SEARCH= CREATE_ELEMENT("INPUT", { class:"search-form__input", type: "search", placeholder:"Buscar...", name:"search" });
    CONTAINER_FORM_SEARCH.append(INPUT_SEARCH);
    return CONTAINER_FORM_SEARCH;
}

import CREATE_ELEMENT from "../helpers/createElement.js"

export function Loader(){
    const CONTAINER_LOADER=CREATE_ELEMENT("DIV", { class: "container-loader container-flex" });
    const LOADER=CREATE_ELEMENT("DIV", { class: "loader" });
    CONTAINER_LOADER.append(LOADER);
    return CONTAINER_LOADER;
}
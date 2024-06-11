import CREATE_ELEMENT from "../helpers/createElement.js";
export function Posts(){
    const SECTION =CREATE_ELEMENT("SECTION", { class:"posts-cards container-grid", id:"main"});
    return SECTION;
}
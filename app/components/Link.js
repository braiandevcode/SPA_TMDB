import CREATE_ELEMENT from "../helpers/createElement.js";
export function Link(props){
    const LINK =CREATE_ELEMENT("A", props);
    return LINK;
}
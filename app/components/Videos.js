import CREATE_ELEMENT from "../helpers/createElement.js";
import api from "../helpers/config.js";
export function Videos(props){
    let { key }=props;
    console.log(props)
    const VIDEO= CREATE_ELEMENT("DIV", {class: "container-video-trailler container-flex"});
     // Crear un nuevo elemento iframe
     const IFRAME= CREATE_ELEMENT("IFRAME", { 
        class:"container-video-trailler__video",
        src:`${api.YOUTUBE}/embed/${key}`,
        frameborder:"0",
        allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullscreen:true,
    });
    VIDEO.append(IFRAME)
    return VIDEO;
}
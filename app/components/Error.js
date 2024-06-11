import CREATE_ELEMENT from "../helpers/createElement.js";

export function Error(message){
    const CONTAINER_ERROR=CREATE_ELEMENT("DIV", { class:"container-error container-flex"} );
    const MESSAGE_ERROR=CREATE_ELEMENT("P", { class:"container-error__message", id:"error"} );
    MESSAGE_ERROR.textContent=message;
    CONTAINER_ERROR.append(MESSAGE_ERROR);

    return CONTAINER_ERROR;
}
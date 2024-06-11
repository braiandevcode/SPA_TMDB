import CREATE_ELEMENT from "../helpers/createElement.js";

export function Maintenance(){
    const CONTAINER_MAINTENANCE=CREATE_ELEMENT("DIV", { class:"container-maintenance container-flex"} );
    const TITLE_MESSAGE=CREATE_ELEMENT("H2", { class: "container-maintenance__title"});
    const MESSAGE_MAINTENANCE=CREATE_ELEMENT("P", { class:"container-maintenance__message", id:"mantenimiento"} );
    TITLE_MESSAGE.textContent="Mantenimiento";
    MESSAGE_MAINTENANCE.textContent="La página se encuentra en estado de mantenimiento, Disculpe las molestias, Nos encontramos trabajando para ofrecer un mejor servicio.";
    CONTAINER_MAINTENANCE.append(TITLE_MESSAGE);
    CONTAINER_MAINTENANCE.append(MESSAGE_MAINTENANCE);

    return CONTAINER_MAINTENANCE;
}
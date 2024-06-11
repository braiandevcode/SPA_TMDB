import CREATE_ELEMENT from "../helpers/createElement.js";
import { Button } from "./Button.js";

export function ButtonsNextPrev(){
    const CONTAINER_BUTTONS = CREATE_ELEMENT("DIV", {class: "container-buttons container-flex" });
    const BUTTON_NEXT=Button({class:"container-buttons__button container-buttons__button-next"});
    const BUTTON_PREV=Button({class:"container-buttons__button container-buttons__button-prev"});

    BUTTON_NEXT.textContent="Siguiente";
    BUTTON_PREV.textContent="Atras";

    CONTAINER_BUTTONS.append(BUTTON_PREV);
    CONTAINER_BUTTONS.append(BUTTON_NEXT);

    return CONTAINER_BUTTONS;
}
import CREATE_ELEMENT from "../helpers/createElement.js";
import { ButtonsNextPrev } from "./ButonsNextPrev.js";
import { Posts } from "./Posts.js";
export function Main(){
    const MAIN= CREATE_ELEMENT("MAIN", null);
    MAIN.append(Posts());
    MAIN.append(ButtonsNextPrev());
    return MAIN;
}
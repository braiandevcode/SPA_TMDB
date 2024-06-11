import CREATE_ELEMENT from "../helpers/createElement.js";
import { NavMenu } from "./Menu.js";

export function FooterPage(){
    const CONTAIENR_FOOTER= CREATE_ELEMENT("FOOTER", {class: "footer-navigation"});
    CONTAIENR_FOOTER.append(NavMenu());
    return CONTAIENR_FOOTER;
}
import CREATE_ELEMENT from "../helpers/createElement.js";
import { PostCardDataDescriptionRange } from "./PostCardDataDescriptionRange.js";
import { PostCardDataImage } from "./PostCardDataImage.js";

export function PostCardDataMain(props){
    const CARD_DATA_MAIN= CREATE_ELEMENT("DIV", { class:"posts-cards-article__data-main-film container-flex" });
    CARD_DATA_MAIN.append(PostCardDataImage(props));
    CARD_DATA_MAIN.append(PostCardDataDescriptionRange(props));

    return CARD_DATA_MAIN;
}


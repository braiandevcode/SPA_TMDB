import CREATE_ELEMENT from "../helpers/createElement.js";

export function PostCardDataDescriptionRange(props){
    let { vote_average, vote_count, popularity } =props;
    const valueMap ={ "Popularidad":popularity, "Votos": vote_count, "Promedio": vote_average };
    const CONTAINER_DATA_DESCRIPTION_RANGE=CREATE_ELEMENT("DIV", { class:"posts-cards-article__data-descriptions-range container-flex" });

    for(const name of Object.keys(valueMap)) {
        const CONTAINER_CIRCLE=CREATE_ELEMENT("DIV", { class:"posts-cards-article__circle container-flex" });
        const CONTAINER_CIRCLE_INSET=CREATE_ELEMENT("DIV", {class: "container-flex" });
        const SPAN=CREATE_ELEMENT("SPAN", null); 
        const SMALL=CREATE_ELEMENT("SMALL", null);
        
        SPAN.textContent=name;
        SMALL.textContent=valueMap[name];

        CONTAINER_CIRCLE_INSET.append(SPAN);
        CONTAINER_CIRCLE_INSET.append(SMALL);
        CONTAINER_CIRCLE.append(CONTAINER_CIRCLE_INSET);
        CONTAINER_DATA_DESCRIPTION_RANGE.append(CONTAINER_CIRCLE);
    }

    return CONTAINER_DATA_DESCRIPTION_RANGE;
}

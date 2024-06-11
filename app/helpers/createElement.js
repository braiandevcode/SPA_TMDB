const CREATE_ELEMENT=(tagElement, attributes=null)=>{
    const ELEMENT_CONTEXT = document.createElement(tagElement);
    // recorremos el objeto
    for(const attr in attributes){
        if(attributes.hasOwnProperty(attr)){
            ELEMENT_CONTEXT.setAttribute(attr, attributes[attr]); //clave-valor del objeto accediendo por su atributo[clave]
        }
    }
    return ELEMENT_CONTEXT;
}

export default CREATE_ELEMENT;
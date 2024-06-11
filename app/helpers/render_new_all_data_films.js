import { PostCard } from "../components/PostCard.js";
const d=document;

// FUNCION AUXILIAR
export const renderNewAllDataFilms=(allPosts)=>{
  const $FRAGMENT=d.createDocumentFragment();
  const $MAIN=d.getElementById("main");

  const results= allPosts.results;
  console.log(results);
  //SECTIONS POSTS
  results.forEach(post => {
    $FRAGMENT.append(PostCard(post));  
  });

  $MAIN.append($FRAGMENT); 

  const $ARTILES_DESCRIPTION = d.querySelectorAll(".post-cards-article__descriptions-film .post-cards-article__description-film-text");
  
  $ARTILES_DESCRIPTION.forEach(text =>{
    if(text.textContent.trim() === "") $MAIN.removeChild(text.parentElement.parentElement.parentElement);
  });
}
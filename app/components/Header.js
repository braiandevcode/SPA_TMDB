import CREATE_ELEMENT from "../helpers/createElement.js";
import { Link } from "./Link.js";
import { NavMenu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";

export function Header(){
  const CONTAINER_HEAD = CREATE_ELEMENT("HEADER", { class:"head-navigation container-flex" });
  const CONTAINER_TITLE_MAIN = CREATE_ELEMENT("DIV", { class: "head-navigation__title-main"});
  const TITLE_MAIN= CREATE_ELEMENT("H1", { class: "head-navigation__title" });
  const TITLE_LINK =Link({ class: "link head-navigation__link", href:"https://www.themoviedb.org/", target:"_blank", rel:"noopener noreferrer" });
  
  TITLE_LINK.textContent="SPA con API themoviedb";

  TITLE_MAIN.append(TITLE_LINK);

  CONTAINER_TITLE_MAIN.append(TITLE_MAIN);
  CONTAINER_HEAD.append(CONTAINER_TITLE_MAIN);
  CONTAINER_HEAD.append(NavMenu());
  CONTAINER_HEAD.append(SearchForm());

  return CONTAINER_HEAD;
}

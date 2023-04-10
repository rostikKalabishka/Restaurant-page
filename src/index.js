// import menuLoad from "./modules/menu";
import pageLoad from "./modules/initialPage";

import homeLoad from "./modules/home";
import menuLoad from "./modules/menu";
import contactLoad from "./modules/contacts";

pageLoad();
// contactLoad();
// menuLoad();
// homeLoad();

const navCLick = () => {
  const homeNav = document.getElementsByClassName("home");
  const menuNav = document.getElementsByClassName("menu");
  const contactNav = document.getElementsByClassName("contact");
  homeNav.addEventListener("click", homeLoad);
  menuNav.addEventListener("click", menuLoad);
  contactNav.addEventListener("click", contactLoad);
};
navCLick();

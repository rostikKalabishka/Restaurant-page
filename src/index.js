// import menuLoad from "./modules/menu";
import pageLoad from "./modules/initialPage";

import homeLoad from "./modules/home";
import menuLoad from "./modules/menu";
import contactLoad from "./modules/contacts";

pageLoad();

homeLoad();

const navCLick = () => {
  const homeNav = document.getElementById("home");
  const menuNav = document.getElementById("menu");
  const contactNav = document.getElementById("contact");
  homeNav.addEventListener("click", homeLoad);
  menuNav.addEventListener("click", menuLoad);
  contactNav.addEventListener("click", contactLoad);
};
navCLick();

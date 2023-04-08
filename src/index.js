import homeLoad from "./modules/home";
import menuLoad from "./modules/menu";
import contactLoad from "./modules/contact";
init();
function component() {
  const homeNav = document.getElementById("home");
  const menuNav = document.getElementById("menu");
  const contactNav = document.getElementById("contact");
  homeNav.addEventListener("click", home);
  menuNav.addEventListener("click", menu);
  contactNav.addEventListener("click", contact);
}
const init = () => {
  component();
};

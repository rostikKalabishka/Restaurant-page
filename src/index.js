// import menuLoad from "./modules/menu";
// import contactLoad from "./modules/contact";
init();
function component() {
  const homeNav = document.getElementsByClassName("home");
  const menuNav = document.getElementsByClassName("menu");
  const contactNav = document.getElementsByClassName("contact");
  homeNav.addEventListener("click", home);
  menuNav.addEventListener("click", menu);
  contactNav.addEventListener("click", contact);
}
const init = () => {
  component();
};

import createHeader from "./../components/header";
const createMainContent = (id) => {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", id);

  return main;
};

function pageLoad() {
  const content = document.getElementById("content");
  createHeader();
  const mainContainer = createMainContent("main");

  content.appendChild(mainContainer);
}

export default pageLoad;

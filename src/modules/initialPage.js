const createMainContent = (id, textContent) => {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", id);
  main.innerHTML = textContent;
  return main;
};

function pageLoad() {
  console.log(pageLoad(), "BUBA");
  const content = document.getElementById("content");

  const mainContainer = createMainContent("container", "BIBA");

  content.appendChild(mainContainer);
}

export default pageLoad;
//   export default

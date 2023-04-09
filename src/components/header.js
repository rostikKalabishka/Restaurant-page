const createHead = (className, id) => {
  const header = document.createElement("header");
  header.setAttribute("class", className);
  header.setAttribute("id", id);
  return header;
};

const createDiv = (className, id) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  div.setAttribute("id", id);
  //   div.innerHTML = textDiv;
  return div;
};

const createNav = (className, id) => {
  const nav = document.createElement("nav");
  nav.setAttribute("class", className);
  nav.setAttribute("id", id);
  return nav;
};

const createUl = (className, id) => {
  const ul = document.createElement("ul");
  ul.setAttribute("class", className);
  ul.setAttribute("id", id);
  return ul;
};
const createLi = (className, id, text = "test") => {
  const li = document.createElement("li");
  li.setAttribute("class", className);
  li.setAttribute("id", id);
  li.innerHTML = text;
  return li;
};

const createH1 = (className, id, text1 = "none") => {
  const text = document.createElement("h1");
  text.setAttribute("class", className);
  text.setAttribute("id", id);
  text.innerHTML = text1;
  return text;
};

const createHeader = () => {
  const content = document.getElementById("content");
  const header = content.appendChild(createHead("header", "header"));
  const navWrapper = header.appendChild(
    createNav("nav-wrapper", "nav-wrapper")
  );

  const containerWide = navWrapper.appendChild(
    createDiv("container-wide", "container-wide")
  );
  const row = containerWide.appendChild(
    createDiv(
      "row space-between align-center",
      "row-space-between-align-center"
    )
  );
  const logo = row.appendChild(createDiv("logo", "logo", "RSTN"));
  logo.innerHTML = "RSTN";
  const navMenu = row.appendChild(createDiv("nav-menu", "nav-menu"));

  const ulHeader = navMenu.appendChild(createUl("ul-header", "ul-header"));
  ulHeader.appendChild(createLi("home", "home", "Home"));
  ulHeader.appendChild(createLi("menu", "menu", "Menu"));
  ulHeader.appendChild(createLi("contact", "contact", "Contact"));

  const info = row.appendChild(createDiv("info", "info", "Info"));
  info.innerHTML = "Info";
  const hero = header.appendChild(createDiv("hero", "hero"));

  hero.appendChild(
    createH1(
      "hero-title-text",
      "hero-title-text",
      "Life Іs Too Short To Eat Bad Food1"
    )
  );
};

export default createHeader;

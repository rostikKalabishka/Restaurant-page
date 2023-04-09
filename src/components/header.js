const createHead = (className, id) => {
  const header = document.createElement("header");
  header.setAttribute("className", className);
  header.setAttribute("id", id);
  return header;
};

const createDiv = (className, id) => {
  const div = document.createElement("div");
  div.setAttribute("className", className);
  div.setAttribute("id", id);
  return div;
};

const createNav = (className, id) => {
  const nav = document.createElement("nav");
  nav.setAttribute("className", className);
  nav.setAttribute("id", id);
  return nav;
};

const createUl = (className, id) => {
  const ul = document.createElement("ul");
  ul.setAttribute("className", className);
  ul.setAttribute("id", id);
  return ul;
};
const createLi = (className, id) => {
  const li = document.createElement("li");
  li.setAttribute("className", className);
  li.setAttribute("id", id);
  return li;
};

const createH1 = (className, id) => {
  const text = document.createElement("h1");
  text.setAttribute("className", className);
  text.setAttribute("id", id);
  return text;
};

const createHeader = () => {};

import contactJSON from "./../data/contact";
const createArticle = (className, id) => {
  const article = document.createElement("article");
  article.setAttribute("class", className);
  article.setAttribute("id", id);
  return article;
};

const createDiv = (className, id) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  div.setAttribute("id", id);

  return div;
};

const createDivText = (className, id, textDiv) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  div.setAttribute("id", id);
  div.innerHTML = textDiv;
  return div;
};

const createP = (className, id, text1 = "none") => {
  const text = document.createElement("p");
  text.setAttribute("class", className);
  text.setAttribute("id", id);
  text.innerHTML = text1;
  return text;
};

const createImg = (src = "none") => {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  return img;
};

const contactLoad = () => {
  const main = document.querySelector("main");
  const container = main.appendChild(createDiv("container", "container"));

  contactJSON.info.map((item) => {
    const article = createArticle("article", "article");
    const articleText = article.appendChild(
      createDiv("article-text", "article-text")
    );
    articleText.appendChild(
      createDivText("article-title", "article-title", `${item.name}`)
    );
    articleText.appendChild(
      createP("text-article", "text-article", `${item.information}`)
    );

    const articleImg = article.appendChild(
      createDiv("article-text", "article-text")
    );
    const image = articleImg.appendChild(createImg(`${item.imgUrl}`));
    image.style.width = "500px";
    image.style.height = "530px";
    container.appendChild(article);
  });
};

export default contactLoad;

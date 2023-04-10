import menuJSON from "./../data/menu.json";

console.log(menuJSON);
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

const createImg = (src = "dsada") => {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  return img;
};

const menuLoad = () => {
  const main = document.querySelector("main");
  const container = main.appendChild(createDiv("container", "container"));

  menuJSON.info.map((item) => {
    const article = createArticle("article", "article");
    const articleText = article.appendChild(
      createDiv("article-text", "article-text")
    );
    articleText.appendChild(
      createDivText("article-title", "article-title", `${item.title}`)
    );
    const price = articleText.appendChild(
      createP("price-article", "price-article", `${item.price} $`)
    );
    price.style.fontSize = "40px";
    const articleImg = article.appendChild(
      createDiv("article-text", "article-text")
    );

    const image = articleImg.appendChild(createImg(`${item.imgUrl}`));
    image.style.width = "500px";
    image.style.height = "400px";
    image.style.borderRadius = "10px";
    container.appendChild(article);
    console.log(article);
  });
};
export default menuLoad;

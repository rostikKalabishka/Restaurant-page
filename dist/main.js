(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("div");return n.setAttribute("class",e),n.setAttribute("id",t),n},t=(e,t,n="test")=>{const i=document.createElement("li");return i.setAttribute("class",e),i.setAttribute("id",t),i.innerHTML=n,i},n=JSON.parse('{"u":[{"title":" Why us?","text":"Firstly, our restaurant offers a wide range of dishes from different cuisines of the world, which are prepared exclusively from fresh and high-quality products. We carefully select ingredients and monitor their quality to ensure the most delicious dishes for our guests. Secondly, our restaurant has a great atmosphere that makes guests feel comfortable and cozy. We take care of the details, such as music, lighting, and decoration, to create a pleasant atmosphere for dinner with friends, family, or a romantic lunch.","imgUrl":"./img/3.webp"},{"title":"About the staff?","text":"Our team of professional waiters is always happy to help you with your food and beverage choices, and will make sure that  your stay in our restaurant is unforgettable. Finally, we offer affordable prices and frequent promotions and discounts for our guests, which makes our restaurant more accessible and convenient for a wide range of people. So, if you are looking for a place with delicious food, pleasant atmosphere and  professional service, then our restaurant is the perfect place  for you. We look forward to your visit!","imgUrl":"./img/4.webp"},{"title":"Advantages","text":" Food quality: We work only with fresh and high-quality ingredients, so our dishes are always delicious and full of flavor. We carefully select products and prepare them with attention to detail to provide our guests with the highest quality food. Wide selection: Our restaurant offers a wide selection of dishes from different cuisines of the world to satisfy the tastes of any guest. We offer dishes ranging from classic to exotic, so you can always find something new and interesting to try. Friendly service: Our team of professional waiters is always happy to help you with your food and drink choices, and will make sure that your stay in our restaurant is  comfortable and memorable.","imgUrl":"./img/6.webp"}]}'),i=(e,t)=>{const n=document.createElement("div");return n.setAttribute("class",e),n.setAttribute("id",t),n},r=()=>{const e=document.querySelector("main").appendChild(i("container","container"));e.firstChild&&e.removeChild(e.firstChild),n.u.map((t=>{const n=((e,t)=>{const n=document.createElement("article");return n.setAttribute("class","article"),n.setAttribute("id","article"),n})(),r=n.appendChild(i("article-text","article-text"));r.appendChild(((e,t,n)=>{const i=document.createElement("div");return i.setAttribute("class","article-title"),i.setAttribute("id","article-title"),i.innerHTML=n,i})(0,0,`${t.title}`)),r.appendChild(((e,t,n="none")=>{const i=document.createElement("p");return i.setAttribute("class",e),i.setAttribute("id",t),i.innerHTML=n,i})("text-article","text-article",`${t.text}`)),n.appendChild(i("article-text","article-text")).appendChild(((e="dsada")=>{const t=document.createElement("img");return t.setAttribute("src",e),t})(`${t.imgUrl}`)),e.appendChild(n),console.log(n)}))},a=JSON.parse('{"info":[{"title":"VEGETABLE ASSORTMENT","price":"29.39","imgUrl":"./img/11.jpg"},{"title":"VEAL TARTARE","price":"29.49","imgUrl":"./img/12.jpg"},{"title":"CAESAR SALAD","price":"19.99","imgUrl":"./img/13.jpg"},{"title":"ASSORTED FISH","price":"33.99","imgUrl":"./img/14.jpg"},{"title":"SOLYANKA","price":"15.99","imgUrl":"./img/16.jpg"},{"title":"EAL KEBAB","price":"29.99","imgUrl":"./img/15.jpg"}]}');console.log(a);const s=(e,t)=>{const n=document.createElement("div");return n.setAttribute("class",e),n.setAttribute("id",t),n},o=()=>{const e=document.querySelector("main").appendChild(s("container","container"));a.info.map((t=>{const n=((e,t)=>{const n=document.createElement("article");return n.setAttribute("class","article"),n.setAttribute("id","article"),n})(),i=n.appendChild(s("article-text","article-text"));i.appendChild(((e,t,n)=>{const i=document.createElement("div");return i.setAttribute("class","article-title"),i.setAttribute("id","article-title"),i.innerHTML=n,i})(0,0,`${t.title}`)),i.appendChild(((e,t,n="none")=>{const i=document.createElement("p");return i.setAttribute("class",e),i.setAttribute("id",t),i.innerHTML=n,i})("price-article","price-article",`${t.price} $`)).style.fontSize="40px";const r=n.appendChild(s("article-text","article-text")).appendChild(((e="dsada")=>{const t=document.createElement("img");return t.setAttribute("src",e),t})(`${t.imgUrl}`));r.style.width="500px",r.style.height="400px",r.style.borderRadius="10px",e.appendChild(n),console.log(n)}))},l=JSON.parse('{"u":[{"name":"Anna","information":"Ana is a restaurant administrator responsible for ensuring the efficient operation of the restaurant, including managing staff, controlling inventory and resources, ensuring high quality customer service and supporting kitchen operations. She is a key player in ensuring the success of the restaurant and works responsibly and efficiently to ensure the smooth running of the restaurant and customer satisfaction.","imgUrl":"./img/admin3.png"},{"name":"Igor","information":"Igor is the restaurant\'s chef, responsible for the culinary concept and quality of food served in the restaurant. He develops menus, controls the quality of products, and ensures that food is prepared according to recipes and the restaurant\'s unique flavor. Igor is a key player in ensuring the success of the restaurant, he works efficiently and skillfully manages his team to ensure high quality and customer satisfaction.","imgUrl":"./img/shef.jpg"},{"name":"Alex","information":"Alex is a restaurant waiter responsible for customer service and ensuring a pleasant atmosphere in the restaurant. He takes orders, recommends dishes and drinks, assists customers in choosing and ensuring a comfortable stay in the restaurant. Oleksandr is an important link in ensuring customer satisfaction and he works in a highly professional manner, paying attention to the details and needs of each customer.","imgUrl":"./img/offnik.jpg"}]}'),c=(e,t)=>{const n=document.createElement("div");return n.setAttribute("class",e),n.setAttribute("id",t),n},d=()=>{const e=document.querySelector("main").appendChild(c("container","container"));l.u.map((t=>{const n=((e,t)=>{const n=document.createElement("article");return n.setAttribute("class","article"),n.setAttribute("id","article"),n})(),i=n.appendChild(c("article-text","article-text"));i.appendChild(((e,t,n)=>{const i=document.createElement("div");return i.setAttribute("class","article-title"),i.setAttribute("id","article-title"),i.innerHTML=n,i})(0,0,`${t.name}`)),i.appendChild(((e,t,n="none")=>{const i=document.createElement("p");return i.setAttribute("class",e),i.setAttribute("id",t),i.innerHTML=n,i})("text-article","text-article",`${t.information}`));const r=n.appendChild(c("article-text","article-text")).appendChild(((e="none")=>{const t=document.createElement("img");return t.setAttribute("src",e),t})(`${t.imgUrl}`));r.style.width="500px",r.style.height="530px",e.appendChild(n)}))};!function(){const n=document.getElementById("content");(()=>{const n=document.getElementById("content").appendChild(((e,t)=>{const n=document.createElement("header");return n.setAttribute("class","header"),n.setAttribute("id","header"),n})()),i=n.appendChild(((e,t)=>{const n=document.createElement("nav");return n.setAttribute("class","nav-wrapper"),n.setAttribute("id","nav-wrapper"),n})()).appendChild(e("container-wide","container-wide")).appendChild(e("row space-between align-center","row-space-between-align-center"));i.appendChild(e("logo","logo")).innerHTML="RSTN";const r=i.appendChild(e("nav-menu","nav-menu")).appendChild(((e,t)=>{const n=document.createElement("ul");return n.setAttribute("class","ul-header"),n.setAttribute("id","ul-header"),n})());r.appendChild(t("home","home","Home")),r.appendChild(t("menu","menu","Menu")),r.appendChild(t("contact","contact","Contact")),i.appendChild(e("info","info")).innerHTML="Info",n.appendChild(e("hero","hero")).appendChild(((e,t,n="none")=>{const i=document.createElement("h1");return i.setAttribute("class",e),i.setAttribute("id",t),i.innerHTML=n,i})("hero-title-text","hero-title-text","Life Is Too Short To Eat Bad Food"))})();const i=(e=>{const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t})();n.appendChild(i)}(),(()=>{const e=document.getElementsByClassName("home"),t=document.getElementsByClassName("menu"),n=document.getElementsByClassName("contact");e.addEventListener("click",r),t.addEventListener("click",o),t.addEventListener("click",d),n.addEventListener("click",contact)})()})();
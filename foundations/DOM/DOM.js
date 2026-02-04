const container = document.querySelector("#container");

const content = document.createElement("div");
const redParagraph = document.createElement("p");
const blueh = document.createElement("h3");

content.classList.add("content");
content.textContent = "This is the glorious text-content";
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
blueh.textContent = "I'm a blue h3";
blueh.style.color = "blue";

container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blueh);

const div = document.createElement("div");
div.style.border = "thick solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
const p = document.createElement("p");
h1.textContent = "I'm in a div";
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  console.log(e);
  e.target.style.background = "blue";
  alert("AAH YEAH");
});

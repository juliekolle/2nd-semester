console.log("java is running");

document.querySelector ("button").addEventListener("click", showContent);

function showContent(){
const templateElement = document.querySelector("#myTemplate").content;
const myClone = templateElement.cloneNode(true);
myClone.querySelector("h1").textContent = "Hi Mom";
const parentElement = document.querySelector("main");
parentElement.appendChild(myClone);
}

const templateElement = document.querySelector("#templateForCloning").content;
const myClone = templateElement.cloneNode(true);
myClone.querySelector("h1").textContent = "look, i just changed the text";
//myClone.querySelector("p").textContent = "look, i just changed the text";
const parentElement = document.querySelector("main");
parentElement.appendChild(myClone);

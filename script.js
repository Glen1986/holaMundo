const final = document.getElementById("body");//
const divHead = document.createElement("div");
const text = document.createTextNode("hello World!!!");
final.style.display = "flex"; 
final.appendChild(divHead);
divHead.appendChild(text);
divHead.classList.add("center");

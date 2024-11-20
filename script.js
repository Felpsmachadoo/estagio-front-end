//1
document.querySelector(".hero-content").firstElementChild.innerHTML = "Bem-vindo ao Nosso Site";

//2
document.querySelector(".hero-content").style.backgroundImage = "url('/assets/images/newbanner.jpg')";

//3
document.querySelector(".availability-content").style.display = "none";

//4
document.querySelector(".footer-head p").style.fontWeight = "bold";
document.querySelector(".footer-head p").style.color = "blue";

//5
const hero = document.querySelector(".hero");
const find = document.querySelector(".find");
hero.appendChild(find);

//6
const buttonId = document.querySelector(".find-content-details a");
buttonId.id = "btn-contact";

buttonId.addEventListener("click", function () {
  alert("O botão foi acionado");
});

//7
const select = document.querySelector(".search-1 > select");
const newOption = document.createElement("option");

newOption.value = "Presidente Prudente";
newOption.textContent = "Presidente Prudente";

select.appendChild(newOption);

//8
function addMenuOption() {
  const menu = document.querySelector(".navbar-list");
  const loginItem = menu.querySelector(".login").parentNode;

  const newMenuItem = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.href = "#";
  newLink.textContent = "About us";

  newMenuItem.appendChild(newLink);
  menu.insertBefore(newMenuItem, loginItem);
}

document.addEventListener("DOMContentLoaded", addMenuOption);

//9
const emailInput = document.querySelector(".footer-subscribe > input");
const checkButton = document.querySelector(".footer-subscribe > button");

checkButton.addEventListener("click", function () {
  if (emailInput.value.trim() === "") {
    alert("O campo de e-mail está vazio. Por favor, preencha com o seu e-mail.");
  } else {
    alert("E-mail enviado com sucesso");
  }
});

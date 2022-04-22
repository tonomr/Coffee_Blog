/* Notes for my course of DOM JS - Select elements
// querySelector
const heading = document.querySelector(".header__text h2"); // 0 a 1 elementos
heading.textContent = "Test";
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll(".navegation a");
enlaces[0].textContent = "Test2";
enlaces[0].classList.add("new-class");
// enlaces[0].classList.remove("navegation__link");

// getElementId - old way
const heading2 = document.getElementById("heading");
console.log(heading2);
*/

/* Notes for my course of DOM JS - Add new elements to page
// Add new link
const newLink = document.createElement("A");

// Add href
newLink.href = "new-link.html";
// Add text
newLink.textContent = "New link";
// Add class
newLink.classList.add("navegation__link");
// Add to document
const navegation = document.querySelector(".navegation");
navegation.appendChild(newLink);

console.log(newLink);
*/

/* Notes for my course of DOM JS - Events
// Events
// load wait to all JS, HTML and CSS files are ready
window.addEventListener("load", function() {
    console.log(1);
})

window.onload = print;

// only waits for HTML file
document.addEventListener("DOMContentLoaded", function() {
    console.log(3);
})

console.log(4);

function print() {
    console.log(2);
}

window.onscroll = function() {
    console.log("scrolling...")
}

// Select elements and add it events
const btnSend = document.querySelector(".button--primary");
btnSend.addEventListener("click", function(e) {
    console.log(e);
    e.preventDefault();
    console.log("Clicked");
})
*/

const data = {
  name: "",
  email: "",
  msg: "",
};

const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#msg");

nameInput.addEventListener("input", readText);
emailInput.addEventListener("input", readText);
msgInput.addEventListener("input", readText);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate form
  const { name, email, msg } = data;
  if (name === "" || email === "" || msg === "") {
    showAlert("All camps must be filled >:(", "error");
    return;
  }

  showAlert("All good :)");
});

function readText(e) {
  data[e.target.id] = e.target.value;
}

function showAlert(message, type=null) {
  const alert = document.createElement("P");
  alert.textContent = message;

  if(type) {
      alert.classList.add("error");
  } else {
    alert.classList.add("good");
  }
  
  form.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 3000);
}

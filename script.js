const messageEl = document.querySelector(".message");
const button = document.querySelector(".subscribe-btn");
const main = document.querySelector("main");
const section = document.querySelector("section");
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const mailInput = document.querySelector("#text1");



function mailValidation () {
  const mailValue = mailInput.value.trim();
  if(mailFormat.test(mailValue)){
section.style.display = "block";
main.style.display = "none";
  }
else{
messageEl.style.display = "inline-block";
}
}
button.addEventListener("click", mailValidation);

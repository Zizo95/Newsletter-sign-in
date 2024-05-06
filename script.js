const messageEl = document.querySelector(".message");
const button = document.querySelector(".subscribe-btn");
const main = document.querySelector("main");
const section = document.querySelector("section");
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click",(inputText) => {
  if(inputText.value.match(mailformat)){
    document.form1.text1.focus();
section.style.display = "block";
main.style.display = "none";
    return true;

  }
else{
  document.form1.text1.focus();
messageEl.style.display = "block";
return false
}
})

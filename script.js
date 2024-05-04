const messageEl = document.querySelector(".message");
const button = document.querySelector(".subscribe-btn");
const main = document.querySelector("main");
const section = document.querySelector("section");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

(inputText) => {
  if(inputText.value.match(mailformat)){
section.style.display = "block";
main.style.display = "none";
document.form1.text1.focus();
return true;

  }
else{
messageEl.style.display = "block";
document.form1.text1.focus();
return false
}
}

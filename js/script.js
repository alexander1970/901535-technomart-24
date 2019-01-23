var message = document.querySelector(".letter");
          
var popup = document.querySelector(".modal-letter");
var close = popup.querySelector(".modal-close");
          
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
          
var isStorageSupport = true;
var storage = "";
          
try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}
          
message.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
              
  if (storage) {
      userName.value = storage;
      userEmail.focus();
  } else {
      userName.focus();
  }                           
});
          
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
          
form.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
          localStorage.setItem("userName", userName.value);
      }
  }
});
          
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
      }
  }
});
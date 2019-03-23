var messageBuy = document.querySelectorAll(".buy");
var popupBuy = document.querySelector(".modal-cart");
var closeBuy = popupBuy.querySelector(".modal-close");

for (var i = 0; i <= messageBuy.length; i++) {
    messageBuy[i].addEventListener("click", function(evt){
        evt.preventDefault();
        popupBuy.classList.add("modal-show");		
    })
};

closeBuy.addEventListener("click", function(evt){
    evt.preventDefault();
    popupBuy.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupBuy.classList.contains("modal-show")) {
          popupBuy.classList.remove("modal-show");          
      }      
  }
});
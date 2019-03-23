var mesMap = document.querySelector(".button-map");
var popMap = document.querySelector(".modal-map");
var closeMap = popMap.querySelector(".modal-close");

mesMap.addEventListener("click", function(evt){
    evt.preventDefault();
    popMap.classList.add("modal-show")
});

closeMap.addEventListener("click", function(evt){
    evt.preventDefault();
    popMap.classList.remove("modal-show")
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popMap.classList.contains("modal-show")) {
          popMap.classList.remove("modal-show");          
      }      
  }
});

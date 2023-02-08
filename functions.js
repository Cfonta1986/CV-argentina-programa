var btnAbrirPopup = document.getElementById("foto-cv"),
    btnCerrarPopup = document.getElementById("btn-cerrar");

btnAbrirPopup.addEventListener("click", function(){
    popup.classList.add("active");
})

btnCerrarPopup.addEventListener("click", function(){
    popup.classList.remove("active");
});
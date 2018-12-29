var meusPacientes = document.querySelector(".meus-pacientes");

meusPacientes.addEventListener("dblclick", function (event) {
    console.log(event.target);
    event.target.classList.add("fadeOut");

    setTimeout(function () {
        event.target.classList.add("fadeIn");
        meusPacientes.textContent = "o/ Vinão Baitola o/";
    },500);

});
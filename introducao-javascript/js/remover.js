var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function (event) {
    //Ele pega quem foi clicado
    console.log(event.target);
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    //paiDoAlvo.remove();
   paiDoAlvo.classList.add("fadeOut");
   setTimeout(function () {
       paiDoAlvo.remove();
   },500)
});





// pacientes.forEach(function (paciente) {
//     // this sempre faz referencia a quem chamou a funçao
//     paciente.addEventListener("dblclick" , function () {
//         console.log("Ei eu to sendo clicado");
//         this.remove();
//     });
// });
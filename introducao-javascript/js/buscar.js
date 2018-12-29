var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
   console.log("Buscando essa porra")
    var json = new XMLHttpRequest()

   json.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

   json.addEventListener("load", function () {
       if(json.status == 200) {
       var respostas = json.responseText
       console.log(typeof respostas)

       var pacientes = JSON.parse(respostas);
       pacientes.forEach(function (paciente) {
           montaTabela(paciente)
       })
       }else{
           console.log("Deu ruim na hora de carregar o json")
       }
   })

   json.send()
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$(function () {


    $("#btn-enviar").on("click", function () {
        alert("enviar mensaje");
       
    });

    
    });
    $(".card-title").on("click", function () {
        $(".card-text").toggle("slow");
    })



   

var nombre = prompt("ingresa tu ciudad de origen");



var apellido = prompt("ingresa tu destino");





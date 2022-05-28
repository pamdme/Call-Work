// Preparando os elementos DOM para ser manipulados pelo JavaScript
let hour = document.getElementById("hora_trabalho");
let hour_price = document.getElementById("valor_hora");
let total_price = document.getElementById("valor_total");
let service_price = document.getElementById("custo_servico");
let payment = document.getElementById("receber");
let hide = document.getElementById("hidden");
 
// Impede que o usuário insira algum valor no campos custo de arrecadação e no campo que informa o valor a receber
window.onload = function() {
    service_price.readOnly = true;
    payment.readOnly = true;
}


// calcula e atualiza os campos de acordo com o valor inserido (horas trabalhadas)
hour.addEventListener("keyup", ()=>{
    if (isNaN(hour.value)){
        hide.style.display = "block";
    }else{
        hide.style.display = "none";

        total_price.value = hour.value * hour_price.value;
        service_price.value = total_price.value * 0.3;
        payment.value = total_price.value - service_price.value;
    }
});

// calcula e atualiza os campos de acordo com o valor inserido (valor da hora)
hour_price.addEventListener("keyup", ()=>{
    if (isNaN(hour_price.value)){
        hide.style.display = "block";
    }else{
        hide.style.display = "none";

        total_price.value = hour.value * hour_price.value;
        service_price.value = total_price.value * 0.3;
        payment.value = total_price.value - service_price.value;
    }
});

// calcula e atualiza os campos de acordo com o valor inserido (preço total) 
total_price.addEventListener("keyup", ()=>{
    if(isNaN(total_price.value)){
        hide.style.display = "block";
    }else{
        hide.style.display = "none";

        hour.value = total_price.value / hour_price.value;
        service_price.value = total_price.value * 0.3;
        payment.value = total_price.value - service_price.value;
    }
});
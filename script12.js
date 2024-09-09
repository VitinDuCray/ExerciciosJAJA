let distancia = parseInt(prompt("Digite a distância em Km:"))
let tempo = parseInt(prompt("Digite o tempo em horas:")) 

if (tempo > 0) {
    let velocidadeMedia = distancia / tempo;   
    alert("A velocidade média é: " + velocidadeMedia + " km/h");
} else {
    alert("O tempo deve ser maior que zero.");
}

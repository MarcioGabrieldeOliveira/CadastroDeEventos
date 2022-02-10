let NomedoEvento = "Reunião de Emergência";
let DataAtual = new Date();
let DataDoEvento = new Date(2022, 02, 10)
let participante = "Douglas"
let Idade = 18
let contadora = 0;
let Palestrantes = ["Rosália", "Gabrieli", "Gabriel"]
let Participantes = ["Márcio", "Laura", "José"]

console.log("Nome do Evento: " + NomedoEvento)
if (DataDoEvento > DataAtual) {
    console.log("Data para criação do evento é válida")
} else {
    console.log("Data para criação do evento é inválida")
}

if (Idade >= 18) {
    //    Participantes.push(participante)
    
} else {
    console.log("Desculpe, Você não possui idade suficiente!")
}

if (Participantes.length < 100) {
    console.log("(Cadastrado!)")
} else {
    console.log("(Lista Cheia)")
}

console.log("--------Palestrantes--------")
for (let contadora = 0; contadora < Palestrantes.length; contadora++) {
    console.log(Palestrantes[contadora])
}

console.log("--------Participantes--------")
for (let contadora = 0; contadora < Participantes.length; contadora++) {
    console.log(Participantes[contadora])
}


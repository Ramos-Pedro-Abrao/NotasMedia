let disciplina = document.getElementById('disciplina');
let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');


//dados de entrada
function calculo(){
    if(disciplina.value === "" || nota1.value === "" || nota2.value === "" || nota3.value === ""){
    alert("Preencha todos os campos para poder avançar!");
    return;
} if(nota1.value < 0 || nota1.value > 20 || nota2.value < 0 || nota2.value > 20 || nota3.value < 0 || nota3.value > 20){
    alert("As notas têm de estar dentro do intervalo de 0 a 20!");
    return;
}
let not1 = Number(nota1.value);
let not2 = Number(nota2.value);
let not3 = Number(nota3.value);
let classe = "";
if(calculoDaMedia(not1, not2, not3) < 9.5) classe = "vermelho";

else if(calculoDaMedia(not1, not2, not3) >= 9.5 && calculoDaMedia(not1, not2, not3) < 13.5) classe = "amarelo";

else{ classe = "verde";}

function calculoDaMedia(not1, not2, not3){
    let media = (not1 + not2 + not3) / 3;
    return media.toFixed(2);
}

document.getElementById('disciplinaArea').innerHTML += `
    <div class="disciplinaBox ${classe}">
        <h2 class="disciplinaResult">${disciplina.value}</h2>
        <p class="nota">1ª nota: ${not1}</p>
        <p class="nota">2ª nota: ${not2}</p>
        <p class="nota">3ª nota: ${not3}</p>
        <h3 class="media">Média: ${calculoDaMedia(not1, not2, not3)}</h3>
        <button class="deleteBtn" onclick="this.parentElement.remove()">Excluir</button>
        
    </div>
`;
if(calculoDaMedia(not1, not2, not3) < 9.5){
    alert("Você precisa melhorar as suas notas.");
    document.querySelector('.disciplinaBox').classList.add('reprovado');
} else if(calculoDaMedia(not1, not2, not3) >=9.5 && calculoDaMedia(not1, not2, not3) < 9.5){}
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculo();
    });
}

document.getElementById('calcBtn').addEventListener('click', (e)=>{
    calculo();
    e.preventDefault();
});
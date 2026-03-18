let disciplina = document.getElementById('disciplina');
let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');
//dados de entrada
function calculo(){
let not1 = Number(nota1.value);
let not2 = Number(nota2.value);
let not3 = Number(nota3.value);
function calculoDaMedia(not1, not2, not3){
    let media = (not1 + not2 + not3) / 3;
    return media.toFixed(2);
}

document.getElementById('disciplinaArea').innerHTML += `
    <div class="disciplinaBox">
        <h2 class="disciplinaResult">${disciplina.value}</h2>
        <p class="nota">1ª nota: ${not1}</p>
        <p class="nota">2ª nota: ${not2}</p>
        <p class="nota">3ª nota: ${not3}</p>
        <h3 class="media">Média: ${calculoDaMedia(not1, not2, not3)}</h3>
    </div>
`;
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
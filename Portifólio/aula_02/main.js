let res = document.querySelector("section#result");
let computador = 0;
let jogador = 0;

function sortear() {
    let min = 1;
    let max = 500;
    let dif = max - min;
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)

}

function jogar() {
    jogador = Number(window.prompt("Qual é o seu palpite?"));
    if(jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é MAIOR!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é MENOR!</P>`
    } else {
        res.innerHTML += `<p>PARABÉNS! Você acertou!</p>`
    }
}
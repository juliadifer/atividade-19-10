let jogos = [
    "Minecraft",
    "The Sims",
    "Roblox",
    "Terraria",
    "Stardew Valley"
];

let jogoPesquisa = prompt("Digite o nome de um jogo:");

let jogoDigitado = jogos.filter(nome =>
    nome.toUpperCase().includes(jogoPesquisa.toUpperCase())
);

console.log(jogoDigitado);

if (jogos.includes(jogoDigitado[0]) && jogoDigitado.length > 0) {
    console.log("O jogo está na lista");
} else {
    console.log("O jogo não está na lista");
}
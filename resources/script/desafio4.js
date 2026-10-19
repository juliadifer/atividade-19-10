let livros = ["O Pequeno Principe", "Dom Casmurro", "Crepusculo", "O Diario De Um Banana", "Bambi"];

let livroPesquisa = prompt("Digite o livro desejado:");
let livroPosicao = livros.indexOf(livroPesquisa);

if (livroPosicao == -1) {
    alert("Livro não encontrado");
} else {
    alert("Livro encontrado na posição " + livroPosicao);
}

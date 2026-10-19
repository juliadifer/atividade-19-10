let tarefas = [
    "Estudar HTML",
    "Estudar CSS",
    "Praticar JavaScript",
    "Estudar Laravel",
    "Revisar conteúdo"
];

console.log("Lista antes das alterações:");
console.log (tarefas);

tarefas.splice(1,1);

tarefas.splice (2, 1, "Estudar inglês");

console.log("Lista depois das alterações:");
console.log(tarefas);
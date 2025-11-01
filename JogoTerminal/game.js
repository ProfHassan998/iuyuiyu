console.log("Bem vindo ao jogo do 2°C!")
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) =>{
    rl.question('Qual é a sua idade? ', (idade)=>{
        console.log("Bem vindo, " + nome + " sua idade é: " + idade);
        rl.close();
    });    
});
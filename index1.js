const nomeCliente = prompt('Qual é o seu nome?');
alert(`seu nome é: ${nomeCliente}`);
const idade = prompt('Quantos anos você tem?');
alert(`Você tem ${idade} anos de idade`);

const anoAtual = Number(2022);
const ano = prompt('Ano no qual você quer saber quantos anos terá');
const meioTempo = ano - anoAtual;
const idadeAno = Number(idade) + Number(meioTempo);
alert(`Sua idade em ${ano} será ${idadeAno}`);
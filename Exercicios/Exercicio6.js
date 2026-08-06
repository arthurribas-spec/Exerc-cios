const idades = [12, 18, 25, 40, 16, 22];

const menores = idades.filter(idade => idade < 18);
const maiores = idades.filter(idade => idade >= 18);

console.log("Menores de 18:", menores);
console.log("Maiores ou iguais a 18:", maiores);
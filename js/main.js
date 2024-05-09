const km = prompt('Quanti km vuoi percorrere?');
const age = prompt('Indica la tua età');

let price = km * 0.21

// va applicato uno sconto del 20% per i minorenni if age < 18
// va applicato uno sconto del 40 % per gli over 65 if age > 65

if (age < 18) {
    price = (price * 0.8);
} else if (age > 65) {
    price = (price * 0.6);
}

price = price.toFixed(2);

console.log(price);
document.getElementById('my_id').innerHTML = `${price}€`;
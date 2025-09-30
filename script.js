
const nom = "Kelite";
let age = 17;
console.log(nom);
console.log(age);

if (age < 13) {
    console.log("Accès interdit aux moins de 13 ans.");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Vous pouvez accéder à la section adulte.");
}
    for (let i = 1; i < 11; i++) {
    console.log("7x" + i + "=" +7*i);
}

const saluer = (prenom) => {
    return "bonjour"  + prenom + " ! comment vas-tu ?";

   
};

saluer("Kelite");

console.log(saluer("Kelite"));

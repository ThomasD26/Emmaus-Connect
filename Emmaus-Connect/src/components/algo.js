function calculerValeurTelephone(
  ram,
  stockage,
  etatGlobal,
  etatEcran,
  capBatterie,
  chargeur
) {
  // Valeurs attribuées pour chaque élément
  const valeursRam = {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5:50,
    6:60,
    7:70,
    8:80,
  };
  const valeursStockage = {
    8: 1,
    16: 2,
    32: 3.5,
    64: 5,
    128: 10,
    256: 15,
    512: 20,
  };
  const valeursEtatglobal = {
    mauvais: 0,
    correct: 10,
    bon: 15,
    excellent: 25,
    neuf: 30,
  };
  const valeursEtatecran = {
    Rayé: 0,
    correct: 10,
    bon: 15,
    excellent: 25,
  };
  const valeursCapbatterie = {
    mauvais: 0,
    correct: 10,
    bon: 15,
    excellent: 25,
  };
  const valeursChargeur = {
    oui: 10,
    non: -10,
  };

  // Calcul des valeurs pour la RAM et le stockage
  const valeurRam = valeursRam[ram];
  const valeurStockage = valeursStockage[stockage];
  const valeurEtatGlobal = valeursEtatglobal[etatGlobal];
  const valeurEtatEcran = valeursEtatecran[etatEcran];
  const valeurCapbatterie = valeursCapbatterie[capBatterie];
  const valeurChargeur = valeursChargeur[chargeur];

  // Calcul de la valeur totale
  let valeurTotale =
    valeurRam +
    valeurStockage +
    valeurEtatGlobal +
    valeurEtatEcran +
    valeurCapbatterie +
    valeurChargeur;

  // Attribution de la lettre correspondante en fonction de la valeur totale
  let lettreValeurTotale;
  if (valeurTotale >= 40 && valeurTotale <= 100) {
    lettreValeurTotale = "40 to 80€";
  } else if (valeurTotale > 101 && valeurTotale <= 175) {
    lettreValeurTotale = "80 to 150€";
  } else if (valeurTotale > 176) {
    lettreValeurTotale = "150 to 250€";
  } else if (valeurTotale > 220) {
    lettreValeurTotale = "+250€";
  }


  return lettreValeurTotale;
}

// Exemple d'utilisation de la fonction
const ram = 4; // en Go
const stockage = 128; // en Go
const etatGlobal = "bon";
const etatEcran = "bon";
const capBatterie = "excellent";
const chargeur = "oui";

const valeurTelephone = calculerValeurTelephone(
  ram,
  stockage,
  etatGlobal,
  etatEcran,
  capBatterie,
  chargeur
);
console.log("La valeur du téléphone est de " + valeurTelephone);

export default calculerValeurTelephone;

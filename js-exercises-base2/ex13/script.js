
document.getElementById("imc").addEventListener("click", () => {
    function calculIMC(){
        let poids = prompt("Quel est votre poids ?");
        let taille = prompt("Quel est votre taille ?");
        let imc = (poids / (taille *taille));
        let imcRound = (Math.round(imc * 100) / 100);
        if(imcRound <= 16,5){
            alert("Votre IMC est de : " + imcRound + ". Vous êtes en état de dénutrition ou famine");
        }
            else if (imcRound > 16,5 && imcRound < 18,5){
                alert ("Votre imc est de : " +imcRound + ". Vous êtes en état de maigreur");
            }
            else if (imcRound >= 18,5 && imcRound < 25){
                alert ("Votre imc est de : " +imcRound + ". Vous êtes en corpulence normale");
            }
            else if (imcRound >= 25 && imcRound < 30){
                alert ("Votre imc est de : " +imcRound + ". Vous êtes en surpoids");
            }
            else if (imcRound >= 30 && imcRound < 35){
                alert ("Votre imc est de : " +imcRound + ". Vous êtes en obésité modérée");
            }
            else if (imcRound >= 35 && imcRound < 40){
                alert ("Votre imc est de : " +imcRound + ". Vous êtes en obésité sévère");
            }
            else if (imcRound >= 40){
                alert ("Votre imc est de : " +imcRound + ". Vous êtes en obésité morbide");
        }
    }
    calculIMC();

});

// Exercice 13 - Calcul de l'IMC

// L'IMC ou Indice de Masse Corporelle est utilisé pour évaluer les risques sur la santé liés
// au surpoids chez l'adulte. Il se calcule en divisant le poids exprimé en kg par le carré de
// la taille exprimée en mètre.

// Par exemple :
// - Une personne pesant 95 kg et mesurant 1,81 m a un IMC de 95/(1.81*1.81)= environ 29,0
// - Une personne pesant 48 kg et mesurant 1,69 m a un IMC de 48/(1.69*1.69)= environ 16,8
// - Une personne pesant 61 kg et mesurant 1,57 m a un IMC de 61/(1.57*1.57)= environ 24,7

// En fonction de la valeur obtenue, on peut estimer la corpulence de la manière suivante :

// - moins de 16,5 : dénutrition ou famine
// - 16,5 <= IMC < 18,5 : maigreur
// - 18,5 <= IMC < 25 : corpulence normale
// - 25 <= IMC < 30 : surpoids
// - 30 <= IMC < 35 : obésité modérée
// - 35 <= IMC < 40 : obésité sévère
// - plus de 40 : obésité morbide

// Créer un bouton. Au click de ce bouton, lancer la fonction calculIMC.

// Cette fonction va demander le poids et la taille, calculer l'IMC, ensuite l'afficher avec 2 décimales
// et enfin afficher un message disant dans quelle catégorie de corpulence on se situe.

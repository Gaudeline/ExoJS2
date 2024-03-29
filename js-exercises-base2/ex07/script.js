document.getElementById("switch").addEventListener("click", () => {
    function faireChoix(){
        choix=prompt("Choisir 1, 2 ou 3");
        switch(choix){
            case "1":
                alert("Merci");
                break;
            case "2":
                alert("Bonjour");
                break;
            case "3":
                alert("Au revoir");
                break;
            default:
                alert("Pardon, que voulez-vous ?")
        }
    }
    faireChoix();
});

// Exercice 7 - utilisation de switch

// Créer un bouton. Au click de ce bouton, lancer la fonction faireChoix().

// Cette fonction demande à l'utilisateur au moyen d'un prompt() de choisir entre 1, 2 ou 3.

//     s'il choisit 1, on affiche avec une boîte d'alerte "1. Merci"
//     s'il choisit 2, on affiche avec une boîte d'alerte "2. Bonjour"
//     s'il choisit 3, on affiche avec une boîte d'alerte "3. Au revoir"
//     s'il choisit autre chose, on affiche avec une boîte d'alerte "Pardon, que voulez-vous ?"

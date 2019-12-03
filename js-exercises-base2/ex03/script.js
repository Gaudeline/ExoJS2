let a = 3;
let b = 2;
function triple(X){
    // x = x * 3;
    return x*3;
}

document.getElementById("affiche").addEventListener("click", () => {
    function affiche(){
        // resulta =
        // resultb =
        // alert(resulta);
        // alert(resultb);
        let check = a*3;
        let test = b*3;
        alert(check);
        alert(test);
    }
    affiche();
});



// Exercice 3 - écriture d'une fonction avec arguments

// Créez deux variables globales a et b, initialisées respectivement à 3 et à 2.
// Créez une fonction triple prenant un argument x et renvoyant le résultat de la multiplication de x par 3
// Créez une fonction affiche, appelée au clic sur un bouton, qui affiche dans des boîtes d'alerte successivement
//  le résultat de triple appliquée à a, puis à b.

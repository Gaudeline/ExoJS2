
function surfaceCercle(){
    r=prompt("Rayon du cercle?");
    surface=Math.PI * (r * r);
    alert("La surface est de : " + surface);
}
document.getElementById("surface").addEventListener("click", () => {
    surfaceCercle();
});

// Créer une fonction qui :

//     demande la saisie d'un rayon;
//     retourne la surface du cercle de ce rayon.

// Afficher ensuite le résultat de l'appel à cette fonction en cliquant sur un bouton.

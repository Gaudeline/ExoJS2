document.getElementById("valider").addEventListener("click", () => {
    let point = document.getElementById("pointure").value;
    let year = document.getElementById("annee").value;
    
    function resultat(point, year) {
      return ((((point * 2) + 5) * 50) - year) + 1766;
    }
    alert (resultat);

});
// function carré(nombre) {
//     return nombre * nombre;
//   }




// Multiplier la pointure par 2
// Ajouter 5 au résultat
// Multiplier le tout par 50
// Soustraire l’année de naissance
// Ajouter au tout 1766

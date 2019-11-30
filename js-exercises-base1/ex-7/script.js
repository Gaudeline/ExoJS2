document.getElementById("valider").addEventListener("click", () => {
    let point = document.getElementById("pointure").value;
    let year = document.getElementById("annee").value;
    
    function resultat() {
      mult = point * 2;
      ajout = mult + 5;
      remult = ajout * 50;
      sous = remult - year;
      result = sous + 1766;
    }
    alert (resultat);

});
// largeur=prompt("Largeur du rectangle?");
// longueur=prompt("Longueur du rectangle?");
// surface=largeur * longueur;
// alert("La surface est de : " + surface);
// Multiplier la pointure par 2
// Ajouter 5 au résultat
// Multiplier le tout par 50
// Soustraire l’année de naissance
// Ajouter au tout 1766

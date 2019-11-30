document.getElementById("day").addEventListener("click", () => {
    function jourDeLaSemaine(){
        let aujourdhui = new Date()
        let jourSemaine = aujourdhui.getUTCDay()
        switch(jourSemaine){
            case 0:
                alert("Dimanche");
                break;
            case 1:
                alert("Lundi");
                break;
            case 2:
                alert("Mardi");
                break;
            case 3:
                alert("Mercredi");
                break;
            case 4:
                alert("Jeudi");
                break;
            case 5:
                alert("Vendredi");
                break;
            case 6:
                alert("Samedi");
                break;
        }
    }
    jourDeLaSemaine();

});




// Exercice 8 - utilisation de switch et de l'objet date

// Créer un bouton. Au click de ce bouton, lancer la fonction jourDeLaSemaine().
// Cette fonction détermine le jour de la semaine et affiche selon le cas dimanche, lundi, mardi... etc. jusqu'à samedi.

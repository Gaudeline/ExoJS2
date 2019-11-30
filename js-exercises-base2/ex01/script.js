document.getElementById("surface").addEventListener("click", () => {
    function surfaceRectangle(){
        largeur=prompt("Largeur du rectangle?");
        longueur=prompt("Longueur du rectangle?");
        surface=largeur * longueur;
        alert("La surface est de : " + surface);
    }
    surfaceRectangle();

});
document.getElementById("perim").addEventListener("click", () => {
    function periRectangle(){
        largeur=prompt("Largeur du rectangle?");
        longueur=prompt("Longueur du rectangle?");
        peri=largeur * 2 + longueur *2;
        alert("Le périmètre est de : " + peri);
    }
    periRectangle();

});

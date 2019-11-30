document.getElementById("valider").addEventListener("click", () => {
    let val1 = document.getElementById("premier_nombre").value;
    let val2 = document.getElementById("deuxieme_nombre").value;

    alert(val1 % val2);
});

// let val1 = document.getElementById("premier_nombre").value;
// let val2 = document.getElementById("deuxieme_nombre").value;
//         alert(value = Math.trunc(val1)*val2);
document.getElementById("valider").addEventListener("click", () => {
        let val1 = document.getElementById("premier_nombre").value;
        let val2 = document.getElementById("deuxieme_nombre").value;

        alert(Math.trunc(val1)*val2);
});

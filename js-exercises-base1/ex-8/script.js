document.getElementById("valider").addEventListener("click", () => {
    let val = document.getElementById("age").value;
    if(val >= "18"){
        alert("Vous êtes majeur");
    }
    else {
        alert("Vous êtes mineur");
    }
});

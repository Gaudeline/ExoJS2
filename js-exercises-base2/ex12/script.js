document.getElementById("push").addEventListener("click", () => {
    function conversionTemperature(){
        let menu = prompt("Choisissez le type de conversion souhaité en écrivant le numéro correspondant :\n1 : Fin du programme\n2 : De Celsius vers Fahrenheit\n3 : De Celsius vers Kelvin\n3 : De Fahrenheit vers Celsius\n4 : De Fahrenheit vers Kelvin\n5 : De Kelvin vers Celsius\n6 : De Kelvin vers Fahrenheit");
        let temp = prompt("Entrez la température à convertir : ")

        switch(menu){
            case "1":
                
                break;
            case "2":
                alert ((temp * 9/5) + 32 + " °F");
                break;
            case "3":
                alert (temp + 273,15 + " K");
                break;
            default:
                alert ((temp - 32) / (9/5) + " °C");
            case "4":
                alert ((temp - 32) * (5/9) + 273,15 + " K");
                break;
            case "5":
                alert (temp - 273,15 + " °C");
                break;
            case "6" :
                alert ((temp * 9/5) - 459,67 + " °F");
                break;
        }
    }
    conversionTemperature();

});
// var cTemp = celsius;
// var cToFahr = cTemp * 9 / 5 + 32;
// var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//   console.log(message);


// Exercice 12 - Conversion de température Celsius, Fahrenheit et Kelvin

// Créer un bouton. Au click de ce bouton, on lance la fonction conversionTemperature.

// L'utilisateur choisit d'abord dans le menu affiché quel type de conversion il souhaite, il indique son choix en
//indiquant le numéro correspondant dans le menu au moyen d'un prompt javascript

// Ensuite, un second prompt va lui demander la température à convertir et afficher le résultat dans une boîte d'alerte.

// Le menu :

//     Fin du programme
//     De Celsius vers Fahrenheit
//     De Celsius vers Kelvin
//     De Fahrenheit vers Celsius
//     De Fahrenheit vers Kelvin
//     De Kelvin vers Celsius
//     De Kelvin vers Fahrenheit

// Pour calculer la conversion, utilisez les formules suivantes :

// [°F] = ([°C] x 9/5) + 32
// [K] = [°C] + 273,15
// [°C] = ([°F] - 32) / (9/5)
// [K] = (([°F] - 32) x (5/9)) + 273,15
// [°C] = [K] - 273,15
// [°F] = ([K] x 9/5) - 459,67

// où [K] représente la température en kelvin
// où [°F] représente la température en degrés Fahrenheit
// où [°C] représente la température en degrés Celsius

// Exemples de valeurs à tester :

//     0 K = -273,15 °C = -459,67 °F
//     283,15 K = 10 °C = 50 °F
//     273,15 K = 0 °C = 32 °F
//     373,15 K = 100 °C = 212 °F
//     233,15 K = -40 °C = -40 °F

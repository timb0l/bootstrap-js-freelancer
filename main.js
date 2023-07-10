// L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
// - YHDNU32
// - JANJC63
// - PWKCN25
// - SJDPO96
// - POCIE24
    let disCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


function estimateOffer(a){
    a.preventDefault();
    console.log("Prevent Default");

    let hours = parseInt(document.getElementById("inputHours").value);
    let work = parseInt(document.getElementById("inputWork").value);
    let discount = document.getElementById("inputCode").value;

    let price = 0;

// // Il prezzo orario per una commissione varia in questo modo:
// - se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
// - se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
// - se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora


    switch(work){
        case 1:
            price = 33.6 * hours;
            break;
        case 2:
            price = 15.3 * hours;
            break;
        case 3:
            price = 20.5 * hours;
            break;  
    }

//discode
    let discountInput = false;
        for(let i = 0; i < disCode.length; i++){
            if(disCode[i] == discount){
                discountInput = true;
                break;
                }   
        }
    if ((disCode != "")&& !discountInput){
        alert("Invalid Code");

        }
    if (discountInput){
        price = 0.75 * price;
        }

    price = price.toFixed(2);

    document.getElementById("price").innerHTML = "Estimate price is: " + price;

}
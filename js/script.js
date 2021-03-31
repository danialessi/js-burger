// tramite il pulsante 'calcola' devo fare in modo di calcolare il prezzo finale del prodotto tenendo conto dei prodotti aggiunti selezionati e di eventuali coupon 
// attivo il pulsante calculate 

// assegno variabile button a pulsante html 
var button = document.getElementById('calculate');

// metto in ascolto pulsante e genero codice al suo interno 
button.addEventListener('click', function(){
    
    var finalPrice = 50;

    // genero variabile, selezionando le classi degli elementi html, per lavorare con la funzione dei checkbox tutti insieme (risultato --> array)
    var addChecked = document.getElementsByClassName('add');

    // inserisco un ciclo per leggere ogni elemento dell'array di elementi generata 
    for ( var i = 0; i < addChecked.length; i++) {
        var thisAddChecked = addChecked[i];
        // console.log(thisAddChecked.checked);
        
        var thisAddPrice = parseInt(thisAddChecked.value);
        // console.log(thisAddPrice);
        
        if (thisAddChecked.checked == true) {
            finalPrice = finalPrice + thisAddPrice;
        }
    
    }
    
    // assegno variabile coupon all'elemento html 
    var coupon = document.getElementById("coupon");

    // assegno variabili agli sconti 
    var discount10 = (finalPrice * 10) / 100;

    var discount40 = (finalPrice * 40) / 100;
    
    // variabile per elemento html discount 
    var discount = document.getElementById("discount");
    var discountText = document.getElementById("discount-text");
    // console.log(discount);

    var total = 0;
    // genero condizioni per codici sconto 
    if (coupon.value === "sconto10") {
        total = finalPrice - discount10;
        discount.innerHTML = "-10%";
        discountText.innerHTML = "Discount";
        
    } else if (coupon.value === "sconto40") {
        total = finalPrice - discount40;
        discount.innerHTML = "-40%";
        discountText.innerHTML = "Discount";
        
    } else {
        total = finalPrice;
    }
    
    // popolo il footer con nome panino
    var choice = document.getElementById("choice");
    choice.innerHTML = document.getElementById("burger").value;

    // assegno il prezzo finale all'elemento html 
    document.getElementById("price").innerHTML = finalPrice + " $";

    // assegno il totale all elemento html 
    document.getElementById("total").innerHTML = total + " $";
});
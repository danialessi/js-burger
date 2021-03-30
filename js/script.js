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
    console.log(finalPrice);

    // assegno il risultato all'elemento html 
    document.getElementById("final-price").innerHTML = finalPrice + " $";
})
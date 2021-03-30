// tramite il pulsante calcola devo fare in modo di calcolare il prezzo finale del prodotto tenendo conto dei prodotti aggiunti selezionati e di eventuali coupon 

// genero variabile per il prezzo finale che di default è 50$ 
var finalPrice = 50;

// attivo il pulsante calculate 

// assegno variabile button a pulsante html 
var button = document.getElementById('calculate');
console.log(button);

// metto in ascolto pulsante e genero codice al suo interno 
button.addEventListener('click', function(){
    
    // genero variabile per lavorare con la funzione dei checkbox tutti insieme 
    var addChecked = document.getElementsByClassName('add');
    console.log(addChecked);

    // inserisco un ciclo per leggere ogni elemento dell'array di elementi generata 
    for ( var i = 0; i < addChecked.length; i++) {
        var thisAdd = addChecked[i];
        console.log(thisAdd);
    }
})
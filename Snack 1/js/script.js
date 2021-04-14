// --------------------------------
// Snacks JS - Esercizio 6
// --------------------------------
// 1) Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// 2) Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
// --------------------------------
$(document).ready(function() {
    // 
    // --------------------------------
    // 1) Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    // 
    const myArray = [
        {
            nome: 'Raptor',
            peso: 4
        },
        {
            nome: 'Razor',
            peso: 5
        },
        {
            nome: 'Feather',
            peso: 2
        },
        {
            nome: 'Wind',
            peso: 3.1
        },
        {
            nome: 'Extreme',
            peso: 6
        },
        {
            nome: 'Bianchi',
            peso: 3.5
        },
        {
            nome: 'Ducati',
            peso: 4.2
        },
        {
            nome: 'Venom',
            peso: 3.7
        },
        {
            nome: 'Blaze',
            peso: 4.3
        },
        {
            nome: 'Sharp',
            peso: 3.3
        }
    ];
    // 
    // --------------------------------
    // 2) Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
    // 
    // Destructuring dell'oggetto risultante dalla funzione alla quale abbiamo passato l'array in questione.
    // 
    const {nome, peso} = comparePeso(myArray);
    // 
    // Assegnamo un template per la stampa usando le due costanti ottenute dal destructuring.
    // 
    const myPrint = `${nome} è la bicicletta più leggera con un peso di ${peso}kg.`;
    // 
    // Stampiamo il risultato.
    // 
    $('main').append('<h2>' + myPrint + '</h2>');
    // 
    // --------------------------------
    // Function that determines the element with lowest "peso" property.
    // 
    function comparePeso(list) {

        let elementLowPeso = list[0];

        for ( let i = 0; i < list.length; i++) {
            if (elementLowPeso.peso > list[i]['peso']) {
                elementLowPeso = list[i];
            }
            
        }

        return elementLowPeso;
    }
});

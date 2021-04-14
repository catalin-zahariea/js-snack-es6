// --------------------------------
// Snacks 2 JS - Esercizio 6
// --------------------------------
// 1) Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// 2) Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 3) Generare numeri random al posto degli 0 nelle proprietà: puntiFatti e falliSubiti.
// 4) Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
// solo nomi e falli subiti e stampiamo tutto in console.
// --------------------------------
$(document).ready(function() {
    // 
    // --------------------------------
    // 1) Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    // 2) Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    // 
    const myArray = [
        {
            nome: 'Juventus',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'Roma',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'Inter',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'AC Milan',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'Lazio',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'Sampdoria',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'Ascoli',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'Pisa',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'Sassuolo',
            puntiFatti: 0,
            falliSubiti: 0
        },
        {
            nome: 'Napoli',
            puntiFatti: 0,
            falliSubiti: 0
        }
    ];
    // 
    // --------------------------------
    // 3) Generare numeri random al posto degli 0 nelle proprietà: puntiFatti e falliSubiti.
    // 
    // Ciclo forEach(). Per ogni elemento dell'array inseriamo un valore casuale alle proprietà puntiFatti e falliSubiti.
    // 
    myArray.forEach(function(elemento) {
        elemento.puntiFatti = Math.floor(Math.random() * 100) + 1;
        elemento.falliSubiti = Math.floor(Math.random() * 10) + 1;
    });
    // 
    console.log('Il primo array con le 3 proprietà:')
    console.log(myArray);
    // 
    // --------------------------------
    // 4) Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
    // solo nomi e falli subiti e stampiamo tutto in console.
    // --------------------------------
    // Declare my secondArray.
    const secondArray = [];
    // --------------------------------
    // Iterate my function for each array element.
    myArray.forEach(function(elemento) {
        // --------------------------------
        // Destructure elemento.
        const {nome, falliSubiti} = elemento;
        // --------------------------------
        // Declare a new object with desidered 2 properties.
        const newObj = {
            nome,
            falliSubiti
        }
        // --------------------------------
        // Push newObj into secondArray.
        secondArray.push(newObj);
    });
    // 
    console.log('Il secondo array con solo 2 proprietà:')
    console.log(secondArray);
});

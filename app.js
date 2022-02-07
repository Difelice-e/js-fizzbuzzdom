const container = document.getElementById("main_container");  // selezioniamo il container
// console.log(container);

for (let i = 1; i < 101; i++) {  // loop di conteggio numeri 1-100
    const squareWrapper = document.createElement("div");  // creazione del div quadrato
    container.append(squareWrapper);  // inserimento del div nel container 
    squareWrapper.classList.add("number_wrapper");  // aggiunta classe generale per i quadrati
    // console.log(i);

    if (i % 15 === 0) {  // controllo se il numero è divisibile per 15 
        squareWrapper.classList.add("fizzbuzz_wrapper");  // aggiunta classe fizzbuzz
        squareWrapper.append("fizzbuzz");  // inserimento scritta buzzfizz
    }
        else if (i % 3 === 0) {  // controllo se il numero è divisibile per 3
            squareWrapper.classList.add("fizz_wrapper");  // aggiunta classe fizz
            squareWrapper.append("fizz");  // inserimento scritta buzz
            
        } else if (i % 5 === 0) {  // controllo se il numero è divisibile per 5 
            squareWrapper.classList.add("buzz_wrapper");  // aggiunta classe buzz
            squareWrapper.append("buzz");  // inserimento scritta buzz
        } else {
            squareWrapper.append(i);  // inserimento numero in caso di non buzz, fizz o buzzfizz
        }
  
}



















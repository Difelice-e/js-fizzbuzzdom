const container = document.getElementById("main_container");
console.log(container);

for (let i = 1; i < 101; i++) {
    const squareWrapper = document.createElement("div");
    container.append(squareWrapper);
    squareWrapper.classList.add("number_wrapper");
    
    console.log(i)
    if (i % 15 === 0) {
        squareWrapper.classList.add("fizzbuzz_wrapper")
        squareWrapper.append("fizzbuzz");
    }
        else if (i % 3 === 0) {
            squareWrapper.classList.add("fizz_wrapper")
            squareWrapper.append("fizz");
            
        } else if (i % 5 === 0) {
            squareWrapper.classList.add("buzz_wrapper")
            squareWrapper.append("buzz");
        } else {
            squareWrapper.append(i)
        }
  
}


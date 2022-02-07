const container = document.getElementById("main_container")
console.log(container)

for (let i = 1; i < 101; i++) {
    const squareWrapper = document.createElement("div");
    container.append(squareWrapper);
    squareWrapper.classList.add("number_wrapper")
    squareWrapper.append(i)

    console.log(i)
}

function drawnStars() {
    let rows= Number(document.getElementById("starsrow").value);
    let resultBox = document.getElementById("starResult");
    if( !rows|| rows<1) {
        document.getElementById("starResult").textContent= "Enter a number greater than 0!";
        resultBox.style.display = "block";
        return;
    }


let output = "";
for (let i=1; i <=rows; i++) {
    let line= "";
    for (let j=1; j<=i; j++) {
        line += "* ";
    }
    output += line + "\n";
}
document.getElementById("starResult").innerText= output;
resultBox.style.display = "block";
}
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







function drawnTable() {
    let table = Number(document.getElementById("tablenumber").value);
    let tablebox =document.getElementById("tableResult");
     
    if(!table){
        document.getElementById("tableResult").textContent= "Enter a valid number!";
        tablebox.style.display="block";
        return;
    }
    let output=""
    for(let i = 1; i<=10; i++){
        output += `${table} x ${i} = ${table*i}\n`
    }
    document.getElementById("tableResult").innerText= output;
    tablebox.style.display="block";
}








function showGrid() {
    let size = Number(document.getElementById("gridsize"). value);
    let gridbox = document.getElementById("gridResult");
    if(!size || size <1 ){
        document.getElementById("gridResult").innerText="Enter a number greater than 0!";
        gridbox.style.display="block";
        return;

    }
    let output = ""
    for(let row =1; row <= size; row++){
        let line = ""
    
        for(let col = 1; col <= row; col++) {
            line += (row * col).toString().padStart(4, " ");
        }
        output += line + "\n";
    }

        document.getElementById("gridResult").innerText= output;
        gridbox.style.display="block";
}
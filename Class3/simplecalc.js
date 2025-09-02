function simpleCalc() {
    //simple calculator using prompt and console.log
    let x = document.getElementById("simpleCalcX").value;
    let y = document.getElementById("simpleCalcY").value;
    const op = document.getElementById("simpleCalcOp").value;

    x = parseInt(x);
    y = parseInt(y);

    if (op === "+") {
        alert(x + " + " + y + " = " + (x + y));
    } else if (op === "-") {
        alert(x + " - " + y + " = " + (x - y));
    } else if (op === "*") {
        alert(x + " * " + y + " = " + (x * y));
    } else if (op === "/") {
        alert(x + " / " + y + " = " + (x / y));
    } else if (op === "%") {
        alert(x + " % " + y + " = " + (x % y));
    }  
}
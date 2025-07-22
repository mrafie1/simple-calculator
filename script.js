function addDigit (strNum) {

    // toggle negative num
    if (negativeVal) {
        negativeVal = false;
    }

    currNum += strNum;
    document.getElementById('display-number').innerText = currNum;
}

function addOperations (operation) {

    if (negativeVal) {
        total = 0;
        currNum = "";
        operations = [];
        document.getElementById('display-number').innerText = "Error";
    
        oN = false;
        return;
    }

    // check previous calculation being continued
    else if (oN) {
        operations.push(total);
        operations.push(operation);
        oN = false;
        document.getElementById('display-number').innerText = operation;

        return;
    }


    else if (currNum == "") {
        // check inputting negative num

        if (operation == "-") {
            currNum = '-';
            document.getElementById('display-number').innerText = operation;
            negativeVal = true;
            return;
        }

        console.log("error!");
        declareError();
        return;
    }

    operations.push(currNum);
    currNum = "";
    if (operation == "=") {
        compute();
    } else {
        operations.push(operation);
        document.getElementById('display-number').innerText = operation;
    }
}

function compute () {

    if (negativeVal) {
        total = 0;
        currNum = "";
        operations = [];
        document.getElementById('display-number').innerText = "Error";
    
        oN = false;
        return;
    }

    else if (currNum == "") {
        console.log("error!");
        declareError();
        return;
    }
    operations.push(currNum);

    //
    console.log(operations);

    total = Number(operations[0]);
    var i = 1;
    while (i < operations.length) {

        var tempNum = Number(operations[i + 1]);
            
        switch(operations[i]) {
            case "+":
                total += tempNum;
                break;
            case "-":
                total -= tempNum;
                break;
            case "x":
                total *= tempNum;
                break;
            case "/":
                total /= tempNum;
                break;
        }

        i += 2;
    

    }
    document.getElementById('display-number').innerText = total;
    currNum = "";
    operations = [];

    oN = true;
}

function declareError () {
    total = 0;
    currNum = "";
    operations = [];
    document.getElementById('display-number').innerText = "Error";
    
    oN = false;
}

function clearEntry () {
    total = 0;
    currNum = "";
    operations = [];
    document.getElementById('display-number').innerText = 0;

    oN = false;
}



var total = 0;
var currNum = "";
var operations = [];
var mathOperations = {
    '+': '',
    '-': '',
    'x': '',
    '/': '',
}
var oN = false;
var negativeVal = false;

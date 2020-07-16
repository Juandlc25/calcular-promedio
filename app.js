const plusBtn = document.querySelector(".plus-icon");
const closeBtn = document.querySelector(".close-btn");
const tableHead = ["Materia", "Nota", "Num de creditos"];

// creamos la tabla y la inicializamos apenas cargue el body del html

function createTable() {
    let empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable');
    let tr = empTable.insertRow(-1);

    for (let i = 0; i < tableHead.length; i++){
        let th = document.createElement('th');
        th.innerHTML = tableHead[i];
        tr.appendChild(th);
    }
    let div = document.getElementById('container');
    div.appendChild(empTable);
}

// boton plus   add pa agregar materia

plusBtn.addEventListener('click', function() {
    let empTab = document.getElementById('empTable');
    let rowCont = empTab.rows.length;
    let tr = empTab.insertRow(rowCont);
    tr = empTab.insertRow(rowCont);

    for (let c = 0; c < tableHead.length; c++){
        let th = document.createElement('th');
        th = tr.insertCell(c);

        let ele = document.createElement('input');
        ele.setAttribute('type', 'text');
        ele.setAttribute('value', '');
        ele.setAttribute('placeholder', tableHead[c]);
        ele.setAttribute('id', tableHead[c]);

        th.appendChild(ele);
    }
})

closeBtn.addEventListener('click', function() {
    let empTab = document.getElementById('empTable');
    empTab.deleteRow(-1);
})

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', function() {
    let myTab = document.getElementById('empTable');
    let values = new Array();

    for (row = 1; row < myTab.rows.length - 1; row++){
        for (c = 0; c < myTab.rows[row].cells.length; c++){
            let element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                values.push(element.childNodes[0].value);
            }
        }
        // let credits = parseInt(values[2]) + parseInt(values[5]) + parseInt(values[8]);
    }

    // let Nota = document.getElementById("Nota").value;
    // let numCreditos = document.getElementById("Num de creditos").value;

    // if (Nota == null || Nota == ""){
    //     alert("Please fill all required field");
    //     return false;
    // }

    // if (numCreditos == null || numCreditos == ""){
    //     alert("Please fill all required field");
    //     return false;
    // }

    for(let j = 0; j < values.length; j++){
        if (values[j] == '' | values[j] == null){
            alert("Please fill all required field");
            return false;
        }
    }

    let creditsToSum = new Array();
    for (i = 2; i < values.length; i=i+3) {
        creditsToSum.push(parseFloat(values[i]));
    }
    let creditsSum = creditsToSum.reduce(function(a,b){
        return a+b;},0)
    //console.log(creditsSum);

    let note = new Array();
    for (let i = 1; i < values.length; i=i+3){
        note.push(parseFloat(values[i]))
    }
    //console.log(note);

    let sum = 0;
    for (let i = 0; i < note.length; i++){
        sum += creditsToSum[i]*note[i];
    }
    //console.log(sum)

    let result = sum / creditsSum;
    console.log(result);

    document.getElementById("span").textContent= result;
})


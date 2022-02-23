"use strict"

var Name = document.getElementById("name");
var surname = document.getElementById("surname");
var age = document.getElementById("age");

var add = document.getElementById("add");
var removeFirst = document.getElementById("removeFirst");
var removeLast = document.getElementById("removeLast");

var table = document.getElementById("table");
var tableHead = document.getElementById("tableHead");
var tableRow = document.getElementsByTagName("tr");

add.addEventListener("click", function () {
    var tableRow = document.createElement("tr");
    var tdName = document.createElement("td");
    var tdSurname = document.createElement("td");
    var tdAge = document.createElement("td");

    tdName.innerHTML = `${Name.value}`;
    tdSurname.innerHTML = `${surname.value}`;
    tdAge.innerHTML = `${age.value}`;


    tableRow.append(tdName, tdSurname, tdAge);
    if (!Name.value || !surname.value || age.value <= 0) {
        alert("Įveskite duomenis :)");
    } else {
        table.append(tableRow);
        Name.value = "";
        surname.value = "";
        age.value = "";
    }
});

removeFirst.addEventListener("click", function () {
    var tableRow = document.getElementsByTagName("tr");
    if (tableRow.length > 1) {
        tableRow[1].remove();
    } else {
        alert("Nebėra ką trinti :(");
    }
});

removeLast.addEventListener("click", function () {
    var tableRow = document.getElementsByTagName("tr");
    if (tableRow.length > 1) {
        tableRow[tableRow.length - 1].remove();
    } else {
        alert("Nebėra ką trinti :(");
    }
});


let table = document.getElementById("timeTable");

function addToTable(number, time, difference){
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = number;
    cell2.innerHTML = time;
    cell3.innerHTML = difference;
}

function addTimeToSession(number, time, scramble){
    addToTable(number, time, CalculateDifference(time));
}

function removeTimeFromSession(){

}

function RedrawTable(){

}

function CalculateDifference(solveTime){
    return 0;
}

function CalculateAverage(){
    var average;
}

function GetSolveNumber(){
    return sessionSelect.value.totalSolves;
}

function GetActiveSession(){
    return sessionSelect.value;
}
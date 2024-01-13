var sessionData = GetSessionData();
window.addEventListener('resize', ForceDrawChart);

// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
//google.charts.setOnLoadCallback(drawChart);

function ForceDrawChart() {
    google.charts.setOnLoadCallback(drawChart);
}


// Draw the chart and set the chart values
function drawChart() {
    sessionData = GetSessionData();

    // Optional; add a title and set the width and height of the chart
    var options = {
        'title': '',
        'width': `100%`,
        'height': `20%`,
        'hAxis': {textStyle: {color: Configs[setConfig].titleTextColor}},
        'vAxis': {textStyle: {color: Configs[setConfig].titleTextColor}},
        'backgroundColor': { fill: Configs[GetActiveConfig()].rightSideBarBackground }

    };

    // Optional; add a title and set the width and height of the chart
    var enlargedChartOptions = {
        'title': '',
        'width': `90%`,
        'height': `60%`,
        'hAxis': {textStyle: {color: Configs[setConfig].titleTextColor}},
        'vAxis': {textStyle: {color: Configs[setConfig].titleTextColor}},
        'backgroundColor': { fill: Configs[GetActiveConfig()].rightSideBarBackground }

    };

    //Exception to draw the graph with minimal information as there is no other data present to draw.
    if (currentActiveSession == -1 || sessionData[currentActiveSession].totalSolves == 0 || IsAllDNF()) {
        graphArray = [
            ['Task', 'Solve Time', 'Ao5', 'Ao12'],
            ['1', [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        ];

        var data = google.visualization.arrayToDataTable(graphArray);

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.LineChart(document.getElementById('graph'));
        chart.draw(data, options);

        //For enlarged graph
        var chart2 = new google.visualization.LineChart(document.getElementById('enlargedGraph'));
        chart2.draw(data, enlargedChartOptions);

        return;
    }

    //If data is present
    sessionData = GetSessionData();

    graphArray = [
        ['Task', 'Solve Time', 'Ao5', 'Ao12']
    ];

    for (var i = 0; i < sessionData[currentActiveSession].solves.length; i++) {
        if (sessionData[currentActiveSession].solves[i].time != 'DNF') {
            graphArray[graphArray.length] = [(i + 1).toString(), formatTime(sessionData[currentActiveSession].solves[i].time), formatTime(SecondsToTime(sessionData[currentActiveSession].solves[i].ao5)), formatTime(SecondsToTime(sessionData[currentActiveSession].solves[i].ao12))];
        }
    }

    var data = google.visualization.arrayToDataTable(graphArray);

    // Display the chart inside the <div>
    var chart = new google.visualization.LineChart(document.getElementById('graph'));
    chart.draw(data, options);

    //For enlarged graph
    var chart2 = new google.visualization.LineChart(document.getElementById('enlargedGraph'));
    chart2.draw(data, enlargedChartOptions);
}

function formatTime(timeToFormat) {
    timeToFormat = timeToFormat.toString();
    timeToFormat = timeToFormat.replace('+', '');

    timeToFormat = splitMulti(timeToFormat.toString(), [':', '.']);

    for (var i = 0; timeToFormat.length < 4; i++) {
        timeToFormat.unshift("0");
    }

    for (var j = 0; j < timeToFormat.length; j++) {
        timeToFormat[j] = parseInt(timeToFormat[j]);
    }

    //console.log(timeToFormat);
    return timeToFormat;
}

//
function splitMulti(str, tokens) {
    var tempChar = tokens[0]; // We can use the first token as a temporary join character
    for (var i = 1; i < tokens.length; i++) {
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
}
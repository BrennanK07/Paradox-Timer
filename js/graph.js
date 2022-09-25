// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Solve Time'],
        ['1', 1],
        ['2', 4],
        ['3', 9],
        ['4', 16],
        ['5', 25],
        ['6', 36]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {
        'title': '', 
        'width': `100%`, 
        'height': `100px`, 
        'backgroundColor': {fill:"#ffffff"}
        
    };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.LineChart(document.getElementById('graph'));
    chart.draw(data, options);
}
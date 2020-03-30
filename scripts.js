/* Insert google charts  */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/*Assign values and draw chart  */
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'No of cases'],
  ['Calgery zone', 408],
  ['Edmonton zone', 149],
  ['Central Zone', 46],
  ['North Zone', 45],
  ['South Zone', 12]
]);


//Chart title and its dimensions
  var options = {'title':'Cases reported till March 29,2020', 'width':800, 'height':600};

 /*Chart inside my piechart div*/
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
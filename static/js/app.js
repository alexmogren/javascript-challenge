// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);

data.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// =====================================================
var button = d3.select('#filter-btn');
    button.on('click', function (){
    d3.event.preventDefault();
    
    var dateSelect = d3.select('#datetime').node().value;
    var citySelect = d3.select('#city').node().value;
    var stateSelect = d3.select('#state').node().value;
    var countrySelect = d3.select('#country').node().value;
    var shapeSelect = d3.select('#shape').node().value;
    var commentSelect = d3.select('#comment').node().value;

//===================================================

// var date = dateSelect.property("value")
    console.log(dateSelect)

    var item = data.filter(item => item.datetime===dateSelect)
    console.log(item)

    
    
    var tbody = d3.select("tbody");
    tbody.html('');
    item.forEach((UFOSighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
    

});

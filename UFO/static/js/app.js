//Create references to table and buttons in html page
var tbody=d3.select('tbody');
var filtertable=d3.select('#filter-btn');
var resettable=d3.select('#reset-btn');

//Function to loop through all data and place in table on web page
function init() {
    document.getElementById('filter-form').reset();
    tbody.html('');
    data.forEach(ufo=>{
        var row=tbody.append('tr');
        Object.entries(ufo).forEach(([key,value])=>{
            var cell=row.append('td');
            cell.text(value);
        });
    });
};

//Function to filter data based on values user inputs into form and place in table
function filter() {
    var indate=d3.select('#date').property("value");
    var incity=d3.select('#city').property("value").toLowerCase();
    var instate=d3.select('#state').property("value").toLowerCase();
    var incountry=d3.select('#country').property("value").toLowerCase();
    var inshape=d3.select('#shape').property("value").toLowerCase();
    var ufodata=data;
    if (indate!='') {
        var ufodata=ufodata.filter(ufo=>ufo.datetime==indate);
    }
    if (incity!='') {
        var ufodata=ufodata.filter(ufo=>ufo.city==incity);
    }
    if (instate!='') {
        var ufodata=ufodata.filter(ufo=>ufo.state==instate);
    }
    if (incountry!='') {
        var ufodata=ufodata.filter(ufo=>ufo.country==incountry);
    }
    if (inshape!='') {
        var ufodata=ufodata.filter(ufo=>ufo.shape==inshape);
    }
    tbody.html('');
    ufodata.forEach(ufo=>{
        var row=tbody.append('tr');
        Object.entries(ufo).forEach(([key,value])=>{
            var cell=row.append('td');
            cell.text(value);
        });
    });
};

//Events that execute functions to change table data
init()
filtertable.on('click', filter);
resettable.on('click', init);
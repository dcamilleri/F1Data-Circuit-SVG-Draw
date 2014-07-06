[Formula1 Data](http://formula1data.com) Circuit Drawing tutorial
=========================

Learn to create drawing effects on Circuit SVG with d3.js

**For further informations, contact [Dorian Camilleri](mailto:dorian.camilleri@hetic.net)**

HTML Structure
---------------------

`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Formula1 Data - SWG Drawing Tutorial by Dorian Camilleri</title>
    <style>
      html {
        background-color: #1a1a1a;
      }      
    </style>
  </head>
  <body>
    <div id="circuit"></div>
  </body>
  <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
  <script src="js/f1d-draw.js" charset="utf-8"></script>
</html>`

JavaScript - d3 Animation
---------------------

`var nb = Math.floor((Math.random() * 5) + 1);

var container = document.getElementById("circuit");

d3.xml('circuits/circuit'+nb+'.svg', function(xml){

  var circuit = xml.documentElement;

  container.appendChild(circuit);

  var paths = circuit.getElementsByTagName("path");

  for(var i = 0; i < paths.length; i++) {

    var length = parseInt(paths[i].getTotalLength());

    d3.select(paths[i])
      .style("stroke-dasharray", length)
      .style("stroke-dashoffset", length)
      .transition()
      .duration(2000)
      .ease('linear')
      .style("stroke-dashoffset", 0);
  } 
});`



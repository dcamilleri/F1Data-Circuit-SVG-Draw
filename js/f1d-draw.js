/*
  Formula 1 Data - Learn How to draw Circuit SVG
  by Dorian CAMILLERI - Lead dev @ http://formula1data.com
  Any questions ? Mailto: dorian.camilleri@yahoo.fr
*/

// Get random number between 1 and 5
var nb = Math.floor((Math.random() * 5) + 1);

// Create container element
var container = document.getElementById("circuit");

// Require random SVG
d3.xml('circuits/circuit'+nb+'.svg', function(xml){

  // Create svg element from d3 XML
  var circuit = xml.documentElement;

  // Append circuit to container
  container.appendChild(circuit);

  /* ---------------------
    Animate SVG with d3
  ------------------------*/

  // Get SVG Paths
  var paths = circuit.getElementsByTagName("path");

  // For each SVG path, animate the Dash Arraw and Dash Offset Properties
  for(var i = 0; i < paths.length; i++) {

    // Get path total length
    var length = parseInt(paths[i].getTotalLength());

    // Animate length
    d3.select(paths[i])
      .style("stroke-dasharray", length)
      .style("stroke-dashoffset", length)
      .transition()
      .duration(2000)
      .ease('linear')
      .style("stroke-dashoffset", 0);
  } 
});
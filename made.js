
var address_main = $.url().param('address');
var num = [];
var num2 = [];
var numcount = 0;

var toAddresses = [];
var fromAddresses = [];


myFunction();

$('#keySub').click(function(){
	//d = null;
	//myFunction();
  address_main = document.getElementById("key").value;
  //console.log(address);
  myFunction();
  
});

//myFunction();

function myFunction(){
	
	$('#address').html('');

	address_main = $.url().param('address');
	num = [];
	num2 = [];
	numcount = 0;

	toAddresses = [];
	fromAddresses = [];

var JsonObj  = {
  	"nodes":[
		//{"name":"Me","group":1},

  ],
  	"links":[
    	//{"source":"18S8rzD9AVx7jvGyGgdzM45mTYM9CSLX9X","target":"17PB1QWLkeNUZNWoGxKF5TWd3LZDVeEdRK","value":3},
  ] };   

  
  
$(function() {

  var api_key_id = 'DEMO-4a5e1e4';
  //address = document.getElementById("frm1").submit().pk;
  //address_main = '1PB4xXUFyy4kSNqroCBVaQuCuw9VcN3be4';
  //address = address;
  var url = 'https://api.chain.com/v2/bitcoin/addresses/' + address_main + '/transactions';
var text = "";
  $.ajax({
    url: url,
    data: {limit: 500, 'api-key-id': api_key_id},
    type: 'GET',
    success: function(data) {
      console.log("data" + data);
	var i;
	for(i = 0; i < data.length; i++) {
		//console.log(i);
		//console.log(data[i].inputs[0].addresses[0]);
		data[i].inputs.forEach(function(input){
			//console.log(toAddresses);
			if(input.addresses[0] == address_main){
				var toAddress = data[i].outputs[0].addresses[0];
				var existing = null;
				console.log(toAddresses);

				toAddresses.forEach(function(record){
					console.log("add " + record.address);
					console.log("from " + toAddress);
					if(record.address == toAddress){
						 existing = record;
					} 
				});
			if(existing == null){
				if(toAddress != address_main){
					toAddresses.push({"address": toAddress, "value": input.value});
				}
			} else {
				existing.value += input.value;
			}
		
			}	
			
		});
		
	
		
		data[i].outputs.forEach(function(output){
			//console.log(fromAddresses);
			if(output.addresses[0] == address_main){
				var fromAddress = data[i].inputs[0].addresses[0];
				var existing = null;
				console.log(fromAddresses);

				fromAddresses.forEach(function(record){
					console.log("record " + record.address);
					console.log("from " + fromAddress);
					if(record.address == fromAddress){
						 existing = record;
					} 
				});
			if(existing == null){
				if(fromAddress != address_main){
					fromAddresses.push({"address": fromAddress, "value": output.value});
				}
				
			} else {
				existing.value += output.value;
			}
				
				
				
				/*
				var check2 = _.first(fromAddresses, function(outp) { 
					console.log("outp.address " + outp.address);
					return outp.address == fromAddress; 
				});
				
				console.log(check2);
				
				if(check2.length == 0) {
					fromAddresses.push({"address": fromAddress, "value": output.value});
				} else {
					check1.value + output.value;
				}
				*/	
		
			}	
			
		});
		//console.log(fromAddresses);
			
		
		//var oldNode = {"group":i,"index":i,"name":address,"weight":0};
		//var newGroup = i;
		//JsonObj.nodes.push( {"name":fromAddress,"group":2} );
		//JsonObj.nodes.push( {"name":toAddress,"group":1} );
		
		//JsonObj.links.push( {"source":oldNode,"target":newNode,"value":3} );
		
		
		//JsonObj.nodes = {"name":newNode,"group":1}; 
		
		//text += data[i].inputs[0].addresses[0];
		//text += "     ";
		//$("h1").append(text);
	}
	//console.log(toAddresses.length);
	//console.log(fromAddresses.length);
	//console.log(JsonObj.links);
	d();
	
    }
  });
});


//console.log(JsonObj);


function d(){
	//var arr = getNameArr();
	
	
		//JsonObj.nodes = arr2;
		//console.log(arr);
		//console.log(arr.length);
	//arr = sortUnique(arr);
	
	//console.log(JsonObj);
	//console.log(arr);
	//console.log(arr.length);
	//JsonObj.nodes = arr;
	JsonObj.nodes = [];
	JsonObj.links = [];
	//if(arr.indexOf(address) == -1){
		JsonObj.nodes.push( {"name":address_main,"group":0, "value":20000000} );
		//}
	
	//console.log(arr.length);
	//console.log(inputs);
	//console.log(inputs.length);
	
	for(var j = 0; j < toAddresses.length; j++) {
		
		
		//console.log(i);
		//console.log(data[i].inputs[0].addresses[0]);
		var newNode = toAddresses[j].address;
		
		//console.log(arr[i]);
		var newGroup = 2;
		//var oldNode = {"group":i,"index":i,"name":"1PB4xXUFyy4kSNqroCBVaQuCuw9VcN3be4","weight":0};
		var oldNode = address_main;
		//console.log(address_main);
		//console.log("newNode" + newNode);
		//console.log("oldNode" + oldNode);
		JsonObj.nodes.push( {"name":newNode,"group":newGroup, "value":fromAddresses[j].value} );
		JsonObj.links.push( {"source":oldNode,"target":newNode,"value":3} );
		//JsonObj.links.push( {"source":"15Rfp8Mrtsa8hMZwNvE7owXrXZmwkXPU9m","target":"1PB4xXUFyy4kSNqroCBVaQuCuw9VcN3be4","value":3} );
		//JsonObj.nodes = {"name":newNode,"group":1}; 
		
		//text += data[i].inputs[0].addresses[0];
		//text += "     ";
		//$("h1").append(text);
	}
	
	for(var q = 0; q < fromAddresses.length; q++) {
		
		
		//console.log(i);
		//console.log(data[i].inputs[0].addresses[0]);
		var newNode = fromAddresses[q].address;
		console.log(newNode);
		//console.log(arr[i]);
		var newGroup = 1;
		//var oldNode = {"group":i,"index":i,"name":"1PB4xXUFyy4kSNqroCBVaQuCuw9VcN3be4","weight":0};
		var oldNode = address_main;
		//console.log("newNode" + newNode);
		//console.log("oldNode" + oldNode);
		JsonObj.nodes.push( {"name":newNode,"group":newGroup, "value":fromAddresses[q].value} );
		JsonObj.links.push( {"source":oldNode,"target":newNode,"value":3} );
		//JsonObj.links.push( {"source":"15Rfp8Mrtsa8hMZwNvE7owXrXZmwkXPU9m","target":"1PB4xXUFyy4kSNqroCBVaQuCuw9VcN3be4","value":3} );
		//JsonObj.nodes = {"name":newNode,"group":1}; 
		
		//text += data[i].inputs[0].addresses[0];
		//text += "     ";
		//$("h1").append(text);
	}
	
	//console.log(JsonObj
		//console.log(JsonObj.nodes.length);
		//for(var j = 0; j < JsonObj.nodes.length; j++) {
			
		//}
		
	//	MakeNodes();
	//for(var i = 0; i < JsonObj.nodes.length; i++){
	//	console.log(JsonObj.nodes[i].name);
	//}
	
	
	var width = $(window).width(),
	    height = $(window).height();

	var color = d3.scale.category10();

	var force = d3.layout.force()
	    .charge(-1000)
	    .linkDistance(175)
	    .size([width, height]);

	var svg = d3.select("#address").append("svg")
	    .attr("width", width)
	    .attr("height", height);

	var graph = JsonObj;

	var nodeMap = {};

	graph.nodes.forEach(function(d) { nodeMap[d.name] = d; });

	graph.links.forEach(function(l) {
	    l.source = nodeMap[l.source];
	    l.target = nodeMap[l.target];
	})

	force.nodes(graph.nodes)
	    .links(graph.links)
	    .start();

	var link = svg.selectAll(".link")
	    .data(graph.links)
	    .enter().append("line")
	    .attr("class", "link")
	    .style("stroke-width", function(d) {
	        //return Math.sqrt(d.value)+1;
			return 2;
	    });

	var node = svg.selectAll(".node")
	    .data(graph.nodes)
	    .enter().append("circle")
	    .attr("class", "node")
		.attr("r", function(d){
			if(d.value/1000000 < 200) return d.value/1000000;
			else return 200;})
		//.append("text");
		//.attr("x", node.x)
   		//.attr("y", node.y)
		//.attr("id2", node.title)
		//enter.append("text")
			//text(function(d) { return d.value })
		//.append("text")
		//.attr("x", node.x)
   		//.attr("y", node.y)
	    .style("fill", function(d) { 
			//return color(d.group); 
			if(d.group == 0){
			
				return "#2c3e50";
			} else if(d.group == 1){
				//var color = d3.scale.linear()
				//.domain([0, 50000000000])
				//.range(["white", "green"])
				//return color(d.value);
				return "#2ca02c";
			} else {
				return "#c0392b";
			}
		})
	    .call(force.drag)
		.on("click", function(d){
			window.location.href = "index.html?address=" + d.name;
			
			
		});
	
	
	var tooltip = d3.select("body")
	    .append("div")
	    .style("position", "absolute")
	    .style("z-index", "10")
	    .style("visibility", "hidden")
	    .text("a simple tooltip");
		


	node.append("title")
	    .text(function(d) { return d.name; });
		
		

	force.on("tick", function() {
	    link.attr("x1", function(d) { return d.source.x; })
	        .attr("y1", function(d) { return d.source.y; })
	        .attr("x2", function(d) { return d.target.x; })
	        .attr("y2", function(d) { return d.target.y; });

	    node.attr("cx", function(d) { return d.x; })
	        .attr("cy", function(d) { return d.y; });
	});
}


//function MakeNodes(){
//	JsonObj.links.push( {"source":"other","target":"Me","value":3} );
//}

function sortUnique(arr){
	
	arr = arr.sort();
	//console.log(arr);
	    var ret = [];
	    for (var i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
	        if (arr[i-1] !== arr[i]) {
				//console.log("-------------");
	            ret.push(arr[i]);
				num[numcount] = arr[i];
				num2[numcount] += 1;
	        }
	    }
		//console.log("hello" + ret);
	    return ret;
		
}

function getNameArr(){
	var i;
	var arr = [];
	for(i = 0; i < JsonObj.nodes.length; i++){
		arr[i] = JsonObj.nodes[i].name;
	}
	return arr;
}
/*
function checkOtherNodes(){
	for(var i = 1; i < JsonObj.nodes.length; i++){
		var a = JsonObj.nodes.name;
		for(var j = i; j < JsonObj.nodes.length; j++){
			var b = JsonObj.nodes.name;
			if()
		}
	}
}

function callAPI(){
	
}
*/


function getData() {
	return JsonObj;

/*
  return {
  "nodes":[
    {"name":"Me","group":1},
    {"name":"other","group":1},
    {"name":"other2","group":1},
    {"name":"other3","group":1}, 
    {"name":"other4","group":2},
    {"name":"other5","group":2},
    {"name":"other6","group":2},
    {"name":"other7","group":2},
    {"name":"other8","group":2}, 
    {"name":"other9","group":2},
	{"name":"other10","group":3}
  ],
  "links":[
    {"source":"other","target":"Me","value":3},
    {"source":"other2","target":"Me","value":3},
    {"source":"other4","target":"Me","value":3},
    {"source":"other5","target":"Me","value":3}
  ] };    
    
*/
	
	//console.log(JsonObj);
	
}
}
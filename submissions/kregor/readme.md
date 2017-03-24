For this project I worked with Kyle Frye and Taylor Lawrence 

The only problem we ran into was with problem 5. We tried changing the size of the graphs and the x offsets and even tried making the graphs above bigger but no matter what we tried the graphs always displayed below the first graph in problem five all messed up. The original thought was to make 4 graph just with different x offsets. You can see this displayed in my final index.html file. 








        // Put your part five code here ***********************

        //FIRST DATASET
        var w1 = 350; // Width of our visualization
        var h1 = 250; // Height of our visualization
        var xOffset = 40; // Space for x-axis labels
        var yOffset = 100; // Space for y-axis labels

        d3.csv('anscombe_I.csv', function(csvData) {
            var dataset = csvData;
        // Testing data for part 2 loaded correctly
        function checkDataset(dataset) {
            if (dataset.length == 11)
                $("#partFive").append("<p>data loaded correctly</p>");
            else
                $("#partFive").append("<p>data loaded incorrectly. Try using the debugger to help you find the bug!</p>");
            }
        checkDataset(dataset);


            var xScale = d3.scale.linear()
                            .domain([d3.min(dataset, function(d) {
                                return parseFloat(d[xVal]);
                            })-1, d3.max(dataset, function(d) {
                                return parseFloat(d[xVal]);
                            })+1])
                            .range([xOffset + margin, w1 - margin]);

            var yScale = d3.scale.linear()
                            .domain([d3.min(dataset, function(d) {
                                return parseFloat(d[yVal]);
                            })-1, d3.max(dataset, function(d) {
                                return parseFloat(d[yVal]);
                            })+1])
                            .range([h1 - yOffset - margin, margin]);

            // Next, we will create an SVG element to contain our visualization.
            var svg = d3.select("#partFive").append("svg:svg")
                                            .attr("width", w1)
                                            .attr("height", h1);


            // Build axes! (These are kind of annoying, actually...)
            // Specify the axis scale and general position
            var xAxis = d3.svg.axis()
                              .scale(xScale)
                              .orient("bottom")
                              .ticks(5);

            // Add a graphics element to hold the axis we created above (xAxis)
            var xAxisG = svg.append('g')
                            .attr('class', 'axis')
                            .attr('transform', 'translate(0, ' + (h1 - yOffset) + ')')
                            .call(xAxis);

            // Add a label that shows the user what that axis represents
            var xLabel = svg.append("text")
                            .attr('class', 'label')
                            .attr('x', w1/2)
                            .attr('y', h1 - margin/2)
                            .text(xVal);

            // Repeat for the y-axis
            var yAxis = d3.svg.axis()
                              .scale(yScale)
                              .orient("left")
                              .ticks(5);

            var yAxisG = svg.append('g')
                            .attr('class', 'axis')
                            .attr('transform', 'translate(' + xOffset + ', 0)')
                            .call(yAxis);

            var yLabel = svg.append("text")
                            .attr('class', 'label')
                            .attr('x', xOffset/2)
                            .attr('y', h1/2)
                            .text(yVal);

            // Now, we will start actually building our scatterplot!
                // Select elements
                // Bind data to elements
            var point = svg.selectAll(".point")
                            //THIS MIGHT BE PROBLEM, COME BACK TO
                            .data(dataset);

                // Create new elements if needed
            point.enter().append("svg:circle");

                // Update our selection
            point.attr("class", "point")
                .attr("cx", function(d){return xScale(d[xVal]);})
                .attr("cy", function(d) {return yScale(d[yVal]);})
                .attr("r", 5)
                .on("mouseover", function(d) {
                  d3.select(this).style("fill", "red");
                })
                .on("mouseout", function(d) {
                  d3.select(this).style("fill", "black");
                })
                .on("click", function(d) {
                    var appstring = d['x'] + ", " + d['y'] + " "
                    $("#scatterLabel").empty().append(appstring)
                })
            point.append("scg:title")
                .text(function(d){
                  var appstring = d['x'] + ", " + d['y']
                  return appstring;});



        });

        // A function to retrieve the next value in the vals list
        function getNextVal(val) {
        	return vals[(vals.indexOf(val) + 1) % vals.length];
        };

        // A function to change what values we plot on the x-axis
        function setXval(val) {
        	// Update xVal
        	xVal = val;
        	// Update the axis
        	xScale.domain([d3.min(dataset, function(d) { return parseFloat(d[xVal]); })-1,
        				   d3.max(dataset, function(d) { return parseFloat(d[xVal]); })+1])
        	xAxis.scale(xScale);
        	xAxisG.call(xAxis);
        	xLabel.text(xVal);
        	// Update the points

        };

        // A function to change what values we plot on the y-axis
        function setYval(val) {
        	// Update yVal
        	yVal = val;
        	// Update the axis
        	yScale.domain([d3.min(dataset, function(d) { return parseFloat(d[yVal]); })-1,
        				   d3.max(dataset, function(d) { return parseFloat(d[yVal]); })+1])
        	yAxis.scale(yScale);
        	yAxisG.call(yAxis);
        	yLabel.text(yVal);
        	// Update the points

        };

        //SECOND DATASET
        var w1 = 350; // Width of our visualization
        var h1 = 250; // Height of our visualization
        var xOffset1 = 390; // Space for x-axis labels
        var yOffset = 100; // Space for y-axis labels

        d3.csv('anscombe_I.csv', function(csvData) {
            var dataset = csvData;
        // Testing data for part 2 loaded correctly
        function checkDataset(dataset) {
            if (dataset.length == 11)
                $("#partFive").append("<p>data loaded correctly</p>");
            else
                $("#partFive").append("<p>data loaded incorrectly. Try using the debugger to help you find the bug!</p>");
            }
        checkDataset(dataset);


            var xScale = d3.scale.linear()
                            .domain([d3.min(dataset, function(d) {
                                return parseFloat(d[xVal]);
                            })-1, d3.max(dataset, function(d) {
                                return parseFloat(d[xVal]);
                            })+1])
                            .range([xOffset1 + margin, w1 - margin]);

            var yScale = d3.scale.linear()
                            .domain([d3.min(dataset, function(d) {
                                return parseFloat(d[yVal]);
                            })-1, d3.max(dataset, function(d) {
                                return parseFloat(d[yVal]);
                            })+1])
                            .range([h1 - yOffset - margin, margin]);

            // Next, we will create an SVG element to contain our visualization.
            var svg = d3.select("#partFive").append("svg:svg")
                                            .attr("width", w1)
                                            .attr("height", h1);


            // Build axes! (These are kind of annoying, actually...)
            // Specify the axis scale and general position
            var xAxis = d3.svg.axis()
                              .scale(xScale)
                              .orient("bottom")
                              .ticks(5);

            // Add a graphics element to hold the axis we created above (xAxis)
            var xAxisG = svg.append('g')
                            .attr('class', 'axis')
                            .attr('transform', 'translate(0, ' + (h1 - yOffset) + ')')
                            .call(xAxis);

            // Add a label that shows the user what that axis represents
            var xLabel = svg.append("text")
                            .attr('class', 'label')
                            .attr('x', w1/2)
                            .attr('y', h1 - margin/2)
                            .text(xVal);

            // Repeat for the y-axis
            var yAxis = d3.svg.axis()
                              .scale(yScale)
                              .orient("left")
                              .ticks(5);

            var yAxisG = svg.append('g')
                            .attr('class', 'axis')
                            .attr('transform', 'translate(' + xOffset1 + ', 0)')
                            .call(yAxis);

            var yLabel = svg.append("text")
                            .attr('class', 'label')
                            .attr('x', xOffset1/2)
                            .attr('y', h1/2)
                            .text(yVal);

            // Now, we will start actually building our scatterplot!
                // Select elements
                // Bind data to elements
            var point = svg.selectAll(".point")
                            //THIS MIGHT BE PROBLEM, COME BACK TO
                            .data(dataset);

                // Create new elements if needed
            point.enter().append("svg:circle");

                // Update our selection
            point.attr("class", "point")
                .attr("cx", function(d){return xScale(d[xVal]);})
                .attr("cy", function(d) {return yScale(d[yVal]);})
                .attr("r", 5)
                .on("mouseover", function(d) {
                  d3.select(this).style("fill", "red");
                })
                .on("mouseout", function(d) {
                  d3.select(this).style("fill", "black");
                })
                .on("click", function(d) {
                    var appstring = d['x'] + ", " + d['y'] + " "
                    $("#scatterLabel").empty().append(appstring)
                })
            point.append("scg:title")
                .text(function(d){
                  var appstring = d['x'] + ", " + d['y']
                  return appstring;});



        });

        // A function to retrieve the next value in the vals list
        function getNextVal(val) {
        	return vals[(vals.indexOf(val) + 1) % vals.length];
        };

        // A function to change what values we plot on the x-axis
        function setXval(val) {
        	// Update xVal
        	xVal = val;
        	// Update the axis
        	xScale.domain([d3.min(dataset, function(d) { return parseFloat(d[xVal]); })-1,
        				   d3.max(dataset, function(d) { return parseFloat(d[xVal]); })+1])
        	xAxis.scale(xScale);
        	xAxisG.call(xAxis);
        	xLabel.text(xVal);
        	// Update the points

        };

        // A function to change what values we plot on the y-axis
        function setYval(val) {
        	// Update yVal
        	yVal = val;
        	// Update the axis
        	yScale.domain([d3.min(dataset, function(d) { return parseFloat(d[yVal]); })-1,
        				   d3.max(dataset, function(d) { return parseFloat(d[yVal]); })+1])
        	yAxis.scale(yScale);
        	yAxisG.call(yAxis);
        	yLabel.text(yVal);
        	// Update the points

        };

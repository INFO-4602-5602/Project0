//This code written by Samantha Molnar


//part2Scatter("data/anscombe_I.csv");



   // d3.selectAll("svg").remove() 
    
    d3.csv("data/anscombe_I.csv",function(csvData){
        var h= 400;
        var w = 600;    
        var xOffset = 80;
        var yOffset = 100;
        var margin = 10;
        var transDur = 1000;
        var datasets = ["anscombe_I","anscombe_II","anscombe_III","anscombe_IV"];


        var done = 0;
        var ans1 = csvData;
        checkDataset(ans1);

       
        var xMax=d3.max(ans1,function(d,i){
                    return parseFloat(d['x']);
                    });


        var select = d3.select("#partTwo").append("select")
                    .attr("class","menu");
                    
        var options = select.selectAll("option")
                    .data(datasets)
                    .enter()
                    .append("option");
            options.text(function(d){return d;});
                select.on("change",newData);
        var svg = d3.select("#barchart").append("svg:svg")
                                    .attr("width", w)
                                    .attr("height", h);

        var svg2 = d3.select("#scatterplot").append("svg:svg")
                                    .attr("width", w)
                                    .attr("height", h);

        var xMin=0
// Put your part two code here ***********************
        xScale = d3.scale.linear().domain([0,ans1.length]).range([xOffset + margin, w - margin]);
        yScale = d3.scale.linear().domain([xMin,xMax]).range([h-yOffset-margin,margin]);

        var xAxis = d3.svg.axis()
                      .scale(xScale)
                      .orient("bottom")
                      .ticks(5);

        var yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left")
                        .ticks(5)

        var xAxisG = svg.append('g')
                    .attr('class', 'x1axis')
                    .attr('transform', 'translate(0, ' + (h - yOffset) + ')')
                    .call(xAxis);

        var xLabel = svg.append("text")
                    .attr('class', 'label')
                    .attr('x', w/2)
                    .attr('y', h - yOffset/2)
                    .text('');



        var yAxisG = svg.append('g')
                    .attr('class', 'y1axis')
                    .attr('transform', 'translate(' + xOffset + ', 0)')
                    .call(yAxis);

        var yLabel = svg.append("text")
                    .attr('class', 'label')
                    .attr('x', -160)
                    .attr('y', 30)
                    .attr("transform","rotate(-90)")
                    .text('X Values');


        rectangle= svg.selectAll('rect') // Select elements
                .data(ans1);        // Bind data to elements
        rectangle.enter()
                .append("rect")
                .attr("class","bar")
                .attr('x',function(d,i){
                        return xScale(i);
                    })
                    .attr('y',function(d,i){
                        return h-yScale(d['x'])-yOffset;
                    })
                    .attr('height',function(d,i){
                        return yScale(d['x']);
                    });
                    
                    
// Put your part three & four code here ***********************


                yMin=0
        yMax=d3.max(ans1,function(d,i){
                return parseFloat(d['y']);
            })
        var svg4 = d3.select("#barchart").append("svg:svg")
                                    .attr("width", w)
                                    .attr("height", h);
        xScale4 = d3.scale.linear().domain([0,ans1.length]).range([xOffset + margin, w - margin]);
        yScale4 = d3.scale.linear().domain([0,yMax]).range([h-yOffset-margin,margin]);

        var xAxis4 = d3.svg.axis()
                      .scale(xScale4)
                      .orient("bottom")
                      .ticks(5);

        var yAxis4 = d3.svg.axis()
                        .scale(yScale4)
                        .orient("left")
                        .ticks(5)

        var blah2=svg4.append('g')
                    .attr('class', 'x4axis')
                    .attr('transform', 'translate(0, ' + (h - yOffset) + ')')
                    .call(xAxis4);

        var xLabel4 = svg4.append("text")
                    .attr('class', 'label')
                    .attr('x', w/2)
                    .attr('y', h - yOffset/2)
                    .text('');



        var blah=      svg4.append('g')
                    .attr('class', 'y4axis')
                    .attr('transform', 'translate(' + xOffset + ', 0)')
                    .call(yAxis4);

        var yLabel4 = svg4.append("text")
                    .attr('class', 'label')
                    .attr('x', -150)
                    .attr('y', 25)
                    .attr("transform","rotate(-90)")
                    .style("text-anchor","middle")
                    .text('Y Values');

        rectangle2= svg4.selectAll('rect') // Select elements
                .data(ans1);        // Bind data to elements

        rectangle2.enter()
                .append("rect")
                .attr("class","bar2")
                .attr('x',function(d,i){
                        return xScale4(i);
                    })
                    .attr('y',function(d,i){
                        return h-yScale4(d['y'])-yOffset;
                    })
                    .attr('height',function(d,i){
                        return yScale4(d['y']);
                    })


                    
                    var title = svg4.append("text")
                    .attr('class', 'label')
                    .attr('x', 200)
                    .attr('y', 20)
                    .text(datasets[0])
                
// Put your part three & four code here ***********************


            yMin=0
            yMax=d3.max(ans1,function(d,i){
                return parseFloat(d['y']);
            })



            var xScale2 = d3.scale.linear().domain([0,xMax]).range([xOffset + margin, w - margin]).range([xOffset + margin, w - margin]);
            var yScale2 = d3.scale.linear().domain([0,yMax]).range([h-yOffset-margin,margin]).range([h-yOffset-margin,margin]);



            var xAxis2 = d3.svg.axis()
                      .scale(xScale2)
                      .orient("bottom")
                      .ticks(5);

            var yAxis2 = d3.svg.axis()
                        .scale(yScale2)
                        .orient("left")
                        .ticks(5)

            svg2.append('g')
                    .attr('class', 'x2axis')
                    .attr('transform', 'translate(0, ' + (h - yOffset) + ')')
                    .call(xAxis2);

            var xLabel2 = svg2.append("text")
                    .attr('class', 'label')
                    .attr('x', w/2)
                    .attr('y', h - yOffset/2)
                    .text('X Values');



            svg2.append('g')
                    .attr('class', 'y2axis')
                    .attr('transform', 'translate(' + xOffset + ', 0)')
                    .call(yAxis2);
            var yLabel2 = svg2.append("text")
                    .attr('class', 'label')
                    .attr('x', -150)
                    .attr('y', 25)
                    .attr("transform","rotate(-90)")
                    .text('Y Values');

                tip = d3.tip()
                        .attr('class', 'tip')
                        .offset([-10, 0])
                        .html(function(d) {
                    return "( "+d['x']+' , '+d['y']+" )";
                });
                svg2.call(tip)
                point = svg2.selectAll('.point') // Select elements
                .data(ans1);       // Bind data to elements
                
                point.enter().append('svg:circle')
                    .attr("class","point")
                    .attr('cx',function(d){
                        return xScale2(d['x']);
                    })
                    .attr('cy',function(d){
                        return yScale2(d['y']);
                    })
                    .attr('r',8)
                    .each(function() {
                        var sel = d3.select(this);
                        sel.on('mouseover',tip.show);
                        sel.on('mouseout',tip.hide);
                        sel.on("click",function(d,i){
                            var lab = d3.select("#scatterLabel");
                            lab.select("text").remove();
                            lab.append("text").attr("class","label")
                                .text( "(" + d['x']+" , "+d['y'] + ")");
                        });
                    });

                    



            function newData(){ //for the dropdown menu

                    var newData = d3.event.target.value;

                    d3.csv("data/"+newData+".csv",function(csvData){
                            var ans2 = csvData;
                            //title.text(newData)

                        xMax=d3.max(ans2,function(d,i){
                            return parseFloat(d['x']);
                        })  
                        yMax=d3.max(ans2,function(d,i){
                            return parseFloat(d['y']);
                        })
                            xScale.domain([0,ans2.length]);
                            yScale.domain([0,xMax]);
                            xScale2.domain([0,xMax]);
                            yScale2.domain([0,yMax]);
                            xScale4.domain([0,ans2.length]);
                            yScale4.domain([0,yMax]);


                            yAxis2.scale(yScale2);
                            xAxis2.scale(xScale2);
                            xAxis.scale(xScale);
                            yAxis.scale(yScale);
                            yAxis4.scale(yScale4);
                            xAxis4.scale(xScale4);

                            d3.select(".y2axis")
                                .transition()
                                .duration(transDur)
                                .call(yAxis2);
                            
                            d3.select(".x2axis")
                                .transition()
                                .duration(transDur)
                                .call(xAxis2);

                            d3.select(".x1axis")
                                .transition()
                                .duration(transDur)
                                .call(xAxis)
                            d3.select(".y1axis")
                                .transition()
                                .duration(transDur)
                                .call(yAxis)

                            d3.select(".x4axis")
                                .transition()
                                .duration(transDur)
                                .call(xAxis4)
                            d3.select(".y4axis")
                                .transition()
                                .duration(transDur)
                                .call(yAxis4)


                            rectangle.data(ans2)
                                    .transition()
                                    .duration(transDur)
                                    .attr("y",function(d){
                                        return h-yScale(d['x'])-yOffset;
                                    })
                                    .attr('height',function(d){
                                        return yScale(d['x']);
                                    });
                            rectangle2.data(ans2)
                                    .transition()
                                    .duration(transDur)
                                    .attr("y",function(d){
                                        return h-yScale4(d['y'])-yOffset;
                                    })
                                    .attr('height',function(d){
                                        return yScale4(d['y']);
                                    });
                            point.data(ans2)
                                    .transition()
                                    .duration(transDur)
                                    .attr("cx",function(d){
                                        return xScale2(d['x']);
                                    })
                                    .attr("cy",function(d){
                                        return yScale2(d['y']);
                                    });

                    });
            }


        //draw small plot for part 5
    createScatterPlot('data/anscombe_I.csv',"Anscombe I");
    createScatterPlot('data/anscombe_II.csv',"Anscombe II");
    createScatterPlot('data/anscombe_III.csv',"Anscombe III");
    createScatterPlot('data/anscombe_IV.csv',"Anscombe IV");


d3.csv('data/anscombe_II.csv',function(csvData){
    var ans3 = csvData;
    checkDataset(ans3);
});
d3.csv('data/anscombe_III.csv',function(csvData){
    var ans3 = csvData;
    checkDataset(ans3);
});
d3.csv('data/anscombe_IV.csv',function(csvData){
    var ans4 = csvData;
    checkDataset(ans4);
});

// Leave this to test your data uploading. All data uploading should be above this line
function checkDataset(dataset) {
    if (dataset.length == 11)
        $("#partOne").append("<p>data loaded correctly</p>");
    else
        $("#partOne").append("<p>data loaded incorrectly. Try using the debugger to help you find the bug!</p>");
}
// Put your part five code here ***********************
function createScatterPlot(dataset,title){
    var width = 400;
    var height = 300;

    d3.csv(dataset,function(csvData){
        var ans2 = csvData;        
        bestFit=lineofBestFit(ans2);
            

        yMin=0
        yMax=d3.max(ans2,function(d,i){
            return parseFloat(d['y']);
        });


        xMin=0
        xMax=d3.max(ans2,function(d,i){
            return parseFloat(d['x']);
        });
        xScale3 = d3.scale.linear().domain([xMin,xMax]).range([xOffset + margin, width - margin]);
        yScale3 = d3.scale.linear().domain([yMin,yMax]).range([height-yOffset-margin,margin]);

        var svg3 = d3.select("#scatterplotSet").append("svg:svg")
                .attr("display","inline-block")
                .attr("width", width)
                .attr("height", height);
        var x1=xMin;
        var x2=xMax;
        var y1=x1*bestFit[0]+bestFit[1];
        var y2=x2*bestFit[0]+bestFit[1];

        svg3.append("line")
        .attr("x1",xScale3(x1))
        .attr("x2",xScale3(x2))
        .attr("y1",yScale3(y1))
        .attr("y2",yScale3(y2))
        .attr("stroke","grey")
        .attr("stroke-width",2)
        .style("stroke-dasharray",("10,3"));

        var xAxis3 = d3.svg.axis()
                    .scale(xScale3)
                    .orient("bottom")
                    .ticks(5);

        var yAxis3 = d3.svg.axis()
                    .scale(yScale3)
                    .orient("left")
                    .ticks(5)

        var xAxisG3 = svg3.append('g')
                    .attr('class', 'axis')
                    .attr('transform', 'translate(0, ' + (height - yOffset) + ')')
                    .call(xAxis3);

        var xLabel3 = svg3.append("text")
                    .attr('class', 'label')
                    .attr('x', width/2)
                    .attr('y', height - yOffset/2)
                    .text('X Values');

        var yAxisG3 = svg3.append('g')
                    .attr('class', 'axis')
                    .attr('transform', 'translate(' + xOffset + ', 0)')
                    .call(yAxis3);
        var yLabel3 = svg3.append("text")
                    .attr('class', 'label')
                    .attr('x', -100)
                    .attr('y', 50)
                    .attr("transform","rotate(-90)")
                    .style("text-anchor","middle")
                    .text('Y Values');
            

        circles2 = svg3.selectAll(".point").data(ans2).enter().append("svg:circle");

        circles2.attr('cx',function(d){
                        return xScale3(d['x']);
                    })
                    .attr('cy',function(d){
                        return yScale3(d['y']);
                    })
                    .attr('r',5)
                .attr("class","point")

        svg3.append('text')
                .attr('x',width/2-15)
                .attr('y',15)
                .style("font-size","18")
                .style("fill","black")                                  
                .text(title);
        });
}

function lineofBestFit(data){
    var xmean = d3.mean(data,function(d){ return d['x'];});
    var ymean = d3.mean(data,function(d){ return (d['y']);});
    var top = d3.sum(data,function(d){
                return ((d['x'])-xmean)*((d['y'])-ymean);
            });
    var bottom = d3.sum(data,function(d){
                return ((d['x'])-xmean)*((d['x'])-xmean);
            });
    var m = top/bottom; //slope of line of best fit

    //find y-intercept
    var b = ymean - m*xmean;
    return [m,b];            
}

        
});
        
        
        
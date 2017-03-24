I have a lot of problems trying to get the graph titles. I tried looping with a function but somehow the parameters were not passed correctly. I opted for doing it manually, but hard coding is not my choice.
The hover/mouseover I implemented as css, so also not ideal. With more time I can probably make it work as it should.

COLLABORATION: I've got advice from Santhanakrishnan Ramani. The other sources liste below are also commented in the code:

**********************************

https://bl.ocks.org/mbostock/3885304
<style>
        .bar {
            fill: steelblue;
        }
        .bar:hover {
            fill: brown;
        }
</style>

although is css, it works. When hover the mouse over the bars, it changes the color of the bars.

***********************************

http://www.d3noob.org/2013/01/adding-title-to-your-d3js-graph.html

 svg.append("text")
       .attr('x', (w1 / 2))             
       .attr('y', margin)
       .text(filename);

this adds the element of the graph title
***********************************

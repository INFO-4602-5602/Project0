<h1>Daniel Frost - Readme for Project 0 </h1>

<h3> Bells and Whistles Added </h3>

1. - Tooltip displaying X and Y coordinates on hover succesfully implemented. 
2. - Replications of all 5 graphs created in a WYSIWYG tool (Tableau) - .PNG screenshots located in submissions folder. 


<h3> Creating the Tableau Replications </h3>

1. The scatterplots were fairly easy to replicate. Since they were just plotting the X and y values of each of the datasets, I simply added the dataset, and plotted x(1,2,3,4) on the columns, and y(1,2,3,4) on the rows. Next, I adjusted the color of the marks to black, since my originals are black on html site. I renamed the labels to lowercase x and y, just like the labels on my charts. 
2. I adjusted the tick marks, since they were auto-generated and enumerating by increments of one. I adjusted them to increments of 2. An issue I ran into was that when I set tick-origin to 4 (like my charts) Tableau ignored that and continued to print 0 and 2.
3. I had to play around with the bar chart a little more to get it to replicate correctly. At first, I'm not sure why but all I could get to generate were horizontal bar charts. I tried playing around with measure values and number of records versus the x values from anscombe_I, but eventually I managed to get the bar chart to display when "Show Me" was still set to scatter plots. I did this by leaving Show Me on scatter mode, but by dropping down the "Marks" setting to "Bar." 
4. Magically I had my bar chart, and the X and Y values were displaying just like my bar chart original from D3. 
5. The only things left were to adjust color (not hard, switched to black) - and then looked up bar thickness. Without going through a whole mess of creating custom polygons, I figured out that if I switched the X values from "continuous" to "discrete" I could make the bars a lot thicker. 
6. I adjusted thickness to try and match to my chart as much as possible. The ONLY thing I couldnt figure out was that it was arranging x values by ordinance, which I didnt want. I wanted x values to display in order of occurence in the dataset. But this was as close as I could get the Tableau version to display. 
6a. *UPDATE* I figured out how to manually sort the arrangement of x column, and changed the order to reflect the original chart and original order of data. 

<h3>Trouble with Part 4: Interaction: </h3>

I was having difficulty getting the interactivty working for part 4. I switched my d3 library to v4, because I was finding it easier to get the visualizations working. However, I found it was harder to find helpful tutorials when it came to mouse actions and interactivity. 

-update 2/15 - Managed to get mouseover and mouse out color changing working - however, still can not figure out appending coordinates to html paragraph on click.

-update 2/16 - All interactivity is now functioning! 


<h3>Trouble with Part 3 - Dynamic linear scaling on the scatterplot </h3>
-Despite my best efforts, I still could not get my scatterplot to work with min and max domains for xScale and yScale by tailoring it off of the scatterTutorial.js.

--UPDATE 2/16/17, 10:02PM-- I fixed the issues with the scatter plots! I used the scatterJS tutorial, created a new scatter in a new file and started fresh, got all the anscombe's to display correctly, and put it back into my original project. 

PROBLEMS RESOLVED :)

WOO HOO!!!!


<h3>Collaboration: </h3>
I worked with Ben Galassi on this project.  

<h3> Sources: </h3>

I listed a number of sources in the source code on index.html that I used for reference when creating my charts. They are also listed below: 

//Sources used for this project:
// #1 https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4

// for help setting up bar graph using v4 d3 library

// #2 http://stackoverflow.com/questions/11300059/appending-d3-js-canvas-to-div

// for help appending a chart to a div

// #3 http://www.d3noob.org/2012/12/setting-scales-domains-and-ranges-in.html

// for scaling x and y domains correctly by max values from dataset

// #4 http://stackoverflow.com/questions/38450349/uncaught-typeerror-cannot-read-property-linear-of-undefined

// for more new v4 stuff that broke using v3 code from tutorial, syntax changes, etc..

// #5 https://bl.ocks.org/d3noob/6f082f0e3b820b6bf68b78f2f7786084

// for scaling x y ranges in v4 for a scatterplot



  

# Project0

<h1>Project 0: Visualizing Anscombe’s Quartet by Aadish Gupta</h1> 

<h2>Bells Implemented</h2>

<h3>Bell: Tooltips</h3>
I have used svg:title to implement tooltip

<h3>Bell: Xs and Ys</h3>
For this part adjoining bar chart for Y values is implemented. The data is sorted on the X value and therefore bar chart for Y values does not show any pattern

<h3>Bell: Styling your Visualization</h3>
I have used bootstrap 3 for over-arching layout of the web-page. In specific I have used https://startbootstrap.com/template-overviews/freelancer/ this theme to have menu bar with sub section links of different parts.

I have used http://tristen.ca/hcl-picker/#/hlc/6/1/15534C/E2E062 to pickup the colors for markers. Part 2 and Part 3 changes the colors when we hover over them.

<h3>Bell: Best Fit Lines</h3>
I have used simple linear regression to calculate the slope and intercept of best fit line. Simple linear regression employs least-square approach to find these values. Explained in detail here https://en.wikipedia.org/wiki/Simple_linear_regression

I have used http://trentrichardson.com/2010/04/06/compute-linear-regressions-in-javascript/ to calculate slope and fit. I have modified the code to reflect the formulas given in the Wikipedia Link

<h2>Whistles Implemented</h2>

<h3>Whistle: Transitions</h3>
Added a select input whose styling is provided by Bootstrap. Selecting the dataset updates part 3 with a transition provided by D3

<h3>Whistle: Replication</h3>
I used tabaleu to create the scatter plots with trend line. Initialy how to draw the scatter plot in Tabaleu was a bit of struglle and had to look up online to get a hang of it. https://community.tableau.com/thread/120387 helped in getting started. 

For replicating part 5 it was all repretitive work. If we compare to D3 it was all automated. Adding a trendline was just 1 step but in D3 had to code. Will prefer D3 as it gave an idea what is happening in trend line and how it is calculated. 

Interactivity wise tabaleu is a lot constrained while D3 works like a boss.

<img src="https://github.com/INFO-4602-5602/project-0-aadish/blob/master/submissions/gupta/scatterPlot.png?raw=true" alt="Screenshot" style="width: 200px;"/>

<img src="https://github.com/INFO-4602-5602/project-0-aadish/blob/master/submissions/gupta/ScatterPlotGrid.png?raw=true" alt="Screenshot" style="width: 200px;"/>

For drawing the bar chart I used excel. Had to maually do sorting and add index field 
<img src="https://raw.githubusercontent.com/INFO-4602-5602/project-0-aadish/master/submissions/gupta/BarPlot.PNG" alt="Screenshot" style="width: 200px;"/>

<h3>Whistle: Coordinated Views</h3>
Have used class unique for each index add them to each bar to create co-ordination when moused over

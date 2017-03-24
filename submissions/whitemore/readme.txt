Matilda Whitemore
Project 0

Part 1:
For this part I just loaded in each data file and returned the results from checkDataset(). 

Part 2:
I used the in class tutorial for most of this part i.e. for making the scales, svg elements, axes, and labels. I did change the y-scale to be scaled based on the x column data since both axes are x-values. I added my own tooltip to print the x and y value of the bar so I could check the values were correct.

Part 3/4:
Again, for this code I used a lot of what we did in the in class tutorial to create my scatterplot. I plotted Anscombe_I.csv for this plot as I did in Part 2. The circles will turn blue when you mouse over them and return to black when you move away. I also added a "bell" tooltip where if you hover over a cirle the x and y coordinate will be shown. I had a hard time with printing the x and y coordinate when clicking a circle, but found help on stackoverflow (http://stackoverflow.com/questions/16765292/display-text-in-div-when-javascript-onclick). From what I understand from my limited knowledge of html/javascript/d3, the line (213) selects the scatterLabel paragraph and appends the x and y coordinate to it whena point on the graph is clicked.

Part 5: 
For Part 5 I basically copied the code used to create the scatterplot for Part 3and d3/javascript seems to post SVGs side by side when multiple are added to one div so I basically created four SVGs in #scatterplotSet for the four datasets and they appear in a grid fashion. I added titles, axis labes, axes, and points in the same way I did before so the code is pretty much the same just with different data input.

Misc:
I was having trouble reflecting css updates in my web browser and found and used help from (https://community.apachefriends.org/f/viewtopic.php?p=109331) which added the css as a link underneath the <head>. I still had trouble making color changes to the web browser through the css file so I kept everything in black and white.

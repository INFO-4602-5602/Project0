Project 0 free responses for Lila Finch

Part 1:
I first tried to make a project0.js file to do this, before realizing we needed to paste below.

Part 2:
I first made this using a linear scaling which worked alright but didn't have the right spacing between bars and didn't have the id's centered on the bars. I then found the d3 git example helpful in understanding this and how to use the ordinal scale instead:
https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal_rangeBand

I used the natural order of the data for this chart.

For some reason my css file was not registering when I was using my localhost server - so I moved the styling section into my html which allowed me to access this information.

And I decided to use green as the color of the bars, though it looks like for the next one you wanted red.

Part 3:

I used the basic outline we used from our class tutorial. I renamed the scales and svg so that I wouldn't be using the same variable names as the previous part. I also took out the strokes because I liked it better.

Part 4:

For all the mouse events I used this tutorial to help me figure out how to set up and call functions with mouse events. Whenever a mouse event occurs that is of interest I call a function that I wrote which was inspired by this site:
http://bl.ocks.org/WilliamQLiu/76ae20060e19bf42d774

I wasn't sure what the interactivity was that you wanted so I decided to have the x and y positions appear when a point was clicked on and not disappear. I added this to the paragraph section that was specified in the skeleton code. However, it was unclear if these were to be kept or refreshed each time. Since I wasn't sure I decided to add a little extra text and a new line each time a data point was clicked.

At first I could not get the paragraph connection to work and so just made the point values (x and y) appear when you clicked on the dot right above the dot. However, after reading that this was kind of like the first "Bell:Tooltip", I decided to change the code to what I said above. I left the old code commented out.

Part 5:

For this the two tricky parts for me were to pull the svg overall out of the functions for calling the data. Then I could get all the axes to work, but the plots for the 2-4th graphs would not work. To fix this this I changed the class that these points were associated with. This meant that I needed to make new style classes in the style section as well.

I changed the size of the plots to make them fit a little better in a long line.

Bells & Whistles:

I completed the following Bells & Whistles. None of them may be the cleanest way of completing the task, but the functionality seems to be correct.

Bell: Tooltips

On scatter plot 3 I made it so when you hover over the points you get the x and y values.

Bell: Xs and Ys

On the bar graph I made a matching graph with the associated y values.

Whistle: Coordinated Views

On the paired bar graphs now when one bar is highlighted the associated other bar is highlighted as well.

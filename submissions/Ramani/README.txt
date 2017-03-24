Most of the code I used in the project were extended from the code we used in class. For motivation and ideas, I looked into https://bl.ocks.org/ articles.

As part of Extra Credit, I did

Bell: Tooltips --> In order to create a tooltip, created a div and made it hidden and on mouseover made it visible and set it's text as [X, Y] and positioned it based on the current position of the cursor using d3.event.pageX and d3.event.pageY methods.

Bell: Xs and Ys & Whistle: Coordinated Views --> Created two divs to place both the X & Y bar graphs and assigned the same id for the rectangles at same index in both the graphs so when changing the colour on hover it gets reflected on corresponding bars. 

Bell: Styling your Visualisation --> I used the theme of neon for styling. The reason being I am a fan of high contrast displays and neon symbolises highlighting important stuff. 

Bell: Best Fit Lines --> I used a library called simplestatistics.js to calculate the linear regression line and plotted the SVG line.

Whistle: Transitions --> I created a select option in HTML and onchange function of it called the function to update the xScale, yScale and the corresponding dataset value.

Whistle: Replication --> Replicated Part 2, 3 & 5 using plot.ly online plotting tool. It was easy and took less time to get the basic plot. But things like changing colour on hover wasn't available, and it was difficult making subplots.
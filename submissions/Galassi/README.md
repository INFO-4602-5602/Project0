Collaborators: Danny Frost

Broken Code: I had a lot of trouble with the bar chart piece of the assignment. I tried adding .domains to the axis scales, but this broke the code a lot. The only way I could get it to work was to define the domains seperately. Also, I had trouble switching the x and y values to be mapped to the y and x axes, respectively. I think this was more to do with me being tired, and confusing some of the variable names. 


Whistle(Replication):

Barchart
	•	Select x values
	•	Right click -> format cells -> text (to make x values categorical)
	•	Insert -> chart -> column
	•	Right click chart -> select data
	•	Input Y values and horizontal category labels
	•	Click data points
	•	click change colors -> monochrome grayscale
	•	Go to gridlines, deselect all
	•	Go to chart titles -> add top central title

Scatterplots
	•	Highlight data
	•	Go to insert -> chart -> xy scatter
	•	Go to chart design
	•	Click data points
	•	Click change colors -> monochrome grayscale
	•	Click add chart element -> more axis options
	•	Change minimum x and y to 2.0
	•	Go to tick marks, add outside major tick marks for x and y
	•	Go to gridlines, deselect all
	•	Go to axis titles -> primary vertical and primary horizontal
	•	Go to chart titles -> add top central title

Differences:
Overall, it was a lot faster to create the charts in Excel. It seemed to offer the same level of customization as D3, but with one notable exception: interaction. I’m sure it is possible to create interactive charts in excel by making multiple charts and linking them, but this is a lot more time consuming than using a .on function in D3. In addition, it was a little trickier to get Excel to treat the x values for the bar chart as categorical, but at the same time, you usually would not be trying to create a bar chart using two continuos variables. In summary, both Excel and D3 exceed in their own respective domains: quick and dirty vs manual, labor intensive, and very customizable. 

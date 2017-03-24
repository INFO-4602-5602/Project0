INFO 5402 - Information Visualization
Author: Varsha Teratipally


This directory contains files for data visualization for the below four datasets.
- Anscombe_I.csv
- Anscombe_II.csv
- Anscombe_III.csv
- Anscombe_IV.csv

PROJECT DESCRIPTION

The projects consists of six parts.

PART ONE:
The part one verifies whether data has been properly loaded from the csv files by printing out “Data loaded correctly” when the data gets processed. This is done while loading every file.

PART TWO:
The part two consists a bar graph visualizing the values of X from the data set “Anscombe_I.csv” file. The height of the bar in the graph denotes the value of the X in the dataset i.e. X Values are mapped to Y axis and X axis contains the index of the values.

PART THREE AND FOUR:
The part three and Four consists a scatter plot visualizing the values of the X on X axis and Y on Y axis from the data set “Anscombe_I.csv” as the default when the page loads. The user also has an option of selecting the data set from the Dropdown menu which contains the four files. When the users selects a dataset from the dropdown menu and the scatter plot according to the values of the respective dataset along with the domain of the axis. The domain of the X and Y axes will also get updated when the dataset is changed. When the user hovers the mouse on any point, the corresponding values of X and Y will be displayed on the “Tooltip” and also the color of the point changes and so does the label will be updated with the values.

PART FIVE:
The part five consists of all the scatter plots for the four data sets. When the user hovers on any point, the tooltip will display the corresponding X and Y values. The best line of fit showing the trend is also displayed for each scatter plot.

COORDINATED X AND Y BARS:
This contains two bar graphs side by side. The bars in one of the graph denotes the values of X and other one denotes the values of Y in the same order as the index of the X and Y values. When the user hovers on the one of the bar in either graph, the corresponding bar in the other graph will also be highlighted.



FEATURES

1. Bar graph for X values from ANSCOMBE_I.csv.
2. Scatter Plot for data in ANSCOMBE_I.csv as default with tooltip and the can change the visualization dynamically based on the dates chosen from the drop down menu.
3. The scatter plot for all the four datasets with the best line of fit is visualized.
4. The bar graphs for the X and Y values from the dataset ANSCOMBE_I.csv is also included and when a user hovers the mouse on one of the bar for one graph the corresponding value bar will be highlighted. This would be vice versa.
5. All the visualizations are themed as per the inspiration mentioned below.
6. The visualizations are replicated in tableau and the screenshots are also added.


TECHNOLOGY

1. HTML
2. CSS
3. JavaScript
4. D3 library
5. XAMPP for server


STEPS TO VIEW THE VISUALIZATION


1. Clone the folder from the github repository  into the local file system where the XAMPP server root files are located.
2. Start the server using the XAMPP console.
3. Open the web browser and browse the link "http://localhost/project-0-varshateratipally/submissions/teratipally/”.
4. The visualizations will appear on the web page.


SCRENSHOTS


Part Two: Replication of bar graph in tableau

./submissions/teratipally/screenshots/PartOne_Bargraph.png

Scatter Plots:

Replication of scatter plots in tableau

./submissions/teratipally/screenshots/PartFive_ScatterPlot_Anscombe_I.png
./submissions/teratipally/screenshots/PartFive_ScatterPlot_Anscombe_II.png
./submissions/teratipally/screenshots/PartFive_ScatterPlot_Anscombe_III.png
./submissions/teratipally/screenshots/PartFive_ScatterPlot_Anscombe_IV.png




References:

http://alignedleft.com/tutorials/d3
https://d3js.org/
https://www.w3schools.com/css/css3_gradients.asp
http://stackoverflow.com/questions/16152144/change-combo-box-style

Inspiration for theme:

http://www.ozee.com/



















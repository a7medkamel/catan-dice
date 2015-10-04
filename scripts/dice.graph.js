function graph(data)
{
	// Create the Line chart object. The arguments are the canvas ID and the data array.
	var line = new RGraph.Bar("graph", data);
	
	// The way to specify multiple lines is by giving multiple arrays, like this:
	// var line = new RGraph.Line("myLine", [4,6,8], [8,4,6], [4,5,3]);
	
	// Configure the chart to appear as you wish.
	line.Set('chart.background.grid', true);
	line.Set('chart.linewidth', 2);
	line.Set('chart.gutter.left', 35);
	line.Set('chart.hmargin', 5);
	/* if (!document.all || RGraph.isIE9up()) {
		line.Set('chart.shadow', true);
	} */
	line.Set('chart.tickmarks', null);
	//line.Set('chart.units.post', 'k');
	line.Set('chart.colors', ['red', 'green']);
	line.Set('chart.background.grid.autofit', true);
	line.Set('chart.background.grid.autofit.numhlines', 10);
	line.Set('chart.curvy', true);
	line.Set('chart.curvy.factor', 0.5); // This is the default
	line.Set('chart.animation.unfold.initial',0);
	
	line.Set('chart.labels', ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
	// Now call the .Draw() method to draw the chart.
	
	RGraph.Clear($("#graph").get(0));
	line.Draw();
}
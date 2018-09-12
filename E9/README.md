# HTML, CSS, JS, jQuery Tutorials



## Exercise 9 - Copying a traffic light

  

	- Copy the main div container in your html and paste it under it
	
	- You may need to change your css to see both traffic lights next to each other
	
	- Change the children ids each but adding a parent-specific suffix like _1 and _2
	
	- Change your css since you have changed your ids
	
	- Copy the code of lines where you fade out yellow and green to begin and apply them to the yellow and green of the copied div container
	
	- Change your boolean variable to an map with two attributes called like your suffixed and the value true
	
	- Add a parameter to your function called sSuffix
	
	- Change your if clause in your function to your map getting the value for the key sSuffix
	
	- Apply to all selectors in your function the sSuffix, i.e. $('#red') to $('#red' + sSuffix)
		
	- Implement in the keypress event an if statement with the condition Math.random() > 0.5 
	
		- For true, you call your function with the suffix you used for the first traffic light
		
		- For false, you call your function with the suffix you used for the second traffic light


Now you can just press any key of your keyboard an one of the traffic lights will switch its status


You can find a sample solution in the index.html file. You do not need to use the sample solution as the exercises are not based on specifications which haven't been mentioned in the task. So you can just continue with your HTML file.
# HTML, CSS, JS, jQuery Tutorials



## Exercise 8 - Building a traffic light

  

	- Create a script tag in your body where you add now all your js code
	
	- Add a boolean variable, meaning if your traffic light is red or green
	
	- Fade out the yellow div and the green div with .fadeTo(500, 0.2);
	
	- Create a function lightSwitch
	
	- Implement a simple if else checking your boolean variable
	
	- If you traffic light is red and should get green
	
		- Add a .fadeTo(500, 1) to the yellow light, then add a delay of 800ms and the fade it out again to .fadeTo(500, 0.2)
		
		- Add a delay of 1300s to the red light (wait until yellow appears) and fade it then out with .fadeTo(500, 0.2)
		
		- Add an done handler to the promise of your yellow light (look into solution) and add into the function a .fadeTo(500, 1) to the green light
		
		- Set your boolean to false
		
	- If your traffic light is green and should get red
	
		- Add a .fadeTo(500, 0.2) to your green light
		
		- Copy the line for the yellow light and add a delay of 500ms before the first fade
		
		- Add an done handler to the promise of your yellow light (like in the true statement) and add the .fadeTo(500, 1) to your red light
		
		- Set your boolean to true
		
	- Add a keypress event to your document calling your lightSwitch function



You can find a sample solution in the index.html file. You do not need to use the sample solution as the exercises are not based on specifications which haven't been mentioned in the task. So you can just continue with your HTML file.
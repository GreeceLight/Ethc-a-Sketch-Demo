(Old way I thought to do it)
Creating of the Etch a Sketch page
1. Create a container div in the HTML file to contain all 16 squares
2. Have a CSS default class for all squares to parent from.
3. Create 16 divs using JS that will merely appear on the screen for now
3.1? Have the divs have a hover effect on them
4. Have the squares calculate how large they have to be to fit in the container div
4.1 Having the squares divided by the container's size and then divided again as the cubes are padded for their space taken (20px padding = 40px width)

(Current way it works)
Have divs be created not to a specific size but to the correct number
Have a calculation to get the correct width and amount of grid squares in the grid layout
Use the calculation to have the grid be made
Merely have all the squares fall into place
On the event of a hover over the squares it will change to a random color with values between 1-255

Paint 2D is program that allows you to draw various shapes on a HTML page.  It uses a 600px by 600px HTML canvas tag.  It uses JavaScript to allow you to draw free-hand, straight lines, circles, rectangles, and spirals.  It also has a clear button to clear the canvas (drawing area).  To free draw click and hold the mouse while moving it.  To make a line, circle, or square hold the mouse and release when you have your desired size.  To make a spiral click and hold mouse down and it will draw lines from the original click to where you move the cursor.

Global Variables/Constants
    • canvas-the canvas element
    • con-context of canvas
    • xDown- initial x coordinate when mouse is down; set by catchMouse()
    • yDown- initial y coordinate when mouse is down; set bt catchMouse()
    • xCoord- an x-axis coordinate; set by getCoords()
    • yCoord- an y-axis coordinate; set by getCoords()
    • radius- distance from (xDown, yDown) to (xCoord, yCoord); set by getCoords()
    • width- xCoord – xDown; for Rectangle; set by getCoords()
    • height- yCoord – yDown; for Rectangle; set by getCoords()
    • mouseDown- setInterval event; set onmousedown; clear onmouseup
    • shape- determines draw method to call onmousedown; set by setShape()
    • image- canvas image; set in catchMouse
    • offsetX- x-axis offset; constant(-100)
    • offsetY- y-axis offset; constant(-25)

General methods:
    • init()
        ◦ gets the canvas element and context
        ◦ checks for mouse down (calls catchMouse), and mouse up (calls release)
    • catchMouse(e)
        ◦ sets xDown, yDown with offset
        ◦ if click was in canvas sets initial values for xCoord, yCoord, radius, width, height
        ◦ saves the canvas image
        ◦ sets the mouseDown interval (20)
        ◦ sends to appropriate shape function at interval
    • release(e)
        ◦ clears the mouseDown interval
    • getCoords(e)
        ◦ sets xCoord, yCoord, radius, width, height
        ◦ based on current position of cursor
    • setShape()
        ◦ sets shape, sends to set buttons
    • setButtons()
        ◦ makes currently selected shape button green and others red
    • clean()
        ◦ clears the canvas
        ◦ puts previous image o canvas
    • checkBounds()
        ◦ returns true if click is within canvas
        ◦ returns false otherwise
    • border()
        ◦ Draws a rainbow gradient border using createLinearGradient(), fillStyle, fillRect().  
        ◦ Draws the title and author with font, fillStyle, fillText().

Drawing methods:
    • freeDraw()
        ◦ Uses beginPath, moveTo, lineTo, stroke, closePath to draw a line segment
        ◦ Uses mousedown coordinates as the starting point 
        ◦ Sends to getCoords to get ending point of line
        ◦ Saves the ending point as xDown, yDown for beginning point of next segment
    • line()
        ◦ Uses beginPath, moveTo, lineTo, stroke, closePath to draw a line segment
        ◦ Uses mousedown coordinates as the starting point 
        ◦ Uses mouseup coordinates as the ending point
    • circle()
        ◦ Uses beginPath, arc, stroke, closePath to draw a circle
        ◦ Mousedown coordinates are center of circle
        ◦ Radius of circle is distance from mousedown to mouseup
    • rectangle()
        ◦ Uses beginPath, strokeRect, stroke, closePath
        ◦ Mousedown coordinates are a corner
        ◦ Height is mouseup Y – mousedown Y
        ◦ Width is mouseupX – mousedown X
    • spiral()
        ◦ Uses beginPath, moveTo, lineTo, stroke, closePath to draw a line segment
        ◦ Uses mousedown coordinates as the starting point 
        ◦ Uses mouse location as the endpoint until mouseup
    • clearScreen()
        ◦ clears screen

// Create a webpage with a 16x16 grid of square divs 

// Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!

// Best to put your grid squares inside another “container” div (that one can go directly in your html)

// There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them: 
// flexbox



// selects the unsorted list 
let ul = document.getElementById("mainGrid")
var grid = 256;






function changeGridSize(number) {
  
  // funtion to delete all the div elements, this is to eleminate the grid
  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  }
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
  }

  // receives the number of the new grid
  grid = prompt("Please enter the grid size.");

  // gives the necessary style to the dom element
  styleGrid = document.getElementById("mainGrid");
  styleGrid.style.gridTemplateColumns = `repeat(${grid}, 1fr)`; 
  styleGrid.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

  grid = grid*grid;

  // removes the grid if exists before creating a new one
  document.getElementsByClassName("grid").remove();
  
  // creates the grid
  for (i = 0; i < grid; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "grid";
    newDiv.id = `coiso${i}`
    ul.appendChild(newDiv);
  

  
    // selects every new item created
    let css = document.getElementById(`coiso${i}`);
    
    // changes the background color when mouse passes by
    css.addEventListener("mouseenter", function(e) {
      // highlight the mouseenter target
      e.target.style.backgroundColor = "purple";
    });
  }

}








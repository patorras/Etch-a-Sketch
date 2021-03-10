// Create a webpage with a 16x16 grid of square divs 

// Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!

// Best to put your grid squares inside another “container” div (that one can go directly in your html)

// There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them: 
// flexbox



// selects the unsorted list 
let ul = document.getElementById("mainGrid")
let grid = 256;



function changeGridSize(number) {
  grid = prompt("Please enter the grid size.");

  return grid = grid*grid;
}



// creates items
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




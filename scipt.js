// Create a webpage with a 16x16 grid of square divs 

// Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!

// Best to put your grid squares inside another “container” div (that one can go directly in your html)

// There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them: 
// flexbox


let mainGrid = document.getElementById("mainGrid");

let ul = document.getElementById("x")




// add one more square




for (i = 0; i < 10; i++) {
  let newDiv = document.createElement("li");
  newDiv.className = "grid";
  newDiv.id = `coiso${i}`
  ul.appendChild(newDiv);
}

for (i = 0; i < 10; i++) {
  let css = document.getElementById(`coiso${i}`);
// This handler will be executed only once when the cursor
// moves over the unordered list
css.addEventListener("mouseenter", function(e) {
  // highlight the mouseenter target
  e.target.style.backgroundColor = "purple";
});
}

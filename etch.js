for (let i = 0; i <= 255; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.className = "grid-square";
  document.getElementById("container").appendChild(gridSquare);
}

// need to create the background which generates on button click
// instead of using css hover effect when mouse is over something, use eventlistener
// event listener on hover. so when mouse hovers, colour is permenrantly changd.
// can check out the evet 'transition end' -> so when initial hover transition happens
// colour change sticks

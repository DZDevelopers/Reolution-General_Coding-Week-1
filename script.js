let count = 0;
let Light = false;
let state = "Dark"
const button = document.getElementById("treat-btn");
const mbutton = document.getElementById("mode-btn");
const mode = document.getElementById("mode");
const countDisplay = document.getElementById("treat-count");
const B = document.body;

button.addEventListener("click", function () {
  count++;

  if (count === 1) {
    button.textContent = `Clicked ${count} time!`;
  } else {
    button.textContent = `Clicked ${count} times!`;
  }

  countDisplay.textContent = count;

});
mbutton.addEventListener("click", function () {

    if (!Light) 
    {
        state = 'Dark';
        Light = true;
        mode.textContent = state;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.querySelectorAll("a").forEach(a => a.style.color = "black");
        document.querySelectorAll("button").forEach(btn => {
          btn.style.color = "white";
          btn.style.backgroundColor = "black";
        })
    }
    else 
    {
        state = "Light";
        Light = false;
        mode.textContent = state;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelectorAll("a").forEach(a => a.style.color = "white");
        document.querySelectorAll("button").forEach(btn => {
          btn.style.color = "black";
          btn.style.backgroundColor = "white";
        });
    }
});



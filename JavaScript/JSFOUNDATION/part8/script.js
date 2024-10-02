// example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").textContent = "Button is clicked";
  });

// example 2

document
  .querySelector("#highlightFirstCity")
  .addEventListener("click", function () {
    document.querySelector(".chai").classList.toggle("highlight");
  });

// example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  document.getElementById("coffeeType").textContent = "Espresso";
});

// example 4

document.querySelector("#addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li")
  newItem.textContent = "Eggs"
  document.querySelector("#shoppingList").appendChild(newItem)
});


// example 5

document.getElementById("removeLastTask").addEventListener("click", function(){
  let taskList = document.getElementById("taskList")
  taskList.lastElementChild.remove()
});


// example 6

document.getElementById("clickMeButton").addEventListener("mouseover", function(){
  document.getElementById("example-6").style.backgroundColor = "#11fa92";
});


// example 7

document.querySelector("#teaList").addEventListener("click", function(){
  if (event.target && event.target.matches(".teaItem")) {
    alert("You Selected:" + event.target.textContent)
  }
})

// example 8



document.getElementById("feedbackForm").addEventListener("submit", function(){
  event.preventDefault()
  let feedback = document.getElementById("feedbackInput").value
  document.getElementById(
    "feedbackDisplay"
  ).textContent = `${document.querySelector("label").innerText} is ${feedback}`;
});

// example 9

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "DOM fully Loaded"
})

// example 10 

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let decText = document.getElementById("descriptionText");
    decText.classList.toggle("highlight")
})
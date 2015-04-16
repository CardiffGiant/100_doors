
function setDoors() {
   var frame = document.getElementById("doors");
   var button = document.getElementById("open");
   var list = document.createElement("ul");
   var i;
   for (i=1; i<101; i+=1) {
      var doorFrame = document.createElement("li");
      var door = document.createElement("div");
      door.setAttribute("class", "door");
      doorFrame.setAttribute("class", "closed");
      doorFrame.setAttribute("id", i);
      doorFrame.appendChild(door);
      door.innerText = i;
      list.appendChild(doorFrame);
   }
   frame.appendChild(list);
   button.addEventListener("click", openDoors);
}
var doorArray = [];
var rounds = [];
function openDoors() {
   var i, j;
   for (i=1; i<101; i+=1) {
      for(j=1; j<101; j+=1) {
         if(j%i===0) {
            doorArray.push(j);
         }
         
      }
      rounds.push(doorArray.length);
      console.log(i);
   }
   //console.log(doorArray);
   console.log(rounds);
   showOpening();
}
var k=0;
var round = 0;
function showOpening() {
   
   
   setInterval(function() {if(k<doorArray.length) {openTheDoor(k);k+=1;} else {setTimeout(function() {document.getElementById("passes").innerText = 100})}}, 50);
   
}
function openTheDoor(doorId) {
   var out = document.getElementById("passes"), div, target;
   out.innerText = round+1;
   target = document.getElementById(doorArray[doorId]);
   div = target.firstElementChild;
   if(target.className === "closed") {
      target.className = "opened";
      $(div).animate({width: "27px" });
   } else {
      target.className = "closed";
      $(div).animate({width: "0px" });
   }
   if(doorId === rounds[round]) {
      round++;
   }
}

window.onload = setDoors;

function setDoors() {
   var frame = document.getElementById("doors");
   var button = document.getElementById("open");
   var list = document.createElement("ul");
   var i;
   for (i=1; i<101; i+=1) {
      var door = document.createElement("li");
      door.setAttribute("class", "closed");
      door.setAttribute("id", i);
      door.innerText = i;
      list.appendChild(door);
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
         //var target = document.getElementById(j);
         //var numId = parseInt(target.id);
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
   var out = document.getElementById("passes");
   out.innerText = round+1;
   var target = document.getElementById(doorArray[doorId]);
   if(target.className === "closed") {
      target.className = "opened";
   } else {
      target.className = "closed";
   }
   if(doorId === rounds[round]) {
      round++;
   }
}

window.onload = setDoors;
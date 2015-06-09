var demo = {
   
   startButton: document.getElementById("startButton"),
   frame: document.getElementById("doors"),
   doorArray: [],
   rounds: [],
   k: 0,
   currentRound: 0,

   // build the HTML unordered list of divs
   // visual representation of 100 doors
   buildDoors: function() {
      var button, list, i, doorframe, door;
      
      list = document.createElement("ul");

      for (i=1; i<101; i+=1) {
         
         doorFrame = document.createElement("li");
         doorFrame.setAttribute("class", "closed");
         doorFrame.setAttribute("id", i);
         
         door = document.createElement("div");
         door.setAttribute("class", "door");
         door.innerText = i;
         
         doorFrame.appendChild(door);
         list.appendChild(doorFrame);
      }
      
      demo.frame.appendChild(list);
      
   },
   
   // Sets click event for UI button
   buildAndSetEvents: function() {
      demo.buildDoors();
      demo.startButton.addEventListener("click", demo.simulateAndDisplay);
   },
   
   // Resets the display and all necessary variables
   // Used if user clicks button multiple times
   resetDemoAndRun: function() {
      demo.k = 0;
      demo.currentRound = 0;
      demo.frame.innerHTML = '';
      demo.buildDoors();
      setInterval(demo.showSimulation, 80);
   },
   
   // Runs the simulation
   // Collects the entire sequence first and then
   // begins the animations.
   simulateAndDisplay: function() {
      if(demo.frame.firstElementChild.firstElementChild.className === "opened") {
         demo.resetDemoAndRun();
      } else {
         var i, j;
         for (i=1; i<101; i+=1) {
            for(j=1; j<101; j+=1) {
               if(j%i===0) {
                  demo.doorArray.push(j);
               }
            }
            demo.rounds.push(demo.doorArray.length);
         }
         setInterval(demo.showSimulation, 80);
      }
   },
   
   // Animates the "doors" if not at the end of the collection
   // Ouputs the pass count
   showSimulation: function() {
      if(demo.k<demo.doorArray.length) {
         (demo.openTheDoor(demo.k));demo.k+=1;
      } else {
         setTimeout(function() {document.getElementById("passes").innerText = 100});
      }
   },
   
   // Animation of door opening or closing
   // Uses CSS classes to set attributes
   openTheDoor: function(doorIndex) {
      var door, targetInnerDiv, output;
      output = document.getElementById("passes");
      output.innerText = demo.currentRound+1;
      door = document.getElementById(demo.doorArray[doorIndex]);
      targetInnerDiv = door.firstElementChild;
      //console.log('got here');
      if(door.className === "closed") {
         door.className = "opened";
         $(targetInnerDiv).animate({width: "27px" });
      } else {
         door.className = "closed";
         $(targetInnerDiv).animate({width: "0px" });
      }
      if(doorIndex === demo.rounds[demo.currentRound]) {
         demo.currentRound++;
      }
   }
}

// Builds the display on window load
window.onload = demo.buildAndSetEvents;
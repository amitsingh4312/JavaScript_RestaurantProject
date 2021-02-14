function removeToDo(row){           //removes data from Pending, and adds it to In-progress
  var el = document.getElementById(row.parentNode.id);
  var selfId = row.id;
  el.removeChild(row);
  addInProgress(selfId);
};

function addToDoList() {          //adds data in to-do list, after validating it.
  var val = document.getElementById('item').value;
  val = val.trim();
  if (val == '') {
    alert("Please enter an item to do");
  } 
  if(!val)
      return;
  var el = document.getElementById('todo');
  for(const tr of el.querySelectorAll("tr")){
    const tid = tr.id;
    if(tid == val)  return;
  }
  var node = document.createElement("tr");
  node.setAttribute("id", val);
  var item = document.createElement("td");
  var text1 = document.createTextNode(val);
  item.appendChild(text1);
  var rem = document.createElement("td");
 var buton = document.createElement("button");      //creates a new button alongside the written text in order to give it a functionality to shift it from one row to other
  buton.onclick = function(){removeToDo(node);};
 var text2 = document.createTextNode("x");
  buton.appendChild(text2);
  rem.appendChild(buton);
  node.appendChild(item);
  node.appendChild(rem);
  el.appendChild(node);
 document.getElementById("item").value=""; 	
};

function removeInProgress(row){                   //removes the node from In-Progress and adds it under Completed Section 
  var el = document.getElementById(row.parentNode.id);
  var selfId = row.id;
  el.removeChild(row);
  addInComplete(selfId);
};

function addInProgress(val) {         //adds data in In-Progress section
  val = val.trim();
  if(!val)
      return;
  var el = document.getElementById('inprogress');
  for(const tr of el.querySelectorAll("tr")){
    const tid = tr.id;
    if(tid == val)  return;
  }
  var node = document.createElement("tr");
  node.setAttribute("id", val);
  var item = document.createElement("td");
  var text1 = document.createTextNode(val);
  item.appendChild(text1);
  var rem = document.createElement("td");
 var buton=
  document.createElement("button");
  buton.onclick = function(){removeInProgress(node);};        //calls a function to remove data from InProgress and add it to Completed Section
 var text2 = document.createTextNode("X");
  buton.appendChild(text2);
  rem.appendChild(buton);
  node.appendChild(item);
  node.appendChild(rem);
  el.appendChild(node);
};

function addInComplete(val) {             //adds data in Completed Section
  val = val.trim();
  if(!val)
      return;
  var el = document.getElementById('completed');
  for(const tr of el.querySelectorAll("tr")){
    const tid = tr.id;
    if(tid == val)  return;
  }
  var node = document.createElement("tr");
  node.setAttribute("id", val);
  var item = document.createElement("td");
  var text1 = document.createTextNode(val);
  item.appendChild(text1);
  var rem = document.createElement("td");
 var text2 = document.createTextNode("Done");
  rem.appendChild(text2);
  node.appendChild(item);
  node.appendChild(rem);
  el.appendChild(node);
};

function resetAll(){            // resets all the values and sets it to blank
  const t1 = document.getElementById('todo');
  const t2 = document.getElementById('inprogress');
  const t3 = document.getElementById('completed');
 for(const t of t1.querySelectorAll("tr") ){
    t1.removeChild(t);
  }
  for(const t of t2.querySelectorAll("tr") ){
    t2.removeChild(t);
  }
  for(const t of t3.querySelectorAll("tr") ){
    t3.removeChild(t);
  }
  document.getElementById("item").value="";
}

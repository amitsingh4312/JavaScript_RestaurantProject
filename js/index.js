window.onload = function(){
  console.log(displayData());   

  var clearStorage = function(){    //clear all previous data from the location storage when page loads for the first time, otherwise leave...

    window.addEventListener("unload", function(){
      var count = parseInt(sessionStorage.getItem('counter') || 0);
      sessionStorage.setItem('counter', ++count)
    }, false);
  
    console.log(sessionStorage.getItem("counter"));
    
    if (sessionStorage.getItem('counter') === null) {
     localStorage.clear();
     setTimeout( function() { reset();},250);
    }
  }



  clearStorage(); //calling function to clear storage.

  




  var reset = function(){     //reloads the page
        location.reload();
    }


function addData(username, address){        // combines Customer FullName and address in obj
  var obj = " Customer Name : " +username+" Address : " +address;
  return obj;
}

function displayData(){   //display all data from localstorage
  for (var i = 0; i < localStorage.length; i++) {
    
var key = localStorage.key(i);
var value = localStorage.getItem(key);
console.log('Key: ' + key + ', Value: ' + value);  

value = value.replace("Address", "<br>Address/Details");     
document.getElementById("entry").innerHTML +="Phone Number: " +key+"<br>" +value +"<br><hr>";       //displays data orderly in the html tah


}

document.getElementById("delValue").onclick = function(){   //Deletes all the data from the locationstorage
  localStorage.clear();
  location.reload();
}

  document.getElementById("addValue").onclick = function(e){    //gets value from the input fields, validates them, and stores data in the location storage
    e.preventDefault();

    var phoneno = /^\d{10}$/;
    var nameChk = /^[a-zA-Z ,.]{1,}$/;
  nm = document.getElementById("num").value;
  un = document.getElementById("username").value;
  ad = document.getElementById("address").value;
   if(un == "" || ad == ""){
     alert("Fill all the Fields Please");
   }else if(!nm.match(phoneno)){
    alert("Phone Number should be 10 digit and not contain Alphabet");
   }else if(!un.match(nameChk)){
    alert("Customer Name should not contain a Number or Special Characters");
   }else{
     console.log(addData(un, ad));
    //  alert(addData(un, ad));
    
    localStorage.setItem(nm,addData(un, ad));             //stores data in the locationstorage with phone number as key and (name + details) as
   }

   setTimeout( function() { reset();},100);     //reloads the page to display new data.

}
}
}
    
    
    
window.onload = setInterval(displayClock,1000); 

function displayClock() {
var date = new Date();
var time = date.toLocaleTimeString();
document.getElementById("time").innerHTML = time;
};

function addComment() {
  var cs = document.getElementById('commentSection');
  var newComment = document.getElementById('comment');
  var num = (document.getElementById('noOfComments').value -1 ) + 2;
  var newdiv = document.createElement('div');
  var divId = 'comment' + num;
  newdiv.setAttribute('id',divId);
  newdiv.setAttribute('class','row form-control');
  newdiv.innerHTML = newComment.value;
  document.getElementById('comment').value = "";

  var newbutton = document.createElement('button');
  var buttonId = 'btn' + num;
  newdiv.setAttribute('id',buttonId);
  newbutton.setAttribute('class','btn btn-danger col-md-offset-9');
  newbutton.setAttribute('value','remove comment');
  newbutton.setAttribute('onclick','removeComment(divId)');

  cs.appendChild(newdiv);
  newdiv.appendChild(newbutton);

};

function removeComment(divNum) {
  var d = document.getElementById('commentSection');
  var olddiv = document.getElementById(divNum);
  d.removeChild(olddiv);
};


function validateLogInForm() {
    var username = document.getElementById("user").value;
    if (username == "") {
        alert("Name shouldn't be empty");
        return false;
    }

    var password = document.logInForm.pwd.value;
    if(password != "password123") {
    	alert("Incorrect Password");
    	return false;
	}
};

var places = ["dudhsagar-falls: Goa" ,"Alappuzha", "Andaman" ,"kodaikanal"];

function viewPlaces() {
	document.getElementById("place").innerHTML = places;
	};

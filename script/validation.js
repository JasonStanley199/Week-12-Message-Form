function validateForm () {
	var message = document.getElementById("message").value;
	var stuid = document.getElementById("stuid").value;

	var errMsg = "";							
	var result = true;



	if (message == "") {
		errMsg += "Message can't be empty.\n";
		}
		
	if (stuid == "") {
		errMsg += "Student ID can't be empty\n";
		}

	if (stuid.indexOf('s') !== 0 ) {
		errMsg += "Student Id must start with the letter 's' \n";
		}

	if (errMsg != "") {
		alert (errMsg);
		result = false;
		} 
		return result;
		}





/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
	var msgForm = 	document.getElementById("msgform");

	/* assigns functions to corresponding events */
	msgForm.onsubmit = validateForm;
}

/* execute the initialisation function once the window*/
window.onload = init;

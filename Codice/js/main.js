function validInput(e) {
	e.style.color = "black";
	e.style = "box-shadow: 0 0 8px rgba(0, 0, 0, .1);";

	var parent = e.parentElement;

	if (parent.lastChild.tagName == "SPAN" && parent.lastElementChild.innerText == "Input non valido") {
		parent.removeChild(parent.lastChild);
	}
}


function invalidInput(e) {
	e.style.color = "red";
	e.style = "--box-shadow-color: red; box-shadow: 0px 0px 5px var(--box-shadow-color);";
	var parent = e.parentElement;

	if (parent.children.length == 1 || parent.lastElementChild.className == "normalInput") {
		var span = document.createElement("SPAN");
		span.textContent = "Input non valido"
		span.style.color = "red";
		span.style.marginTop = "10%";
		parent.appendChild(span);
	}
}


function escapeHtml(text) {
	try {
		var map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		};

		return text.replace(/[&<>"']/g, function (m) {
			return map[m];
		});
	} catch (error) {}

}

//check the data compiled by the user
function checkValues() {


	//get all of the form input elements
	var nameElement = document.getElementsByName('name')[0];
	var surnameElement = document.getElementsByName('surname')[0];
	var streetNumberElement = document.getElementsByName('streetNumber')[0];
	var streetElement = document.getElementsByName('street')[0];
	var birthdateElement = document.getElementsByName('birthdate')[0];
	var genderElement = document.getElementsByName('gender')[0];
	var cityElement = document.getElementsByName('city')[0];
	var zipElement = document.getElementsByName('zip')[0];
	var phoneElement = document.getElementsByName('phone')[0];
	var phonePrefixElement = document.getElementsByName('countryCode')[0];
	var emailElement = document.getElementsByName('email')[0];
	var hobbyElement = document.getElementsByName('hobby')[0];
	var jobElement = document.getElementsByName('job')[0];

	//get all of the form input element values

	var name = escapeHtml(nameElement.value);
	var surname = escapeHtml(surnameElement.value);
	var streetNumber = escapeHtml(streetNumberElement.value);
	var street = escapeHtml(streetElement.value);
	var birthdate = new Date(escapeHtml(birthdateElement.value));
	var gender = escapeHtml(genderElement.value);
	var city = escapeHtml(cityElement.value);
	var zip = escapeHtml(zipElement.value);
	var phone = escapeHtml(phoneElement.value);
	var phonePrefix = escapeHtml(phonePrefixElement.value);
	var email = escapeHtml(emailElement.value);
	var hobby = escapeHtml(hobbyElement.value);
	var job = escapeHtml(jobElement.value);


	var regexPhone = /^\d+$/;
	var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var regexText = /[a-z+A-Z ]/g;

	var regexStreetNumber = /[a-z+A-Z+\d]/g;

	var regexZip = /[0-9]/;

	var next = true;

	if (name.length > 0 && name.length <= 50 && regexText.test(name)) {
		validInput(nameElement);

	} else {
		invalidInput(nameElement);
		next = false;
	}
	if (surname.length > 0 && surname.length <= 50 && regexText.test(surname)) {
		validInput(surnameElement);

	} else {
		invalidInput(surnameElement);
		next = false;
	}
	if (streetNumber.length > 0 && streetNumber.length <= 50 && regexStreetNumber.test(streetNumber)) {
		validInput(streetNumberElement);

	} else {
		invalidInput(streetNumberElement);
		next = false;
	}

	if ((new Date() > birthdate)) {
		validInput(birthdateElement);

	} else {
		invalidInput(birthdateElement);
		next = false;
	}
	if ((gender === "M" || gender === "F" || gender === "altro")) {
		validInput(genderElement);

	} else {
		invalidInput(genderElement);
		next = false;
	}


	if (city.length > 0 && city.length <= 50 && regexText.test(city)) {
		validInput(cityElement);

	} else {
		invalidInput(cityElement);
		next = false;
	}

	if (zip.length > 0 && zip.length <= 5 && regexZip.test(zip)) {
		validInput(zipElement);

	} else {
		invalidInput(zipElement);
		next = false;
	}

	if (street.length > 0 && street.length <= 50 && regexText.test(street)) {
		validInput(streetElement);
	} else {
		invalidInput(streetElement);
		next = false;
	}

	if (regexPhone.test(phone) && phone.length <= 10) {
		validInput(phoneElement);


	} else {
		invalidInput(phoneElement);
		next = false;
	}

	if (phonePrefix.length > 0 && phonePrefix.length <= 5) {
		validInput(phonePrefixElement);

	} else {
		invalidInput(phonePrefixElement);
		next = false;
	}

	if (regexEmail.test(String(email).toLowerCase())) {
		validInput(emailElement);

	} else {
		invalidInput(emailElement);
		next = false;
	}

	if (hobby.length <= 500) {
		validInput(hobbyElement);

	} else {
		invalidInput(hobbyElement);
		next = false;
	}

	if (job.length <= 500) {
		validInput(jobElement);
	} else {
		invalidInput(jobElement);
		next = false;
	}


	if (next) {
		// alert("La validazione dei dati riuscita");
		$('.parent').notify("La validazione dei dati riuscita",{ position:"bottom center" }, "success");
		return true;
	} else {
		// alert("La validazione dei dati non riuscita");
		$('.parent').notify("La validazione dei dati non riuscita",{ position:"bottom center" }, "error");
		return false;
	}
}

function makeTable(flag) {

	var inputs = document.querySelectorAll('input');
	var selects = document.querySelectorAll('select');
	var textareas = document.querySelectorAll('textarea');
	var tables = document.querySelectorAll('childTable');
	var tableElements = document.querySelectorAll('tr, td');
	var proseguiButton = document.getElementsByClassName("nextPage")[0];
	var azzeraButton = document.getElementsByClassName("azzeraButton")[0];

	if (flag) {
		inputs.forEach(element => {
			if (element.type != "button") {
				element.readOnly = true;
				element.className = "";
			}
		});
		selects.forEach(element => {
			element.disabled = true;
		});
		textareas.forEach(element => {
			element.readOnly = true;
			element.className = "long";
		});

		tables.forEach(element => {
			if (element.className != "parentTable") {
				element.style = "border-collapse: collapse;border: solid black 1px";
			}
		});

		tableElements.forEach(element => {
			if (element.parentElement.parentElement.className != "parentTable" || element.parentElement.parentElement.parentElement.className != "parentTable") {
				element.style = "border: solid black 1px";
			}
		});

		var newbutton = document.createElement("INPUT");
		newbutton.type = "submit";
		newbutton.value = "Prosegui";

		proseguiButton.parentElement.appendChild(newbutton);
		proseguiButton.value = "Modifica";
		proseguiButton.setAttribute("onClick", "next(false);");

		azzeraButton.parentElement.removeChild(azzeraButton);

	} else {
		inputs.forEach(element => {
			element.readOnly = false;
			element.className = "normalInput";
		});

		textareas.forEach(element => {
			element.readOnly = false;
			element.className = "long normalTextarea";
		});

		tables.forEach(element => {
			element.removeAttribute("style");
		});

		selects.forEach(element => {
			element.disabled = false;
		});

		tableElements.forEach(element => {
			element.removeAttribute("style");
		});

		var proseguiParent = proseguiButton.parentElement;
		
		if (proseguiParent.children.length == 2) {
			proseguiParent.removeChild(proseguiParent.children[proseguiParent.children.length - 1]);
		}

		proseguiButton.value = "Prosegui";
		proseguiButton.className = "nextPage"
		proseguiButton.setAttribute("onClick", "next(true)");

		var newbutton = document.createElement("INPUT");
		newbutton.type = "button";
		newbutton.value = "Azzera";
		newbutton.className = "azzeraButton";
		newbutton.setAttribute("onClick", "clearInputs()");

		proseguiButton.parentElement.appendChild(newbutton);

	}

}

function next(flag) {
	if (checkValues()) {
		makeTable(flag);
	} else {

	}
}

function clearInputs() {
	var inputs = document.querySelectorAll('input');
	var textareas = document.querySelectorAll('textarea');

	inputs.forEach(element => {
		if (element.type != "button") {
			
			element.value = "";
		}
	});
	textareas.forEach(element => {
		element.value = "";
	});

}

function updateValue() {
	document.getElementsByName('genderHidden')[0].value = document.getElementsByName('gender')[0].value;
	document.getElementsByName('countryCodeHidden')[0].value = document.getElementsByName('countryCode')[0].value;
}

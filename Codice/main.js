//get all of the form input elements
var nameElement = document.getElementsByName('name')[0];
var surnameElement = document.getElementsByName('surname')[0];
var streetNumberElement = document.getElementsByName('streetNumber')[0];

var birthdateElement = document.getElementsByName('birthdate')[0];
var genderElement = document.getElementsByName('gender')[0];
var cityElement = document.getElementsByName('city')[0];
var zipElement = document.getElementsByName('zip')[0];
var phoneElement = document.getElementsByName('phone')[0];
var phonePrefixElement = document.getElementsByName('countryCode')[0];
var emailElement = document.getElementsByName('email')[0];
var hobbyElement = document.getElementsByName('hobby')[0];
var jobElement = document.getElementsByName('job')[0];



function validInput(e) {

    alert('validInput');
    e.style.color = "black";
    e.style = "box-shadow: 0 0 8px rgba(0, 0, 0, .1);";

    var parent = e.parentElement;
    if (parent.children.length == 2) {
        parent.removeChild(parent.lastChild);
    }

    console.log(e);
}


function invalidInput(e) {
    e.style.color = "red";
    e.style = "--box-shadow-color: red; box-shadow: 0px 0px 5px var(--box-shadow-color);";
    var parent = e.parentElement;

    if (parent.children.length == 1) {
        var span = document.createElement("SPAN");
        span.textContent = "Input non valido"
        span.style.color = "red";
        span.style.paddingTop = "10%";
        parent.appendChild(span);
    }

    console.log(e);
}

function checkValues() {

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
        } catch (error) {
            console.log('one or more inpts undefined');

        }

    }





    //get all of the form input element values

    var name = escapeHtml(nameElement.value);
    var surname = escapeHtml(surnameElement.value);
    var streetNumber = escapeHtml(streetNumberElement.value);
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

    var regexZip = /[0-9]{5}/;

    // console.log(regex.test(phone));
    console.log("test: " + regexPhone.test(phone));

    var next = true;

    if (name.length > 0 && name.length <= 50 && regexText.test(name)) {
        validInput(nameElement);

    } else {
        invalidInput(nameElement);
        next = false;
    }
    if (surname.length > 0 && surname.length <= 50 && regexText.test(surname) && next) {
        validInput(surnameElement);

    } else {
        invalidInput(surnameElement);
        next = false;
    }
    if (streetNumber.length > 0 && streetNumber.length <= 50 && regexStreetNumber.test(streetNumber) && next) {
        validInput(streetNumberElement);

    } else {
        invalidInput(streetNumberElement);
        next = false;
    }

    if ((new Date() > birthdate) && next) {
        validInput(birthdateElement);

    } else {
        invalidInput(birthdateElement);
        next = false;
    }
    if ((gender === "M" || gender === "F" || gender === "altro") && next) {
        validInput(nameElement);

    } else {
        invalidInput(genderElement);
        next = false;
    }


    if (city.length > 0 && city.length <= 50 && regexText.test(city) && next) {
        validInput(cityElement);

    } else {
        invalidInput(cityElement);
        next = false;
    }

    if (zip.length > 0 && zip.length <= 5 && regexText.test(regexZip) && next) {
        validInput(zipElement);

    } else {
        invalidInput(zipElement);
        next = false;
    }

    if (regexPhone.test(phone) && phone.lenght <= 10 && next) {
        validInput(phoneElement);


    } else {
        invalidInput(phoneElement);
        next = false;
    }

    if (phonePrefix.lenght > 0 && phonePrefix.lenght <= 5 && next) {
        validInput(phonePrefixElement);

    } else {
        invalidInput(phonePrefixElement);
        next = false;
    }

    if (regexEmail.test(String(email).toLowerCase()) && next) {
        validInput(emailElement);

    } else {
        invalidInput(emailElement);
        next = false;
    }

    if (hobby.lenght <= 500 && next) {
        validInput(hobbyElement);

    } else {
        invalidInput(hobbyElement);
        next = false;
    }

    if (job.lenght <= 500 && next) {
        validInput(jobElement);
        alert("La validazione dei dati riuscita");
        return true;
    } else {
        invalidInput(jobElement);
        next = false;
    }


    alert("La validazione dei dati non riuscita");
    return false;
}

function makeTable(flag) {

    var inputs = document.querySelectorAll('input, select');
    var tables = document.querySelectorAll('childTable');
    var tableElements = document.querySelectorAll('tr, td');
    var proseguiButton = document.getElementsByClassName("nextPage")[0];

    if (flag) {
        inputs.forEach(element => {
            if (element.type != "button") {
                element.disabled = true;
            }
        });

        tables.forEach(element => {
            if (element.className != "parentTable") {
                element.style = "border-collapse: collapse;border: solid black 1px";
            }
        });

        tableElements.forEach(element => {
            if (element.parentElement.parentElement.className != "parentTable") {
                element.style = "border: solid black 1px";
            }
        });

        var newbutton = document.createElement("INPUT");
        newbutton.type = "submit";
        newbutton.value = "Prosegui";

        proseguiButton.parentElement.appendChild(newbutton);
        proseguiButton.value = "Modifica";
        proseguiButton.setAttribute("onClick", "makeTable(false);");


    } else {
        inputs.forEach(element => {
            element.disabled = false;
        });

        tables.forEach(element => {
            console.log(element);
            element.style = "";
        });


        tableElements.forEach(element => {
            console.log(element);
            element.style = "";
        });

        var proseguiParent = proseguiButton.parentElement;

        if (proseguiParent.children.length == 2) {
            proseguiParent.removeChild(proseguiParent.children[proseguiParent.children.length - 1]);
        }

        proseguiButton.value = "Prosegui";
        proseguiButton.setAttribute("onClick", "makeTable(true);");
    }

}
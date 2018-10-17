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


    //get all of the form input elements
    var nameElement = document.getElementsByName('name')[0];
    var surnameElement = document.getElementsByName('surname')[0];
    var streetNumberElement = document.getElementsByName('streetNumber')[0];

    var birthdateElement = new Date(document.getElementsByName('birthdate')[0]);
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

    if (name.length > 0 && name.length <= 50 && regexText.test(name)) {
        validInput(nameElement);
        if (surname.length > 0 && surname.length <= 50 && regexText.test(surname)) {
            validInput(surnameElement);
            if (streetNumber.length > 0 && streetNumber.length <= 50 && regexStreetNumber.test(streetNumber)) {
                validInput(streetNumberElement);
                if (new Date() > birthdate) {
                    validInput(birthdateElement);
                    if (gender === "M" || gender === "F" || gender === "altro") {
                        validInput(nameElement);
                        if (city.length > 0 && city.length <= 50 && regexText.test(city)) {
                            validInput(cityElement);
                            if (zip.length > 0 && zip.length <= 5 && regexText.test(regexZip)) {
                                validInput(zipElement);
                                if (regexPhone.test(phone) && phone.lenght <= 10) {
                                    validInput(phoneElement);
                                    if (phonePrefix.lenght > 0 && phonePrefix.lenght <= 5) {
                                        validInput(phonePrefixElement);
                                        if (regexEmail.test(String(email).toLowerCase())) {
                                            validInput(emailElement);
                                            if (hobby.lenght <= 500) {
                                                validInput(hobbyElement);
                                                if (job.lenght <= 500) {
                                                    validInput(jobElement);
                                                    alert("validations passed");
                                                    return true;
                                                } else {
                                                    alert("job");
                                                    invalidInput(jobElement);
                                                }
                                            } else {
                                                alert("hobby");

                                                invalidInput(hobbyElement);
                                            }
                                        } else {
                                            alert("email");

                                            invalidInput(emailElement);
                                        }
                                    } else {
                                        alert("prefix");

                                        invalidInput(phonePrefixElement);
                                    }

                                } else {
                                    alert("phone");

                                    invalidInput(phoneElement);
                                }
                            } else {
                                alert("zip");

                                invalidInput(zipElement);
                            }
                        } else {
                            alert("city");

                            invalidInput(cityElement);
                        }
                    } else {
                        alert("gender");

                        invalidInput(genderElement);

                    }
                } else {
                    alert("birthdate");

                    invalidInput(birthdateElement);
                }
            } else {
                alert("street name");
                invalidInput(streetNumberElement);

            }
        } else {
            alert("surname");

            invalidInput(surnameElement);

        }
    } else {
        alert("name");
        invalidInput(nameElement);

    }


    function validInput(e) {
        alert('validInput');
        e.style.color = "black";
        e.style = "box-shadow: 0 0 8px rgba(0, 0, 0, .1);";

        alert('validInput');
        var parent = e.parentElement;
        if (parent.children.length == 2) {
            parent.removeChild(parent.lastChild);
        }
        
        console.log(e);
        alert('validInput1');
    }


    function invalidInput(e) {
        alert('invalidInput');
        e.style.color = "red";
        e.style = "--box-shadow-color: red; box-shadow: 0px 0px 5px var(--box-shadow-color);";

        alert('invalidInput2');
        var parent = e.parentElement;
        if (parent.children.length == 1) {
            var span = document.createElement("SPAN");
            span.textContent = "Input non valido"
            span.style.color = "red";
            span.style.paddingTop = "10%";
            alert('invalidInput3');
            parent.appendChild(span);
            alert('invalidInput4');
        }

        console.log(e);
        alert('invalidInput1');

    }

    // if (name.length >= 2) {
    //     if (surname.length >= 5) {
    //         if (regex.test(phone)) {
    //             if (streetNumber <4 && streetNumber > 0) {
    //                 if (username.length >= 5) {
    //                     if (password.length >= 12) {
    //                         alert("validations passed");
    //                         return true;
    //                     } else {
    //                         alert("LA PASSWORD DEVE ESSERE LUNGA 12 CARATTERI");
    //                     }
    //                 } else {
    //                     alert("la lunghezza del username deve essere di 5 caratteri");
    //                 }
    //             } else {
    //                 alert("celullare deve contenere solo numeri e deve essere lungo 10 caratteri");
    //             }

    //         } else {
    //             alert("phone deve contenere solo numeri e deve essere lungo 10 caratteri");
    //         }

    //     } else {
    //         alert("address più lungo");
    //     }
    // } else {
    //     alert("nome più lungo");
    // }

    alert("validation failed false");
    // returnToPreviousPage();
    return false;
}
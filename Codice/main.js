function checkValues() {


    function escapeHtml(text) {
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
    }

    var name = escapeHtml(document.getElementsByName('name')[0].value);
    var surname = escapeHtml(document.getElementsByName('surname')[0].value);
    var streetNumber = escapeHtml(document.getElementsByName('streetNumber')[0].value);

    var birthdate = new Date(escapeHtml(document.getElementsByName('birthdate')[0].value));
    var gender = escapeHtml(document.getElementsByName('gender')[0].value);
    var city = escapeHtml(document.getElementsByName('city')[0].value);
    var zip = escapeHtml(document.getElementsByName('zip')[0].value);
    var phone = escapeHtml(document.getElementsByName('phone')[0].value);
    var phonePrefix = escapeHtml(document.getElementsByName('countryCode')[0].value);
    var email = escapeHtml(document.getElementsByName('email')[0].value);
    var hobby = escapeHtml(document.getElementsByName('hobby')[0].value);
    var job = escapeHtml(document.getElementsByName('job')[0].value);




    var regexPhone = /^\d+$/;
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regexText = /[a-z+A-Z]/g;

    var regexStreetNumber = /[a-z+A-Z+\d]/g;

    // console.log(regex.test(phone));
    console.log("test: " + regexPhone.test(phone));

    if (name.length > 0 && name.length <= 50 && regexText.test(name)) {
        if (surname.length > 0 && surname.length <= 50 && regexText.test(surname)) {
            if (streetNumber.length > 0 && streetNumber.length <= 50 && regexStreetNumber.test(streetNumber) ) {
                if (new Date() > birthdate) {
                    if (gender === "M" || gender === "F" || gender === "altro") {
                        if (city.length > 0 && city.length <= 50) {
                            if (zip.length > 0 && zip.length <= 16) {
                                if (regexPhone.test(phone) && phone.lenght <= 50) {
                                    if (phonePrefix.lenght > 0) {
                                        if (regexEmail.test(String(email).toLowerCase())) {
                                            if (hobby.lenght <= 500) {
                                                if (job.lenght <= 500) {
                                                    alert("validations passed");
                                                    return true;
                                                } else {
                                                    alert("job");
                                                    
                                                    invalidInput(document.getElementsByName("job")[0]);
                                                }
                                            } else {
                                                alert("hobby");
                                                
                                                invalidInput(document.getElementsByName("hobby")[0]);
                                            }
                                        } else {
                                            alert("email");
                                            
                                            invalidInput(document.getElementsByName("email")[0]);
                                        }
                                    } else {
                                        alert("prefix");
                                        
                                        invalidInput(document.getElementsByName("prefix")[0]);
                                    }

                                } else {
                                    alert("phone");
                                    
                                    invalidInput(document.getElementsByName("name")[0]);
                                }
                            } else {
                                alert("zip");
                                
                                invalidInput(document.getElementsByName("zip")[0]);
                            }
                        } else {
                            alert("city");
                            
                            invalidInput(document.getElementsByName("city")[0]);
                        }
                    } else {
                        alert("gender");
                        
                        invalidInput(document.getElementsByName("gender")[0]);

                    }
                } else {
                    alert("birthdate");
                    
                    invalidInput(document.getElementsByName("birthdate")[0]);
                }
            } else {
                alert("street name");
                invalidInput(document.getElementsByName("streetname")[0]);

            }
        } else {
            alert("surname");
            
            invalidInput(document.getElementsByName("surname")[0]);

        }
    } else {
        alert("name");
        
        invalidInput(document.getElementsByName("name")[0]);
    }


    function invalidInput(e) {
        e.style.color = "red";
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
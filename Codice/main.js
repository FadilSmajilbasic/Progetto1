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

    var date = escapeHtml(document.getElementsByName('birthdate')[0].value);
    var gender = escapeHtml(document.getElementsByName('gender')[0].value);
    var job = escapeHtml(document.getElementsByName('job')[0].value);
    var city = escapeHtml(document.getElementsByName('city')[0].value);
    var zip = escapeHtml(document.getElementsByName('zip')[0].value);
    var phone = escapeHtml(document.getElementsByName('phone')[0].value);
    var email = escapeHtml(document.getElementsByName('email')[0].value);
    var hobby = escapeHtml(document.getElementsByName('hobby')[0].value);

    var regex = /^\d+$/;
    console.log(regex.test(phone));


    if (name.length >= 2) {
        if (address.length >= 5) {
            if (regex.test(phone) && phone.length == 10) {
                if (regex.test(cellphone) && cellphone.length == 10) {
                    if (username.length >= 5) {
                        if (password.length >= 12) {
                            alert("validations passed");
                            return true;
                        } else {
                            alert("LA PASSWORD DEVE ESSERE LUNGA 12 CARATTERI");
                        }
                    } else {
                        alert("la lunghezza del username deve essere di 5 caratteri");
                    }
                } else {
                    alert("celullare deve contenere solo numeri e deve essere lungo 10 caratteri");
                }

            } else {
                alert("phone deve contenere solo numeri e deve essere lungo 10 caratteri");
            }

        } else {
            alert("address più lungo");
        }
    } else {
        alert("nome più lungo");
    }

    alert("validation failed false");
    returnToPreviousPage();
    return false;




}
<?php
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isAllSet()) {
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $streetNumber = $_POST['streetNumber'];
        $street = $_POST['street'];
        $birthdate = $_POST['birthdate'];
        $genderHidden = $_POST['genderHidden'];
        $city = $_POST['city'];
        $zip = $_POST['zip'];
        $phone = $_POST['phone'];
        $countryCodeHidden = $_POST['countryCodeHidden'];
        $email = $_POST['email'];
        $hobby = $_POST['hobby'];
        $job = $_POST['job'];


    }
}

function isAllSet()
{
    global $_POST;
    
    if (isset($_POST['name'])
        && isset($_POST['surname'])
        && isset($_POST['streetNumber'])
        && isset($_POST['street'])
        && isset($_POST['birthdate'])
        && isset($_POST['genderHidden'])
        && isset($_POST['city'])
        && isset($_POST['zip'])
        && isset($_POST['phone'])
        && isset($_POST['countryCodeHidden'])
        && isset($_POST['email'])
        && isset($_POST['hobby'])
        && isset($_POST['job'])) {
        return true;
    } else {
        return false;
    }
}
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css"  href="main.css" />
    <link rel="stylesheet" type="text/css"  href="saveData.css" />

</head>
<body>  
    <div class="parent">
        <div class="title">
            <h1>I dati giornalieri</h1>
        </div>
    <?php

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        if (checkValues()) {
            $directory = "";
            $globalFilename = ($directory . "globalUsers.csv");
            $dailyFilename = ($directory . "Registrazioni-") . (date("Y-m-d")) . ".csv";

            $globalHandle = (file_exists($globalFilename)) ? fopen($globalFilename, "a+") : fopen($globalFilename, "w+");

            $dailyHandle = (file_exists($dailyFilename)) ? fopen($dailyFilename, "a+") : fopen($dailyFilename, "w+");

            $result = getFormattedData();

            $colNames = getColNames() . "\n";
            if (is_writable($globalFilename) && is_writable($dailyFilename)) {
                if (filesize($globalFilename) == 0) {
                    fwrite($globalHandle, $colNames);
                }

                if (filesize($dailyFilename) == 0) {
                    fwrite($dailyHandle, $colNames);
                }
            } else {
                goBack();
            }

            fwrite($globalHandle, ($result . "\n"));
            fwrite($dailyHandle, ($result . "\n"));

            fclose($globalHandle);
            fclose($dailyHandle);
            $globalHandle = fopen($globalFilename, "r");
            $dailyHandle = fopen($dailyFilename, "r");

            $fileText = fread($dailyHandle, filesize($dailyFilename));


            $formattedFileText = explode("\n", $fileText);

            
            echo "<table class='childTable'>";

            for ($i = 0; $i < count($formattedFileText); $i++) {
                echo "<tr>";
                $variable = explode(";", $formattedFileText[$i]);
                for ($j = 0; $j < count($variable); $j++) {
                    if (count($variable) == 13)
                        if ($i == 0)
                        echo "<td class='columnNames'>" . $variable[$j] . "</td>";
                    else
                        echo "<td>" . $variable[$j] . "</td>";
                }
                echo "</tr>";
            }
            echo "</table>";

            echo "</div>";
        }
    }
    function goBack()
    {
        echo "<script>alert('Unable to open Files');</script>";
        echo "<script>window.history.back();</script>";
    }

    function getFormattedData()
    {
        $result = "";

        foreach ($GLOBALS['FormData'] as $item) {
            $result = $result . $item . ";";
        }

        $result = str_split($result);
        $result = array_slice($result, 0, (count($result) - 1));
        $result = implode($result);

        return $result;

    }


    function getColNames()
    {
        $result = "";
        foreach ($GLOBALS['FormData'] as $key => $item) {
            $result = $result . $key . ";";
        }
        $result = str_split($result);
        $result = array_slice($result, 0, (count($result) - 1));
        $result = implode($result);
        return $result;

    }

    function checkValues()
    {
        if (isAllSet()) {

            $name = htmlspecialchars($_POST['name']);
            $surname = htmlspecialchars($_POST['surname']);
            $streetNumber = htmlspecialchars($_POST['streetNumber']);
            $street = htmlspecialchars($_POST['street']);
            $birthdate = htmlspecialchars($_POST['birthdate']);
            $birthdate = new DateTime($birthdate);
            $gender = htmlspecialchars($_POST['genderHidden']);
            $city = htmlspecialchars($_POST['city']);
            $zip = htmlspecialchars($_POST['zip']);
            $phone = htmlspecialchars($_POST['phone']);
            $countryCode = htmlspecialchars($_POST['countryCodeHidden']);
            $email = htmlspecialchars($_POST['email']);
            $hobby = htmlspecialchars($_POST['hobby']);
            $job = htmlspecialchars($_POST['job']);


            $regexPhone = "/^\d+$/";
            $regexEmail = "/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
            $regexText = "/[a-z+A-Z ]/";
            $regexStreetNumber = "/[a-z+A-Z+\d]/";

            $regexZip = "/[0-9]/";

            $regexCountryCode = "/[0-9]/";

            $next = true;

            if (strlen($name) > 0 && strlen($name) <= 50 && preg_match_all($regexText, $name)) {

            } else {

                $next = false;
            }
            if (strlen($surname) > 0 && strlen($surname) <= 50 && preg_match_all($regexText, $surname)) {

            } else {

                $next = false;
            }
            if (strlen($streetNumber) > 0 && strlen($streetNumber) <= 50 && preg_match_all($regexStreetNumber, $street)) {


            } else {

                $next = false;
            }

            if ($birthdate < new DateTime()) {

            } else {
                $next = false;
            }

            if (($gender === "M" || $gender === "F" || $gender === "altro")) {



            } else {

                $next = false;
            }


            if (strlen($city) > 0 && strlen($city) <= 50 && preg_match_all($regexText, $city)) {

            } else {

                $next = false;
            }

            if (strlen($zip) > 0 && strlen($zip) <= 5 && preg_match_all($regexZip, $zip)) {


            } else {

                $next = false;
            }

            if (strlen($street) > 0 && strlen($street) <= 50 && preg_match_all($regexText, $street)) {

            } else {

                $next = false;
            }

            if (preg_match_all($regexPhone, $phone) && strlen($phone) <= 10) {

            } else {

                $next = false;
            }

            if (strlen($countryCode) > 0 && strlen($countryCode) <= 5 && preg_match_all($regexCountryCode, $countryCode)) {

            } else {
                $next = false;
            }

            if (preg_match_all($regexEmail, strtolower($email))) {


            } else {

                $next = false;
            }

            if (strlen($hobby) <= 500) {


            } else {
                $next = false;
            }

            if (strlen($job) <= 500) {

            } else {
                $next = false;
            }

            if ($next) {


                $formData['name'] = $name;
                $formData['surname'] = $surname;
                $formData['streetNumber'] = $streetNumber;
                $formData['street'] = $street;
                $formData['birthdate'] = $birthdate->format("Y-m-d");
                $formData['gender'] = $gender;
                $formData['city'] = $city;
                $formData['zip'] = $zip;
                $formData['phone'] = $phone;
                $formData['countryCode'] = $countryCode;
                $formData['email'] = $email;
                $formData['hobby'] = $hobby;
                $formData['job'] = $job;
                $GLOBALS['FormData'] = $formData;

                echo "<script>alert('La validazione dei dati riuscita');</script>";
                return true;
            } else {

                echo "<script>alert('La validazione dei dati non riuscita');</script>";
                return false;
            }

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
    ?>
</body>

</html>
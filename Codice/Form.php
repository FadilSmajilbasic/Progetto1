<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="PDB.css">
    <link rel="stylesheet" href="form.css">
    <link rel="txt/script" href="main.js">
</head>

<body>
    <div class="parent">
        <div class="title">
            <h1>Inserire i dati sotto</h1>
        </div>
        <form action="PaginaDiForm.php" method="post" onsubmit="return checkValues()">
            <table class="parentTable">
                <tr>
                    <td>
                        <table class="childTable">
                            <tr>
                                <td>
                                    <div class="dataInput">Nome: </div>
                                </td>
                                <td>
                                    <input type="text" name="name">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="dataInput">Cognome: </div>
                                </td>
                                <td>
                                    <input type="text" name="surname">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="dataInput">No. Civico: </div>
                                </td>
                                <td>
                                    <input type="text" name="streetNumber">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="dataInput">data di nascita: </div>

                                </td>
                                <td>
                                    <input type="date" name="birthdate">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="dataInput">Genere: </div>

                                </td>
                                <td>
                                    <select name="gender">
                                        <option>Scegliere</option>
                                        <option value="M">M</option>
                                        <option value="F">F</option>
                                        <option value="altro">altro</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div class="dataInput">Professione: </div>

                                </td>
                                <td>
                                    <input type="text" class="long" name="job">
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table class="childTable">
                            <tr>
                                <td>
                                    <div class="dataInput">Citta: </div>
                                </td>
                                <td>
                                    <input type="text" name="city">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="dataInput">NAP: </div>
                                </td>
                                <td>
                                    <input type="text" name="zip">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="dataInput">No. telefono: </div>
                                </td>
                                <td>
                                    <input type="text" name="phone">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="dataInput">Email: </div>

                                </td>
                                <td>
                                    <input type="date" name="email">
                                </td>
                            </tr>
                            <tr>
                                <td style="height: 22px;">
                                </td>
                            </tr>
                            <tr>
                                <td style="height: 22px;">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="dataInput">Hobby: </div>

                                </td>
                                <td>
                                    <input type="text" class="long" name="hobby">
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>
            <input type="submit" value="Prosegui">
        </form>
    </div>
    </div>
</body>

</html>
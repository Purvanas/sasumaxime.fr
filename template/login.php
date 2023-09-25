<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../../TP_SASU/asset/css/bootstrap.min.css">
        <link rel="stylesheet" href="../../TP_SASU/asset/css/style.css">

        <title>Connexion</title>
        <link rel="icon" type="image/x-icon" href="../../TP_SASU/asset/image/letter-p.ico">
    
        <script
        src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous">
        </script>
        <script> 
        $(function(){
            $("#header").load("../../TP_SASU/asset/header.html"); 
            $("#footer").load("../../TP_SASU/asset/footer.html"); });
    </script> 
    </head>
<body>
    <div id="header"></div>

    

    

    <div id="footer"></div>
</body>
</html>

<?php 

if (isset($_POST['submit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];


    $host = '127.0.0.1'; // Adresse du serveur MySQL
            $bdd = 'TPSasu'; // Nom de la base de données
            $user = 'root'; // Nom d'utilisateur MySQL
            $password = ''; // Mot de passe MySQL

    $db = new PDO("mysql:host=$host;dbname=$bdd;charset=utf8", $user, $password);

    $sql = "SELECT * FROM user WHERE username = '$username'";
    $result = $db->prepare($sql);
    $result->execute();

    if($result->rowCount() > 0){
        $data = $result->fetchAll();
        if(password_verify($password, $data[0]["password"])){
            echo "<h1> Connexion effectuée </h1>";
            echo '<script>localStorage.setItem("userConnected", "true");</script>';
        }
    }
    else{
        $pass = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO user (username, password) VALUES ('$username','$pass')";
        $req = $db->prepare($sql);
        $req->execute();
        echo "<h1> utilisateur créé avec succès </h1>";
        echo '<script>localStorage.setItem("userConnected", "true");</script>';
    }
}

?>


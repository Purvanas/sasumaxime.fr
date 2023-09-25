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

    <h1>CONNEXION OU CRÉATION DE COMPTE</h1>

    <div class="bg mep">

            <form class="formContact" action="../../TP_SASU/template/login.php" method="post">
                <label for="nom_utilisateur">Nom d'utilisateur :</label>
                <input type="text" id="nom_utilisateur" name="username" required><br><br>
        
                <label for="mot_de_passe">Mot de passe :</label>
                <input type="password" id="mot_de_passe" name="password" required><br><br>
        
                <input type="submit" value="Se connecter / créer" name="submit">
            </form>

    </div>

    

    <div id="footer"></div>
</body>
</html>
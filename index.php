<?php

require_once "config/config.php";
require_once "lib/lib.php";

$dbh = dbConnexion();
$sth = $dbh ->prepare( "SELECT * FROM literature ORDER BY id DESC");
$sth->execute();
$articles = $sth->fetchAll(PDO::FETCH_ASSOC);

if(array_key_exists('lang', $_GET)){
    switch ($_GET["lang"]){
        case "fr":
            include "phtml/homefr.phtml";
        break;

        default:
            include "phtml/home.phtml";
    }
}
else{
    header("Location: index.php?lang=eng");
    exit;
}


?>
<?php

require_once "config/config.php";
require_once "lib/lib.php";

session_start();

$dbh = dbConnexion();
$sth = $dbh ->prepare( "SELECT * FROM literature ORDER BY id DESC");
$sth->execute();
$articles = $sth->fetchAll(PDO::FETCH_ASSOC);

if(array_key_exists('page', $_GET)){
    if(array_key_exists('lang', $_GET)){
        include "phtml/".$_GET['page'].$_GET['lang'].".phtml";
        $_SESSION['currentPage'] = $_GET['page'];
    }
    else{
        header("Location: index.php?page=".$_SESSION['currentPage']."&lang=eng");
        exit;
    }
}
else{
    $_SESSION['currentPage'] = 'home';
    header("Location: index.php?page=".$_SESSION['currentPage']."&lang=eng");
}


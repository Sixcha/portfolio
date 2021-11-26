<?php

require_once ("../config/config.php");
require_once ("../lib/lib.php");

$content = file_get_contents("php://input");
$data = json_decode($content, true);

$dbh = dbConnexion();
$sth = $dbh ->prepare( "SELECT * FROM literature ORDER BY id DESC");
$sth->execute();
$articles = $sth->fetchAll(PDO::FETCH_ASSOC);

include "../phtml/searchedArticles.phtml"

?>
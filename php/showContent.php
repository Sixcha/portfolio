<?php

require_once ("../config/config.php");
require_once ("../lib/lib.php");

$content = file_get_contents("php://input");
$data = json_decode($content, true);

$dbh = dbConnexion();
$sth = $dbh ->prepare( "SELECT content FROM literature WHERE id = :data");
$sth->bindValue("data",$data["button"]);
$sth->execute();
$articles = $sth->fetchAll(PDO::FETCH_ASSOC);

include "../phtml/content.phtml";

?>
<?php
/* http://php.net/manual/fr/class.pdo.php */ 
if(isset($bdd)==False){
	try
	{
		$bdd = new PDO('mysql:host=localhost;dbname=airsoftexpo;charset=utf8', 'root', 'salope69',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
	}
	catch (Exception $e)
	{
			die('Erreur : ' . $e->getMessage());
	}
}

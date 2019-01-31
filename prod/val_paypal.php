<?php
	include_once('admin/connection.php');
	include_once('admin/tools.php');
	include_once('const.php');
	
	$idExposant	=convertInt($_GET["blablabla"]);
	
	$req = $bdd->prepare('UPDATE Exposants SET payement= :payement WHERE id = :id');
				$req->execute(array(
				'payement' => 'Paypal',
				'id' => $idExposant
				));
	//echo HOSTNAME.'/dossier_inscription.php';
	header('Location: '.HOSTNAME);
	exit();
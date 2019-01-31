<?php
function convert($arg){
	if(isset($arg)){
		$temp=htmlspecialchars($arg); // faille XSS
		$temp=addslashes ($temp); // faille injection SQL
		return $temp;
	}else{
		return '';
	}
}

function convertInt($arg){
	if(isset($arg)){
		$temp=htmlspecialchars($arg); // faille XSS
		$temp=addslashes ($temp); // faille injection SQL
		return intval($temp);
	}else{
		return 0;
	}
}

function reportingTXT($idSelectExposant){
	$reponse = $bdd->query('SELECT * FROM Exposants WHERE id='.$idSelectExposant);
	while ($donnees = $reponse->fetch()){
		$name=$donnees['name'];
		$desc=$donnees['description'];
		$siret			=$donnees['SIRET'];
		$raisonSociale=$donnees['raison_sociale'];
		$adresse		=$donnees['adresse'];
		$code_postal=$donnees['code_postal'];
		$ville				=$donnees['ville'];
		$pays			=$donnees['pays'];
		$site_internet=$donnees['site_internet'];
		$email			=$donnees['email'];
		$responsable=$donnees['responsable'];
		$association =$donnees['association'];
		$emplacement  =$donnees['emplacement'];
		$nbTable =$donnees['tableExp'];
		$badge  =$donnees['badge'];
		$chaise  =$donnees['chaise'];
		$descriptionVente  =$donnees['descriptionVente'];
		$descriptionActivite  =$donnees['descriptionActivite'];
		$remarque  =$donnees['remarque'];
		$path= $donnees["Path"];
		
		$mail='';
		$mail+="Bonjour ".$responsable.'\n';

		return $mail;
	}
}

function sendMail($mail, $sujet, $message_txt, $message_html){

	if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui présentent des bogues.
	{
		$passage_ligne = "\r\n";
	}
	else
	{
		$passage_ligne = "\n";
	}
	 
	//=====Création de la boundary.
	$boundary = "-----=".md5(rand());
	$boundary_alt = "-----=".md5(rand());
	//==========
	 	 
	//=====Création du header de l'e-mail.
	//$header = "From: \"AirsoftExpo 2019\"<	ghostsoldier.airsoft@gmail.com>".$passage_ligne;
	//$header = "From: \"AirsoftExpo 2019".$passage_ligne;
	$header.= "Reply-to: \"Ghost Soldier Airsoft\" <ghostsoldier.airsoft@gmail.com>".$passage_ligne;
	$header.= "MIME-Version: 1.0".$passage_ligne;
	$header.= "Content-Type: multipart/mixed;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
	//==========
	 
	//=====Création du message.
	$message = $passage_ligne."--".$boundary.$passage_ligne;
	$message.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary_alt\"".$passage_ligne;
	$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;
	//=====Ajout du message au format texte.
	$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
	$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
	$message.= $passage_ligne.$message_txt.$passage_ligne;
	//==========
	 
	$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;
	 
	//=====Ajout du message au format HTML.
	$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
	$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
	$message.= $passage_ligne.$message_html.$passage_ligne;
	//==========
	 
	//=====On ferme la boundary alternative.
	$message.= $passage_ligne."--".$boundary_alt."--".$passage_ligne;
	//==========
	  
	$message.= $passage_ligne."--".$boundary.$passage_ligne;
	 
	//========== 
	//=====Envoi de l'e-mail.
	mail($mail,$sujet,$message,$header);
}

<!--  https://fontawesome.com/ -->

<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Airsoft expo 2019 </title>

    <!-- Bootstrap core CSS --> <link href="template/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="template/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="template/css/agency.css" rel="stylesheet">

  </head>

  <body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
		<img class="navbar-brand js-scroll-trigger " src="template/img/logo_airsoft_expo_alpha.png" height="100" alt=""  style="margin-right: 0px;">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">

        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          
          <div class="intro-heading text-uppercase">Airsoft EXPO</div>
		  <div class="intro-lead-in">1ere exposition consacrée à l'airsoft sur la commune d'Etupes dans le pays de Montbéliard</div>
        </div>
      </div>
    </header>
		
	<?php 
	if(isset($_POST["phase"])){
		include_once('admin/connection.php');
		include_once('admin/tools.php');
		include_once('const.php');
		
		if(convert($_POST["phase"])=='info'){

			$message='';
			$erreure='';
			
			$name			=convert($_POST["name"]);
			$description	=convert($_POST["description"]);
			$siret			=convert($_POST["siret"]);
			$raisonSociale=convert($_POST["raisonSociale"]);
			$adresse		=convert($_POST["adresse"]);
			$code_postal=convert($_POST["code_postal"]);
			$ville				=convert($_POST["ville"]);
			$pays			=convert($_POST["pays"]);
			$site_internet=convert($_POST["site_internet"]);
			$email			=convert($_POST["email"]);
			$responsable=convert($_POST["responsable"]);
			if(convert($_POST["inputType"])=="association"){
				$association=1;
			}else{
				$association=0;
			}
				

			$req = $bdd->prepare("INSERT INTO Exposants (Path,  name,  description, SIRET,  visible,    raison_sociale, adresse, code_postal ,ville, pays, site_internet, email, responsable, association, statut ) 
																	   VALUES (:path, :name, :description, :siret, :visible,  :raison_sociale, :adresse, :code_postal, :ville, :pays, :site_internet, :email, :responsable, :association, :statut )");

			$req->execute(array(
				'path' =>'',
				'name' =>$name,
				'description' =>$description,
				'siret' =>$siret,
				'visible'=>'0',

				'raison_sociale'=>$raisonSociale,
				'adresse'=>$adresse,
				'code_postal' =>$code_postal,
				'ville'=>$ville,
				'pays'=>$pays,
				'site_internet'=>$site_internet,
				'email'=>$email,
				'responsable' =>$responsable,
				'association' =>$association,
				'statut' =>0
				));
					
			$req->closeCursor();
			
			$reponse = $bdd->query('SELECT LAST_INSERT_ID() FROM Exposants');
			$donnees = $reponse->fetch();
			$idExposant=$donnees[0];
			
				$message="Fiche inscription enregistré";
			
			if($message!=''){
				echo '<div class="alert alert-success" role="alert">'.$message.'</div>';
			}
			if($erreure!=''){
				echo '<div class="alert alert-danger" role="alert">'.$erreure.'</div>';
			}
			include('form_options.php');
		}
		if(convert($_POST["phase"])=='option'){
			$message='';
			$erreure='';
			
			$quantityEmplacement  =convertInt($_POST["quantityEmplacement"]);
			$quantityTable				=convertInt($_POST["quantityTable"]);
			$quantityBadge				=convertInt($_POST["quantityBadge"]);
			$quantityChaise			=convertInt($_POST["quantityChaise"]);
			$idExposant					=convertInt($_POST["blablabla"]);

			if($idExposant!=0){
				$req = $bdd->prepare('SELECT association FROM Exposants WHERE id=:id');
				$req->execute(array('id' => $idExposant));

				$donnees = $req->fetch();
				$association=$donnees['association'];
			
				if($association){
					$prixEmpacement=15;
				}else{
					$prixEmpacement=25;
				}
				$prix = $prixEmpacement+$quantityTable*5+$quantityBadge*5+$quantityChaise*2;
				
				$req = $bdd->prepare('UPDATE Exposants SET emplacement= :emplacement, tableExp= :tableExp, badge  = :badge , chaise = :chaise, prix=:prix WHERE id = :id');
				$req->execute(array(
				'emplacement' => $quantityEmplacement,
				'tableExp' => $quantityTable,
				'badge' => $quantityBadge,
				'chaise' => $quantityChaise,
				'prix' => $prix,
				'id' => $idExposant
				));
				$message="Options enregistrées";
			}else{
				$erreure="Erreur sur l'identification de l'exposant";
			}
			if($message!=''){
				echo '<div class="alert alert-success" role="alert">'.$message.'</div>';
			}
			if($erreure!=''){
				echo '<div class="alert alert-danger" role="alert">'.$erreure.'</div>';
			}
			include('form_remarque.php');
		}
		if(convert($_POST["phase"])=='remarque'){
			$message='';
			$erreure='';
			
			$description_vente		=convert($_POST["description_vente"]);
			$description_activites	=convert($_POST["description_activites"]);
			$remarques					=convert($_POST["remarques"]);
			$idExposant					=convertInt($_POST["blablabla"]);

			if($idExposant!=0){
				$req = $bdd->prepare('UPDATE Exposants SET descriptionVente= :descriptionVente, descriptionActivite= :descriptionActivite, remarque  = :remarque WHERE id = :id');
				$req->execute(array(
				'descriptionVente' => $description_vente,
				'descriptionActivite' => $description_activites,
				'remarque' => $remarques,
				'id' => $idExposant
				));
				$message="Les remarques ont bien été enregistrées";
				
				$req = $bdd->prepare('SELECT prix FROM Exposants WHERE id=:id');
				$req->execute(array('id' => $idExposant));

				$donnees = $req->fetch();
				$price=$donnees['prix'];
			}else{
			$erreure="Erreur sur l'identification de l'exposant";
			}
			if($message!=''){
				echo '<div class="alert alert-success" role="alert">'.$message.'</div>';
			}
			if($erreure!=''){
				echo '<div class="alert alert-danger" role="alert">'.$erreure.'</div>';
			}
						
			include('form_payement.php');
		}
		if(convert($_POST["phase"])=='payement'){
			$message='';
			$erreure='';
			
			$typePayement	=convert($_POST["radio"]);
			$idExposant			=convertInt($_POST["blablabla"]);
			
			if($idExposant!=0){
				$req = $bdd->prepare('UPDATE Exposants SET payement= :payement WHERE id = :id');
				$req->execute(array(
				'payement' => $typePayement,
				'id' => $idExposant
				));
				$message="Votre dossier a bien été enregistré, nous allons l'examiner";
								
				$req = $bdd->prepare('SELECT email FROM Exposants WHERE id=:id');
				$req->execute(array('id' => $idExposant));

				$donnees = $req->fetch();
				$email=$donnees['email'];
				
				$sujet = "AirsoftExpo 2019 : inscription";
				$message_txt = "Salut à tous, voici un e-mail envoyé par un script PHP.";
				$message_html = "<html><head></head><body><b>Salut à tous</b>, voici un e-mail envoyé par un <i>script PHP</i>.</body></html>";
				sendMail($email,$sujet,reportingTXT($idExposant),reportingTXT($idExposant));

			}else{
			$erreure="Erreur sur l'identification de l'exposant";
			}
			if($message!=''){
				echo '<div class="alert alert-success" role="alert">'.$message.'</div>';
			}
			if($erreure!=''){
				echo '<div class="alert alert-danger" role="alert">'.$erreure.'</div>';
			}
		}
		
	}else{
		include('form_identite_contact.php');
	}
	?>


    <!-- Bootstrap core JavaScript -->
    <script src="template/vendor/jquery/jquery.min.js"></script>
    <script src="template/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="template/vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Contact form JavaScript -->
    <script src="template/js/jqBootstrapValidation.js"></script>
    <script src="template/js/contact_me.js"></script>

    <!-- Custom scripts for this template -->
    <script src="template/js/agency.min.js"></script>

  </body>
</html>
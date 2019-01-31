<?php include('admin/connection.php'); ?>

<!--  https://fontawesome.com/ -->

<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Airsoft expo 2019 </title>

    <!-- Bootstrap core CSS -->
    <link href="template/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="template/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
	 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
   integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
   crossorigin=""/>

    <!-- Custom styles for this template -->
    <link href="template/css/agency.css" rel="stylesheet">
	
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133560121-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-133560121-1');
	</script>


  </head>

  <body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <!-- <!-- <a class="navbar-brand js-scroll-trigger" href="#page-top">Airsoft Expo</a> --> -->
		<img class="navbar-brand js-scroll-trigger " src="template/img/logo_airsoft_expo_alpha.png" height="100" alt=""  style="margin-right: 0px;">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#animations">ANIMATIONS</a>
            </li>
			
            <?php 
            $reponse = $bdd->query('SELECT count(*) FROM Exposants WHERE 1');
			$donnees = $reponse->fetch();
			if($donnees ['count(*)']>0){
				?>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#exposants">EXPOSANTS</a>
            </li>
			<?php }?>

			<?php 
            $reponse = $bdd->query('SELECT count(*) FROM Invites WHERE 1');
			$donnees = $reponse->fetch();
			if($donnees ['count(*)']>0){
				?>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#invites">INVITÉS</a>
            </li>
			<?php }?>
			
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#infos">INFOS PRATIQUES</a>
            </li>
			<li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#partenaires">PARTENAIRES</a>
            </li>
			<li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#inscription">INSCRIPTION</a>
            </li>
          </ul>
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
	
    <!-- Animations -->
    <section id="animations">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Animations</h2>
          </div>
        </div>
		
		<div class="row text-center">		
			<div class="col-md-6">
				<span class="fa-stack fa-4x">
				  <i class="fas fa-circle fa-stack-2x text-primary"></i>
				  <i class="fas fa-mask fa-stack-1x fa-inverse"></i>
				</span>
				<h4 class="service-heading">Cosplay</h4>
				<p class="text-muted">Themes:</p>
				<ul class="text-left text-muted">
					<li>Jeux video</li>
					<li>Call of duty</li>
					<li>Lara Croft</li>
					<li>WW2</li>
					<li>Film</li>
					<li>...</li>
				</ul>
				 <p class="text-muted">Il est obligatoire de s'inscrire pour participer aux défilés sur scène</p>
			  </div>
			  
			  <div class="col-md-6">
				<span class="fa-stack fa-4x">
				  <i class="fas fa-circle fa-stack-2x text-primary"></i>
				  <i class="fas fa-mask fa-stack-1x fa-inverse"></i>
				</span>
				<h4 class="service-heading">Tombola</h4>
				<p class="text-muted">De nombreux lots à gagner</p>
				<p class="text-muted">Les lots seront annoncés bientôt</p>
				<!--
				<ul class="text-left text-muted">
					<li>XXX</li>
					<li>XX</li>
					<li>XXXX</li>
					<li>X</li>
					<li>...</li>
				</ul>
				-->
			  </div>
		 </div>
		
        <div class="row text-center">
          <div class="col-md-6">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-utensils fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Restauration</h4>
          </div>

          <div class="col-md-6">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-gamepad fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Toboggan gonflable</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Exposants Grid -->
	<?php
	include('exposants.php');
	$reponse = $bdd->query('SELECT count(*) FROM Exposants WHERE 1');
	$donnees = $reponse->fetch();
	if($donnees ['count(*)']>0){
	?>
    <section class="bg-light" id="exposants">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Exposants</h2>
          </div>
        </div>
        <div class="row">
			<?php
				$reponse = $bdd->query('SELECT * FROM Exposants');
				while ($donnees = $reponse->fetch()){
					if($donnees['visible']) echo getExposant($donnees);
				}
			?>		  
        </div>
      </div>
    </section>
	<?php }?>

    <!-- invites -->
	<?php
	include('invites.php');
	$reponse = $bdd->query('SELECT count(*) FROM Invites WHERE 1');
	$donnees = $reponse->fetch();
	if($donnees ['count(*)']>0){
	?>
    <section class="bg-light" id="invites">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Invites</h2>
          </div>
        </div>
        <div class="row">
		<?php
				$reponse = $bdd->query('SELECT * FROM Invites');
				while ($donnees = $reponse->fetch()){
					if($donnees['visible']) echo getInvites($donnees);
				}
			?>	
        </div>
      </div>
    </section>
	<?php }?>

	<!-- Infos -->
    <section id="infos">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Infos Pratiques</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-money-bill-alt fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Entrée unique : 1 Euro</h4>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-map-marked-alt fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Espace Josephine Baker</h4>
            <p class="text-muted">Allée du 19 Mars 1962</br>25460 ETUPES</p>			
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-calendar-alt fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Horaires</h4>
            <p class="text-muted">AirsoftExpo Saison 1 se déroulera les 8 et 9 juin 2019.</br>
				Samedi : 10h – 20h</br>
				Dimanche : 10h – 19h</p>
          </div>
		<div class="col-md-4">
			<a href="https://www.facebook.com/events/279331049351980/">
				<span class="fa-stack fa-4x">
				  <i class="fas fa-circle fa-stack-2x text-primary"></i>
				  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
				</span>
				<h4 class="service-heading">Retrouvez nous sur Facebook</h4>
			</a>
          </div>
        </div>
		
		<div class="row text-center">
			<div id="leafletMap" style="width:100%;height:400px;"></div>
			<iframe style="border: 0;" 
			<!--src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2710.207049454749!2d-1.5729033!3d47.2125309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec0fcda6c4cb%3A0xd620ca38dafa1e9a!2s2+Rue+La+Motte+Picquet%2C+44100+Nantes!5e0!3m2!1sfr!2sfr!4v1423244007186" -->
			src="https://maps.google.com/maps?q=London&amp;ie=UTF8&amp;&amp;output=embed"
			width="600" 
			height="450" 
			frameborder="0">
			</iframe>
		</div>
		
		
      </div>
    </section>

    <!-- Partenaires -->
    <section class="py-5"  id="partenaires">
      <div class="container">
        <div class="row">
		  <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Partenaires</h2>
          </div>
			<?php
				include('partenaires.php');
				$reponse = $bdd->query('SELECT * FROM Partenaires');
				while ($donnees = $reponse->fetch()){
					echo getPartenaire($donnees['Name'],$donnees['path'], $donnees['Url']);
				}
			?>
        </div>
      </div>
    </section>
	
	<section class="py-5"  id="inscription">
      <div class="container">
        <div class="row">
		  <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Inscription</h2>
          </div>
			<div class="row text-center">
				<div class="col-md-4"></div>
				<div class="col-md-4">
				<p class="text-justify ">Vous êtes une association, une boutique ou autre et vous souhaitez devenir exposant ? <a href="dossier_inscription.php">Remplissez un dossier d'inscription en ligne pour l'airsoftExpo 2019</a></p>
				<a href="dossier_inscription.php">
					<span class="fa-stack fa-4x">
					  <i class="fas fa-circle fa-stack-2x text-primary"></i>
					  <i class="fas fa-pen-fancy fa-stack-1x fa-inverse"></i>
					</span>
					</a>
				
			</div>
			<div class="col-md-4"></div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; Airsoft expo 2019</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/events/279331049351980/" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Portfolio Modals -->
	<?php
		$reponse = $bdd->query('SELECT * FROM Exposants');
		while ($donnees = $reponse->fetch()){
			echo getPartenaireModal($donnees);
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
	
 <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
   integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
   crossorigin=""></script>
   
   <script>
   	var pos=[47.5075385, 6.856612400000017];
	var mymap = L.map('leafletMap').setView(pos,16);
   
	   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		//attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
	}).addTo(mymap);
	/*
	var popup = L.popup()
    .setLatLng([pos[0]+0.0005,pos[1]])
    .setContent("Espaces Josephine Baker</br>Allée du 19 Mars 1962</br>25460 ETUPES")
    .openOn(mymap);
	console.log(popup );
	*/
	var marker = L.marker(pos).addTo(mymap);
   </script>
   
  </body>
</html>
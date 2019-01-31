<?php 
	include('connection.php');
	
	if(isset($_POST["record"])){
		$message='';
		$erreure='';
		if($_POST["selectExposant"]=='n'){
			$req = $bdd->prepare("INSERT INTO Exposants (Path, name, description, SIRET, visible, domaine ) VALUES ( :path, :name, :description, :siret, :visible, :domaine )");

			$req->execute(array(
				'path' =>$_POST["inputPath"],
				'name' =>$_POST["inputName"],
				'description' =>$_POST["inputDesc"],
				'siret' =>'',
				'visible'=>$_POST["inputVisible"],
				'domaine '=>$_POST["inputCategorie"]
				));
				$message="Exposant ajouté";
		}else{
			$req = $bdd->prepare('UPDATE Exposants SET Path= :path, name= :name, description = :description, SIRET = :siret, visible= :visible WHERE id = :id');
			$req->execute(array(
				'path' =>$_POST["inputPath"],
				'name' =>$_POST["inputName"],
				'description' =>$_POST["inputDesc"],
				'siret' =>'',
				'visible'=>$_POST["inputVisible"],				
				//'domaine '=>$_POST["inputCategorie"],
				'id' => $_POST["selectExposant"]
				));
				$message="Exposant mis à jours";
		}
		if($message!=''){
			echo '<div class="alert alert-success" role="alert">'.$message.'</div>';
		}
		if($erreure!=''){
			echo '<div class="alert alert-danger" role="alert">'.$erreure.'</div>';
		}
	}else{
	
	if(!isset($_POST["selectExposant"])){
?>

<section>
      <div class="container">
		<div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Exposants à approuver</h2>
          </div>
        </div>
        <div class="row">
			<form  class="col-12" method="post">
			  <div class="form-group row">
				<label for="select" class="col-4 col-form-label">Charger un exposant</label> 
				<div class="col-8">
				  <select id="selectExposant" name="selectExposant" class="custom-select">
					<?php
					$reponse = $bdd->query('SELECT * FROM Exposants');
					while ($donnees = $reponse->fetch()){
						if($donnees['statut']==0){
							echo '<option value="'.$donnees['id'].'">'.$donnees['name'].'</option>';
						}
					}?>
				  </select>
				</div>
			  </div> 
			  <div class="form-group row">
				<div class="offset-4 col-8">
				  <button name="submit" type="submit" class="btn btn-primary">Charger</button>
				</div>
			  </div>
			</form>
		</div>
	</div>
</section>


<section>
      <div class="container">
	  		<div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Exposants approuvé qu'on peut modifier</h2>
          </div>
        </div>
        <div class="row">
			<form  class="col-12" method="post">
			  <div class="form-group row">
				<label for="select" class="col-4 col-form-label">Charger un exposant</label> 
				<div class="col-8">
				  <select id="selectExposant" name="selectExposant" class="custom-select">
					<option value="n">Nouveau</option>
					<?php
					$reponse = $bdd->query('SELECT * FROM Exposants');
					while ($donnees = $reponse->fetch()){
						if($donnees['statut']!=0){
							echo '<option value="'.$donnees['id'].'">'.$donnees['name'].'</option>';
						}
					}?>
				  </select>
				</div>
			  </div> 
			  <div class="form-group row">
				<div class="offset-4 col-8">
				  <button name="submit" type="submit" class="btn btn-primary">Charger</button>
				</div>
			  </div>
			</form>
		</div>
	</div>
</section>
<?php
	}else{
		$modifier=0;
		if($_POST["selectExposant"]=='n'){
			$name="new name";
			$desc="Description de l'exposant";
		    $visible=False;
			$yesChecked="";
			$noChecked="checked";
			$opitionTeam='selected';
			$opitionBoutique='';
			$opitionFabriquant='';
			$path='';
			$modifier=true;
		}
		else{
			$reponse = $bdd->query('SELECT * FROM Exposants WHERE id='.$_POST["selectExposant"]);
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
				
				$visible=False;
				
				$yesChecked="";
				$noChecked="";
				
				if($donnees['visible']){
					$yesChecked="checked";
				}else{
					$noChecked="checked";
				}
				$path= $donnees["Path"];
				

				$optionTeam='';
				$optionBoutique='';
				$optionFabriquant='';
				switch ($donnees["domaine"]) {
					case "Team":
						$optionTeam='selected';
						break;
					case "Boutique":
						$optionBoutique='selected';
						break;
					case "Fabriquant":
						$optionFabriquant='selected';
						break;
				}
			}
		}
		if($modifier){
			include('template_modifier_exposant.php');
		}else{
			include('template_display_exposant.php');
		}
	}
	}
	?>
<section id="addExposant">
      <div class="container">
        <div class="row">
		<form class="col-12" method="post">
		  <div class="form-group row">
			<label for="text" class="col-4 col-form-label">Nom de l'exposant</label> 
			<div class="col-8">
			  <input id="inputName" name="inputName" type="text" class="form-control here" required="required" value="<?php echo $name;?>">
			</div>
		  </div>

		  <div class="form-group row">
			<label for="" class="col-4 col-form-label">Select</label> 
			<div class="col-8">
			  <select id="inputCategorie" name="inputCategorie" class="custom-select">
				<option <?php echo $optionTeam;?>  value="Team" >Team</option>
				<option <?php echo $optionBoutique;?> value="Boutique">Boutique</option>
				<option <?php echo $optionFabriquant;?> value="Fabriquant">Fabriquant</option>
			  </select>
			</div>
		  </div>
		  
		   <div class="form-group row">
			<label for="textarea" class="col-4 col-form-label">Texte d'accompagnement</label> 
			<div class="col-8">
			  <textarea id="inputDesc" name="inputDesc" cols="40" rows="5" class="form-control" required="required" ><?php echo $desc;?></textarea>
			</div>
		  </div> 
		  
		  
		  <div class="form-group row">
			<label class="col-4">Visible</label> 
			<div class="col-8">
				<input type="radio" id="contactChoice1"   name="inputVisible" value="0" <?php echo $noChecked;?>>
				<label for="contactChoice1" >non</label>

				<input type="radio" id="contactChoice2"   name="inputVisible" value="1" <?php echo $yesChecked;?>>
				<label for="contactChoice2">oui </label>
			</div>
		  </div> 
		  
		  <div class="form-group row">
			<div class="offset-4 col-8">
			  <button name="submit" type="submit" class="btn btn-primary">Enregistrer</button>
			</div>
		  </div>
		  <input id="selectExposant" name="selectExposant" type="hidden" value="<?php echo $_POST["selectExposant"];?>">
		  <input id="inputPath" name="inputPath" type="hidden" value="<?php echo $path;?>">
		  <input id="record" name="record" type="hidden" value="1">
		</form>
	</div>
</div>
</section>
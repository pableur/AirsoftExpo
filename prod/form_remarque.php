	
	<section id="infos">
      <div class="container">
		  <form method="post">
		  <input id="blablabla" name="blablabla" type="hidden" value="<?php echo $idExposant;?>">
		  <input id="phase" name="phase" type="hidden" value="remarque">
		  <div class="form-group row">
			<label for="description_vente" class="col-6 col-form-label">Description des ventes que vous allez faire</label> 
			<div class="col-6">
			  <textarea id="description_vente" name="description_vente" cols="40" rows="5" class="form-control"></textarea>
			</div>
		  </div>
		  <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Attention ! La partie suivante est obligatoire pour pouvoir bénéficier d espaces  gratuites</h2>
          </div>
		  <div class="form-group row">
			<label for="description_activites" class="col-6 col-form-label">Description des activités que vous allez faire</label> 
			<div class="col-6">
			  <textarea id="description_activites" name="description_activites" cols="40" rows="5" class="form-control"></textarea>
			</div>
		  </div>
		  <div class="form-group row">
			<label for="remarques" class="col-6 col-form-label">Eventuelles remarques</label> 
			<div class="col-6">
			  <textarea id="remarques" name="remarques" cols="40" rows="5" class="form-control"></textarea>
			</div>
		  </div> 
		  <div class="form-group row">
			<div class="offset-6 col-6">
			  <button name="submit" type="submit" class="btn btn-primary">Valider</button>
			</div>
		  </div>
		</form>
	</div>
</section>
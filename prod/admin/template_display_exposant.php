<section id="addExposant">
      <div class="container">
        <div class="row">
			<div class="col-lg-12 text-left">
				<p><?php echo $name?></p>
				<p><?php echo $raisonSociale?></p>
				<p><?php echo $adresse?></p>
				<p><?php echo $code_postal?>, <?php echo $ville?></p>
				<p><?php echo $pays?></p>
				<a href="<?php echo $site_internet?>"><?php echo $site_internet?></a>
				<p><?php echo $responsable?></p>
				<?php
				if($association) echo "<p>Association</p>";
				else echo "<p>Commerce</p>";
				?>
				<p>Nombre d'emplacement : <?php echo $emplacement?></p>
				<p>Nombre de table : <?php echo $nbTable?></p>
				<p>Nombre de badge : <?php echo $badge?></p>
				<p>Nombre de chaise : <?php echo $chaise?></p>
				
				<p><strong>Description vente :</strong><?php echo $descriptionVente?></p>
				<p><strong>Description activité </strong><?php echo $descriptionActivite?></p>
				<p><strong>Remarque :</strong><?php echo $remarque?></p>
			</div>
			
	</div>
</div>
</section>
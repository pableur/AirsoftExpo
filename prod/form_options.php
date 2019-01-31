	<!-- Infos -->
	<section id="infos">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Options de stand</h2>
          </div>
        </div>
        <div class="row text-justify">
        <p>Deux badges par stand sur le salon sont fournis (compris dans le prix de la table). Tout  badge supplémentaire vous sera facturé à hauteur de 5,00 € TTC. 
		Merci de toujours préciser le nombre que vous désirez (qu’il soient facturés en supplément ou pas) Deux chaises au maximum par table sur le salon sont fournies (compris dans le prix de 
la table), toute chaise supplémentaire vous sera facturée à hauteur de 2,00 € TTC. Merci de toujours préciser le nombre que vous désirez (qu’elles soient facturées en supplément ou pas)
Si vous voulez une prise électrique , celle-ci vous ne vous sera pas  facturée. Nous vous conseillons d’apporter rallonges et multiprises, l’organisation n’en fournira pas.
Pour  toute  installation  spécifique  et  non  citée  précédemment   (ex  :  mannequins,  portants, objets volumineux...), veuillez d’abord nous contacter Si vous ne désirez pas avoir 
de tables/chaises sur le stand mais désirez réserver uniquement l’espace de stand (en cas d’exposition ou activité ne nécessitant pas de table par exemple), merci de nous l’indiquer 
dans la partie remarques en page suivante.</p>
        </div>		
      </div>
    </section>
		
	<section id="infos" >
      <div class="container">
		
		  <form method="post">
		  <input id="blablabla" name="blablabla" type="hidden" value="<?php echo $idExposant;?>">
		  <input id="phase" name="phase" type="hidden" value="option">
			<table  class="table">
				<thead>
					<tr>
					   <th scope="col"></th>
					   <th scope="col">Prix euro</th>
					   <th scope="col">Nombre</th>
					   <th scope="col">Sous total</th>
				   </tr>
			   </thead>

			   <tr>
				   <td scope="row">Emplacement (2 table 2chaises)</td>
				   <?php
				   if($association){
					   echo "<td id='prixEmplacement'>15</td>";
				   }else{
					   echo "<td id='prixEmplacement'>25</td>";
				   }
				   ?>
				   
				   <td> 
						<div class="form-group row">
							  <input type="number" name="quantityEmplacement" min="1" max="1" class="form-control here" value="1" onchange="updatePrice('prixOptionEmplacement',this.value, 'prixEmplacement')">
					  </div>
				   </td>
				   <td id='prixOptionEmplacement'>0</td>
			   </tr>
			   
			   <td scope="row">Table suplementaire</td>
				   <td id='prixTable'>5</td>
				   <td> 
						<div class="form-group row">
							  <input type="number" name="quantityTable" min="0" max="5" class="form-control here" value="0" onchange="updatePrice('prixOptionTable',this.value, 'prixTable')">
					  </div>
				   </td>
				   <td id='prixOptionTable'>0</td>
			   </tr>
			   
			   <td scope="row">Badges suplementaire</td>
				   <td id='prixBadge'>5</td>
				   <td> 
						<div class="form-group row">
							  <input type="number" name="quantityBadge" min="0" max="5" class="form-control here" value="0" onchange="updatePrice('prixOptionBadge',this.value, 'prixBadge')">
					  </div>
				   </td>
				   <td id='prixOptionBadge'>0</td>
			   </tr>

			   <td scope="row">Chaises suplementaire</td>
				   <td id='prixChaise'>2</td>
				   <td> 
						<div class="form-group row">
							  <input type="number" name="quantityChaise" min="0" max="5" class="form-control here" value="0" onchange="updatePrice('prixOptionChaise',this.value, 'prixChaise')">
					  </div>
				   </td>
				   <td id='prixOptionChaise'>0</td>
			   </tr>
			   
				<td scope="row">Total</td>
				   <td> </td>
				   <td> </td>
				    <?php
				   if($association){
					   echo "<td id='prixOptionTotal'>15</td>";
				   }else{
					   echo "<td id='prixOptionTotal'>25</td>";
				   }
				   ?>
			   </tr>
			</table>
			<div class="form-group row">
			<div class="offset-6 col-6">
			  <button name="submit" type="submit" class="btn btn-primary">Valider</button>
			</div>
		  </div>
		</form>
	</div>
</section>

<script>
	loadVal();
	function calcSum(){
		var somme=0;
		somme+=parseInt(document.getElementById("prixOptionEmplacement").innerHTML,10);
		somme+=parseInt(document.getElementById("prixOptionTable").innerHTML,10);
		somme+=parseInt(document.getElementById("prixOptionBadge").innerHTML,10);
		somme+=parseInt(document.getElementById("prixOptionChaise").innerHTML,10);
		document.getElementById("prixOptionTotal").innerHTML =somme+'€';
	}
	
		function loadVal(){
			updatePrice('prixOptionEmplacement',1, 'prixEmplacement');
			updatePrice('prixOptionTable',0, 'prixTable');
			updatePrice('prixOptionBadge',0, 'prixBadge');
			updatePrice('prixOptionChaise',0, 'prixChaise');
			calcSum();
		}
	
	function updatePrice(nameResult, val, idPrix){
		document.getElementById(nameResult).innerHTML=val*parseInt(document.getElementById(idPrix).innerHTML,10);
		calcSum();
	}


</script>

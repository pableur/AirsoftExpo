		<!-- Infos -->
	<section id="infosPayement">

		<form method="post">
		  <input id="blablabla" name="blablabla" type="hidden" value="<?php echo $idExposant;?>">
		  <input id="phase" name="phase" type="hidden" value="payement">
		  <div class="form-group row">
			<div class="col-4"></div> 
			<div class="col-8">
			<p>Option de payement :</p>
			  <div class="custom-controls-stacked">
				<div class="custom-control custom-radio">
				  <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="cheque"> 
				  <label for="radio_0" class="custom-control-label">Chèque</label>
				</div>
			  </div>
			  <div class="custom-controls-stacked">
				<div class="custom-control custom-radio">
				  <input name="radio" id="radio_1" type="radio" class="custom-control-input" value="argent"> 
				  <label for="radio_1" class="custom-control-label">Argent liquide</label>
				</div>
			  </div>
			  <div class="custom-controls-stacked">
				<div class="custom-control custom-radio">
				  <input name="radio" id="radio_2" type="radio" class="custom-control-input" value="virement"> 
				  <label for="radio_2" class="custom-control-label">Virement banquaire</label>
				</div>
			  </div>
			</div>
		  </div> 
		  <div class="form-group row">
			<div class="offset-4 col-8">
			  <button name="submit" type="submit" class="btn btn-primary">Valider</button>
			</div>
		  </div>
		</form>

		<div class="offset-4 col-4">
			<p>OU</p>
			<div id="paypal-button-container"></div>
		</div>
    </section>

	
	<section id="infos">
      <div class="container">
		  
	</div>
</section>


<script src="https://www.paypalobjects.com/api/checkout.js"></script>

<script>

    // Render the PayPal button
    paypal.Button.render({

        // Set your environment
        env: 'production', // sandbox | production

        // Specify the style of the button
        style: {
            label: 'checkout',
            size:  'responsive',    // small | medium | large | responsive
            shape: 'pill',     // pill | rect
            color: 'gold'      // gold | blue | silver | black
        },

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create
        client: {
            sandbox:    'AVo31cCuh-Ov1QeYHQp68iHFAHFSB3tHF3u6W3UgNefWbJyWmXf6oFiuN3AFXIQcNT01qTYfaQrkxcYm',
            production: 'AXanyUkJjUQJIbmvkB0ra6xHAAnwPeX2m4V71wkSm7itAEN1MuaMvLE2QG1Wj6UgTdrGHlwb51N3J7M2'
        },
		
        payment: function(data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '<?php echo $price?>', currency: 'EUR' }
                        }
                    ]
                }
            });
        },

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
				window.alert('Payment Complete!');
				document.location.href="<?php echo HOSTNAME;?>/val_paypal.php?client=firefox-b&q=php&blablabla=<?php echo $idExposant;?>&table=Exposants&token=f3fdcbfe9718850425fb963264741557";
            });
        }

    }, '#paypal-button-container');

</script>
    
<?php

include("fonction_api.php"); // On importe la page créée précédemment

$requete = construit_url_paypal(); // Construit les options de base

// La fonction urlencode permet d'encoder au format URL les espaces, slash, deux points, etc.)

$requete = $requete."&METHOD=SetExpressCheckout".
            "&CANCELURL=".urlencode("http://127.0.0.1/cancel.php").
            "&RETURNURL=".urlencode("http://127.0.0.1/return.php").
            "&AMT=10.0".
            "&CURRENCYCODE=EUR".
            "&DESC=".urlencode("Magnifique oeuvre d'art (que mon fils de 3 ans a peint.)").
            "&LOCALECODE=FR".
            "&HDRIMG=".urlencode("http://www.siteduzero.com/Templates/images/designs/2/logo_sdz_fr.png");
echo $requete;
 ?>
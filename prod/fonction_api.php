<?php

  function construit_url_paypal()  {

    $api_paypal = 'https://api-3t.sandbox.paypal.com/nvp?'; // Site de l'API PayPal. On ajoute déjà le ? afin de concaténer directement les paramètres.
    $version = 56.0; // Version de l'API

    $user = 'deconto1308-facilitator@hotmail.fr'; // Utilisateur API
    $pass = 'dridri25'; // Mot de passe API  AQ8dtX5qRS5ycSfhOQ10pfggm5BIJpz3m6i5XDZl72AvHblNqU0Fg7Fc-CVoeengAli9guYi-HMhsj6F
    $signature = 'EMVoZGP_Y_ZS30tGR40NKx7m2OJKlFGOeoh2InTv-XGEKWb01v1a8xGjwoVe9yGG38mPFNhlrcysTlcT'; // Signature de l'API
    $api_paypal = $api_paypal.'VERSION='.$version.'&USER='.$user.'&PWD='.$pass.'&SIGNATURE='.$signature; // Ajoute tous les paramètres

    return  $api_paypal; // Renvoie la chaîne contenant tous nos paramètres.
  }
?>
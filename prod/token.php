<?php

$ch = curl_init();
$clientId = "AQ8dtX5qRS5ycSfhOQ10pfggm5BIJpz3m6i5XDZl72AvHblNqU0Fg7Fc-CVoeengAli9guYi-HMhsj6F";
$secret = "EMVoZGP_Y_ZS30tGR40NKx7m2OJKlFGOeoh2InTv-XGEKWb01v1a8xGjwoVe9yGG38mPFNhlrcysTlcT";

curl_setopt($ch, CURLOPT_URL, "https://api.sandbox.paypal.com/v1/oauth2/token");
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
curl_setopt($ch, CURLOPT_USERPWD, $clientId.":".$secret);
curl_setopt($ch, CURLOPT_POSTFIELDS, "grant_type=client_credentials");

$result = curl_exec($ch);

if(empty($result))die("Error: No response.");
else
{
    $json = json_decode($result);
    print_r($json->access_token);  // A21AAE4Hvu3hpUM1AhtQFbNrn7a2CO04KFF13WaR5NAsVVbRVvI3WOzx18Cfp9wo4P92dAK96zV3jUTWUeTnL4GrpI8mBsH_Q
}

curl_close($ch);

<?php

include_once('PayPal.php');

$token=$_GET["token"];//Session retourn� par Paypal

$paypal = new PayPal();

$requestParams = array('TOKEN' => $token);

$response = $paypal->GetExpressCheckoutDetails($requestParams);

$payerId=$response["PAYERID"];//ID du paiement retourn� par Paypal

$requestParams=array(

"TOKEN"=>$token,

"PAYERID"=>$payerId,

"PAYMENTREQUEST_0_AMT"=>"20",//Motant du paiement

"PAYMENTREQUEST_0_CURRENCYCODE"=>"EUR",//Monnaie

"PAYMENTREQUEST_0_ITEMAMT"=>"20"//Nombre d'objet

);

$transactionResponse=$paypal->DoExpressCheckoutPayment($requestParams);//Execute la transfaction

if(is_array($transactionResponse) && $transactionResponse["ACK"]=="Success"){//Le paiement est r�alis� avec succ�s

echo "payement OK";

}

else{

echo "payement echec";

}

?>


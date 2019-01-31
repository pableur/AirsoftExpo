<?php
 class PayPal {
 //API Credentials
 protected $username = "deconto1308-facilitator@hotmail.fr"; //PayPal API utilisateur
 protected $password = "atmega16"; //PayPal API mot de passe
 protected $apiSignature = "EMVoZGP_Y_ZS30tGR40NKx7m2OJKlFGOeoh2InTv-XGEKWb01v1a8xGjwoVe9yGG38mPFNhlrcysTlcT"; //PayPal API signature
 protected $apiVersion = "74.0"; //Set PayPal API version

protected $payPalAPIUrl = "https://api-3t.sandbox.paypal.com/nvp";
 protected $errorReportingEnabled = true;
 protected $errors = array();
 protected $lastServerResponse;
 protected $curl;

public function SetExpressCheckout($request) {
 return $this->sendRequest($request, "SetExpressCheckout");
 }

public function DoExpressCheckoutPayment($request) {
 return $this->sendRequest($request, "DoExpressCheckoutPayment");
 }

public function GetExpressCheckoutDetails($request) {
 return $this->sendRequest($request, "GetExpressCheckoutDetails");
 }

public function DoAuthorization($request){
 return $this->sendRequest($request, "DoAuthorization");
 }
 public function DoReauthorization($request){
 return $this->sendRequest($request, "DoReauthorization");
 }

public function DoVoid($request){
 return $this->sendRequest($request, "DoVoid");
 }
 public function UpdateAuthorization($request){
 return $this->sendRequest($request, "UpdateAuthorization");
 }

public function BAUpdate($request){
 return $this->sendRequest($request, "BAUpdate");
 }

public function BillOutstandingAmount($request){
 return $this->sendRequest($request, "BillOutstandingAmount");
 }

public function CreateBillingAgreement($request){
 return $this->sendRequest($request, "CreateBillingAgreement");
 }

public function CreateRecurringPaymentsProfile($request){
 return $this->sendRequest($request, "CreateRecurringPaymentsProfile");
 }

public function DoReferenceTransaction($request){
 return $this->sendRequest($request, "DoReferenceTransaction");
 }
 public function GetRecurringPaymentsProfileDetails($request){
 return $this->sendRequest($request, "GetRecurringPaymentsProfileDetails");
 }

public function ManageRecurringPaymentsProfileStatus($request){
 return $this->sendRequest($request, "ManageRecurringPaymentsProfileStatus");
 }

public function UpdateRecurringPaymentsProfile($request){
 return $this->sendRequest($request, "UpdateRecurringPaymentsProfile");
 }

public function RefundTransaction($request){
 return $this->sendRequest($request, "RefundTransaction");
 }
 public function sendRequest($requestData, $method) {
 if (!isset($method)) {
 array_push($this->errors, "Method name can not be empty");
 }
 if (!isset($requestData)) {
 array_push($this->errors, "Request data is can not be empty");
 }
 if ($this->checkForErrors()) {//If there are errors, STOP
 if ($this->errorReportingEnabled())//If error reporting is enabled, show errors
 $this->showErrors();
 $this->lastServerResponse = null;
 return false; //Do not send a request
 }
 $requestParameters = array(
 "USER" => $this->username,
 "PWD" => $this->password,
 "SIGNATURE" => $this->apiSignature,
 "METHOD" => $method,
 "VERSION" => $this->apiVersion,
 );
 $requestParameters+=$requestData;
 $finalRequest = http_build_query($requestParameters);
 $ch = curl_init();
 $this->curl=$ch;

$curlOptions=$this->getcURLOptions();
 $curlOptions[CURLOPT_POSTFIELDS]=$finalRequest;
 //var_dump($curlOptions);exit;

curl_setopt_array($ch, $curlOptions);
 $serverResponse = curl_exec($ch);
 if (curl_errno($ch)) {
 $this->errors = curl_error($ch);
 curl_close($ch);
 if ($this->errorReportingEnabled) {
 $this->showErrors();
 }
 $this->lastServerResponse = null;
 return false;
 } else {
 curl_close($ch);
 $result = array();
 parse_str($serverResponse, $result);
 $this->lastServerResponse = $result;
 return $this->lastServerResponse;
 }
 }
 /**
 * Returns latest result from the PayPal servers
 * @return array
 */
 public function getLastServerResponse() {
 return $this->lastServerResponse;
 }
 /**
 * Call this function if you want to retreave errors occured during last API call
 * @return void Prints all errors during last API call.
 */
 public function showErrors() {
 var_dump($this->errors);
 }
 /**
 *
 * @param string $username Set your PayPal API username
 */
 public function setUsername($username) {
 $this->username = $username;
 }
 /**
 *
 * @param string $password Set your PayPal API password
 */
 public function setPassword($password) {
 $this->password = $password;
 }
 /**
 *
 * @param string $apiSignature Set your PayPal API signature
 */
 public function setApiSignature($apiSignature) {
 $this->apiSignature = $apiSignature;
 }
 /**
 * Call this function if you want to disable error reporting
 */
 public function disableErrorReporting(){
 $this->errorReportingEnabled=false;
 }
 /**
 * Call this function if you want to enable error reporting
 */
 public function enableErrorReporting(){
 $this->errorReportingEnabled=true;
 }
 /**
 *
 * @return boolean Checks if there are errors and returns the true/false
 */
 private function checkForErrors() {

if(!is_array($this->errors) && $this->errors!="") return TRUE;

if (count($this->errors) > 0) {
 return true;
 }
 return false;
 }
 /**
 * Returns an array of options to initialize cURL
 * @return array
 */
 private function getcURLOptions() {
 return array(
 CURLOPT_URL => $this->payPalAPIUrl,
 CURLOPT_VERBOSE => 1,
 CURLOPT_SSL_VERIFYPEER => true,
 CURLOPT_SSL_VERIFYHOST => 2,
 //CURLOPT_CAINFO => dirname(__FILE__) . '/cacert.pem', //CA cert file
 CURLOPT_RETURNTRANSFER => 1,
 CURLOPT_SSL_VERIFYPEER => true,
 CURLOPT_POST => 1,
 );
 }

/**
 * If you want to set cURL with additional parameters, use this function. NOTE: Call this function prior sendRequest method
 * @param int $option
 * @param mixed $value
 */
 public function setCURLOption($option, $value){
 curl_setopt($this->curl, $option, $value);
 }
 }
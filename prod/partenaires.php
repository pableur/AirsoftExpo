<?php

 function getPartenaire($name, $path, $Url){
  return '<div class="col-md-4 col-sm-6"> <!-- max 12 colonne -->
	<a href="'.$Url.'"  target="_blank">
	  <img class="img-fluid d-block mx-auto" src="'.$path.'" alt="">
	</a>
  </div>';
}
<?php

 function getExposant($donnees){
  return '<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal'.$donnees['id'].'">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
			  <div class="text-center">
				<img class="img-center" src="'.$donnees['Path'].'" alt="" width="262.5">
			  </div>
            </a>
            <div class="portfolio-caption">
              <h4>'.$donnees['name'].'</h4>
              <p class="text-muted">Team</p>
            </div>
          </div>';
}

function getPartenaireModal($donnees){
return '    
<div class="portfolio-modal modal fade" id="portfolioModal'.$donnees['id'].'" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">'.$donnees['name'].'</h2>
                  <img class="img-fluid d-block mx-auto" src="'.$donnees['Path'].'" alt="">
                  <p>'.$donnees['description'].'</p>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fas fa-times"></i>
                    Fermer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>';

}
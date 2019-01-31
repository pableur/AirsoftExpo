<?php

 function getInvites($donnees){
  return '          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="'.$donnees['Path'].'" alt="">
              <h4>'.$donnees['Name'].'</h4>
              <p class="text-muted">'.$donnees['Description'].'</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>';
}

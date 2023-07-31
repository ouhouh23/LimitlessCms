<?php

function render_pagination($page, $section = null) {
  $links = paginate_links([
    'prev_text' => ('<button type="button" class="button button_square 
                      button_small button_primary button_rounded 
                      carousel__button carousel__button_left">
                        <i class=" fa-solid fa-arrow-left"></i>
                    </button>'
                  ),
    'next_text' => ('<button type="button" class="button button_square 
                      button_small button_primary button_rounded 
                      carousel__button carousel__button_right">
                        <i class=" fa-solid fa-arrow-right"></i>
                    </button>'
                  ),
    'base'    => site_url("/$page/%_%#$section"),
  ]);

  if(!$links) {
    return;
  }

  echo "<div class='carousel-group pagination'>$links</div>";
}
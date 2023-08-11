<?php
if (!isset($content)) {
  die();
}
?>

<section class="carousel">
  <div class="carousel__gallery">
    <?= $content ?>
  </div>

  <div class="carousel-group">
    <button
      type="button" 
      class="button button_square button_small button_primary button_rounded carousel__button carousel__button_left"
    >
      <i class=" fa-solid fa-arrow-left"></i>
    </button>

    <button
      type="button" 
      class="button button_square button_small button_primary button_rounded carousel__button carousel__button_right"
    >
      <i class=" fa-solid fa-arrow-right"></i>
    </button>
  </div>
</section>
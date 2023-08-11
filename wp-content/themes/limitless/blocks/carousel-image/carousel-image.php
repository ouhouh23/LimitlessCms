<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/assets/images/carousel/carousel-1.png');
}
?>

<img 
  src="<?= $attributes['imgURL'] ?>"
  alt="carousel image"
  class="carousel__image"
  width="699"
  height="525"
>

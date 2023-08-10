<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/assets/images/section/section-1.png');
}
?>

<img 
  src="<?= $attributes['imgURL'] ?>"
  alt="of the section"
  class="section__image"
  width="734"
  height="842"
>
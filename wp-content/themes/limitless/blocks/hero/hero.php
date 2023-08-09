<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/assets/images/hero/hero-illustrated.png');
}
?>

<section class="hero hero_illustrated wrapper" style="background-image: url('<?= $attributes['imgURL'] ?>')">
  <?= $content ?>
</section>
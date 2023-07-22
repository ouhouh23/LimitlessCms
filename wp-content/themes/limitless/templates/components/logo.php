<?php

$custom_logo_id = get_theme_mod('custom_logo');
$logo = wp_get_attachment_image_src($custom_logo_id , 'full');  
?>

<a href="<?= get_home_url() ?>" class="logo <?= $class ?>">
  <?php if (has_custom_logo()) : ?>
    <img 
      src="<?= esc_url($logo[0]) ?>" 
      alt="site logo" 
      class="logo__image"
      width="54"
      height="54" 
    />
  <?php endif ?>

  <span class="logo__text"><?php bloginfo('name')?></span>
</a>
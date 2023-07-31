<?php 
  $navigation = wp_nav_menu(
  [
    'theme_location' => 'headerMenu',
    'container' => false,
    'menu_class' => 'navigation__menu',
    'fallback_cb' => '__return_empty_string',
    'link_class' => 'link link_large link_primary navigation__item',
    'echo' => false
  ]);
?>

<header class="navigation-container wrapper">
  <div class="navigation">

    <?php render_component('logo', 'logo_small') ?>

    <div class="navigation__group">  
      <nav class="navigation__container">
        <?= $navigation ?>
      </nav>

      <button
        type="button"
        class="button button_small button_primary navigation__button" 
      >
        donate
      </button>
    </div>

    <i class="fa-solid fa-bars navigation__mobile-button"></i>
  </div>
</header>

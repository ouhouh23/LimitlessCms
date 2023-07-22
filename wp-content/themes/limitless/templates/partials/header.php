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

    <?php the_custom_component('logo', 'logo_small') ?>

    <div class="navigation__group">  
      <nav class="navigation__container">
        <?= $navigation ?>
<!--         <ul class="navigation__menu">
            <li>
              <a href="#" class="link link_large link_primary navigation__item navigation__item_active">
                  About us
              </a>
            </li>
            <li>
              <a href="#" class="link link_large link_primary navigation__item">
                  Our mission
              </a>
            </li>
        </ul> -->
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

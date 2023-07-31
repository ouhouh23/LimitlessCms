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

      <?php if (is_user_logged_in()) : ?>
        <a
          href="<?= wp_logout_url(site_url())  ?>"
          class="button button_small button_primary navigation__button" 
        >
          Logout
        </a>
      <?php else : ?>
        <a
          href="<?= site_url('/login') ?>"
          class="button button_small button_primary navigation__button" 
        >
          Login
        </a>
      <?php endif ?>
    </div>

    <i class="fa-solid fa-bars navigation__mobile-button"></i>
  </div>
</header>

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

    <?php render_element('components/logo', 'logo_small') ?>

    <div class="navigation__group">  
      <nav class="navigation__container">
        <?= $navigation ?>
      </nav>

      <?php if (is_user_logged_in()) : ?>
        <div class="navigation__buttons">
          <a
            href="<?= site_url('/post-create')  ?>"
            class="button button_small button_primary navigation__button" 
          >
            Create Post
          </a>

          <a
            href="<?= wp_logout_url(site_url())  ?>"
            class="button button_small button_primary navigation__button" 
          >
            Logout
          </a>
        </div>
      <?php else : ?>
        <div class="navigation__buttons">
          <a
            href="<?= site_url('/signup') ?>"
            class="button button_small button_primary navigation__button" 
          >
            Sign Up
          </a>

          <a
            href="<?= site_url('/login') ?>"
            class="button button_small button_primary navigation__button" 
          >
            Login
          </a>
        </div>
      <?php endif ?>
    </div>

    <i class="fa-solid fa-bars navigation__mobile-button"></i>
  </div>
</header>

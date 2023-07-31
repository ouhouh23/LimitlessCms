<?php
/*
 Template name: Login
*/
 
if (is_user_logged_in()) {
  wp_redirect(site_url('/'));
  die();
}

get_template_part('templates/partials/head');
get_template_part('templates/partials/header') 
?>

<section class="form wrapper">
  <h1 class="heading_xxl heading_heavy form__heading">Log in to <?php bloginfo('name') ?></h1>

  <form class="form__body" action="<?= site_url('/wp-login.php') ?>" method="post">
    <div class="input input_compact form__item">
      <label class="paragraph_sm paragraph_heavy input__label" for="input-form-1">
        Email address
        <span class="input__required">*</span>
      </label>

      <input 
        type="email" 
        name="log" 
        class="input__body paragraph_heavy" 
        id="input-form-1" 
      />
    </div>

    <div class="input input_compact form__item">
      <label class="paragraph_sm paragraph_heavy input__label" for="input-form-2">
        Password
        <span class="input__required">*</span>
      </label>

      <input 
        type="password" 
        name="pwd" 
        class="input__body paragraph_heavy" 
        id="input-form-2" 
      />
    </div>

    <?php 
      if($_GET['failed'] ?? false) {
          render_component('message', '', [
            'text' => 'ERROR! Please provide correct email and password.'
          ]);
      }
    ?>

    <button 
      type="sumbit"
      class="button button_medium button_primary form__button" 
    >
      Log in!
    </button>
  </form>
</section>

<?php get_template_part('templates/partials/footer') ?>

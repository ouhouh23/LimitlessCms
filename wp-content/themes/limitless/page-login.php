<?php
/*
 Template name: Login
*/
 
if (is_user_logged_in()) {
  wp_redirect(site_url('/'));
  die();
}

$errors = [];

if($_GET['failed'] ?? false) {
  $errors['text'] = 'ERROR! Please provide correct email and password.';
}

get_template_part('templates/partials/head');
get_template_part('templates/partials/header'); 

render_element('sections/login', '', $errors);

get_template_part('templates/partials/footer') ?>

<?php
/*
 Template name: Signup
*/
 
if (is_user_logged_in()) {
  wp_redirect(site_url('/'));
  die();
}

$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $user_id = wp_create_user($email, $password, $email);

  if (!is_wp_error($user_id)) {
    die();
  }

  $errors['text'] = $user_id->get_error_message();
}

get_template_part('templates/partials/head');
get_template_part('templates/partials/header');

render_element('sections/registration-form', '', $errors);

get_template_part('templates/partials/footer');

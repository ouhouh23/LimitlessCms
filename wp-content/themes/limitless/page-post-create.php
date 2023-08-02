<?php
/*
 Template name: Create Post
*/

if (!is_user_logged_in()) {
  wp_redirect(site_url('/login'));
  die();
}

get_template_part('templates/partials/head');
get_template_part('templates/partials/header'); 

render_element('sections/post-form', 'form_wide');

get_template_part('templates/partials/footer') ?>

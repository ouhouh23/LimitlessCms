<?php
/*
 Template name: Edit Post
*/

if (get_current_user_id() !== intval(get_post_field('post_author', $_GET['id']))) {
  wp_redirect(site_url('/'));
  die();
}

get_template_part('templates/partials/head');
get_template_part('templates/partials/header'); 

render_element('sections/post/form-edit', 'form_wide', [
  'post' => get_post(intval($_GET['id']))
]);

get_template_part('templates/partials/footer') ?>

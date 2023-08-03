<?php

function attach_image($post_id) {
  if (is_admin()) {
    return;
  }

  require_once(ABSPATH . 'wp-admin/includes/media.php');
  require_once(ABSPATH . 'wp-admin/includes/file.php');
  require_once(ABSPATH . 'wp-admin/includes/image.php');

  $post_image_id = media_handle_upload('post_image', $post_id);

  if (!is_int($post_image_id)) {
    return;
  }

  set_post_thumbnail($post_id, $post_image_id);
}

add_action('wp_insert_post', 'attach_image');
<?php

function post_filters($query) {
  if (!is_admin() && is_post_type_archive('team') && $query->is_main_query()) {
    $query->set('posts_per_page', 6);
  }

  if (!is_admin() && str_contains($_SERVER['REQUEST_URI'], "/blog/") && $query->is_main_query()) {
    $query->set('posts_per_page', 7);
    $query->set('category_name', 'Posts');
  }

  if (!is_admin() && str_contains($_SERVER['REQUEST_URI'], "/category/posts") && $query->is_main_query()) {
    $query->set('posts_per_page', 7);
  }
}

add_action('pre_get_posts', 'post_filters');
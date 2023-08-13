<?php

function get_posts_description($type, $category, $posts) {
  if ($type !== 'post') {
    return get_post_type_object($type)->description;
  }
  $categories = get_the_category($posts[0]);

  foreach($categories as $item) {
    if ($item->name == $category) {
      return $item->description;
    }
  }
}
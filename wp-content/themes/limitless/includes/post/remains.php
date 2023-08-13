<?php

function posts_remain($type, $category, $posts) {
  if ($type == 'post') {
    $categories = get_the_category($posts[0]);

    foreach($categories as $item) {
      if ($item->name == $category) {
         return $item->category_count > count($posts);
      }
    }
  }

  return intval(wp_count_posts($type)->publish) > count($posts);
}
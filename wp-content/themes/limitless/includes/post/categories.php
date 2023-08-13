<?php

function get_post_categories($type) {
  if ($type !== 'post') {
    return null;
  }

  $categories = [];

  foreach(get_the_category() as $category) {
    if ($category->name !== 'Posts') {
      $categories[] = ['name' =>$category->name, 'id' => $category->cat_ID];
    }
  }
  return $categories; 
}
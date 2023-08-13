<?php

function get_posts_title($type) {
  if ($type !== 'post') {
   return get_post_type_object($type)->labels->name;
  }

  return 'Posts';
}
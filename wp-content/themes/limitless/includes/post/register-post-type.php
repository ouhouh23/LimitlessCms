<?php

function register_post_types() {
  register_post_type('programs', [
    'public' => true,
    'show_in_rest' => true,
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
    'has_archive' => true,
    'menu_icon' => 'dashicons-media-document',

    'description' => 'Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem adipiscing risus 
      pulvinar non sed nullam id integer. Integer quis porttitor mauris arcu, pretium orci quam. 
      Enim cursus mattis nunc aliquam pharetra feugiat ante sollicitudin',

    'labels' => [
      'name' => 'Programs',
      'add_new_item' => 'Add New Program',
      'edit_item' => 'Edit Program',
      'all_items' => 'All Programs',
      'singular_name' => 'Program'
    ],
  ]);

  register_post_type('team', [
    'public' => true,
    'show_in_rest' => true,
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
    'has_archive' => true,
    'menu_icon' => 'dashicons-businessperson',

    'description' => 'Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem adipiscing risus 
      pulvinar non sed nullam id integer. Integer quis porttitor mauris arcu, pretium orci quam. 
      Enim cursus mattis nunc aliquam pharetra feugiat ante sollicitudin',
      
    'labels' => [
      'name' => 'Team',
      'add_new_item' => 'Add new team member',
      'edit_item' => 'Edit team member',
      'all_items' => 'All team members',
      'singular_name' => 'Team member'
    ],
  ]);
}

add_action('init', 'register_post_types');
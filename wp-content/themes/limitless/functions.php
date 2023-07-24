<?php

function get_styles() {
	wp_enqueue_style('main-style', get_theme_file_uri('build/index.css'), null, microtime());
}

function get_scripts() {
	wp_enqueue_script('fontawesome', "https://kit.fontawesome.com/6b13e560f5.js");
	wp_enqueue_script('main-js', get_theme_file_uri('build/index.js'), null, microtime());
}

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}

function the_custom_component($component, $class = '', $atts = null) {
	$path = "wp-content/themes/limitless/templates/components/$component.php";

	if (!file_exists($path)) {
		return;
	}

	require($path);	
}

function custom_theme_features() {
	add_theme_support('custom-logo');
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails'); 

	register_nav_menus( 
		[
			'headerMenu' => 'Header menu',
			'FooterMenu' => 'Footer menu'
		]);	
	}

function add_menu_link_class($atts, $item, $args) {
  if (property_exists($args, 'link_class')) {
    $atts['class'] = $args->link_class;
  }

  if ($item->current) {
  	$class = 'navigation__item_active';
  	$atts['class'] = isset($atts['class']) ? "{$atts['class']} $class" : $class;
  }

  return $atts;
}

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
}

add_action('wp_enqueue_scripts', 'get_styles');
add_action('wp_enqueue_scripts', 'get_scripts');
add_action('after_setup_theme', 'custom_theme_features');
add_action('init', 'register_post_types');

add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);
add_filter('upload_mimes', 'cc_mime_types');
add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);




function render_posts($number, $category, $type = 'post', $component, $component_class = '') {
  global $post;

  $posts = get_posts([
    'posts_per_page' => $number,
    'category_name' => $category,
    'post_type' => $type,
    'order' => 'ASC'
  ]);

  if (empty($posts)) {
     echo "<h3 class='heading_xl heading_heavy collection__placeholder'>No $category yet.</h3>";
  }

  else {
    echo '<div class="collection__container">';

    foreach ($posts as $post) {
      setup_postdata($post);

      $src = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : 
        '/wp-content/themes/limitless/assets/images/cards/placeholder-1.png';
      $thumbnail_id = get_post_thumbnail_id($post->ID);
      $alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ? 
        get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) : "$category image";

      the_custom_component($component, $component_class, [
        'src' => $src,
        'alt' => $alt
      ]);
    }

    echo '</div>';
  }

  wp_reset_postdata();
} 


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

function the_custom_component($component, $class = '') {
	$path = "wp-content/themes/limitless/templates/components/$component.php";

	if (!file_exists($path)) {
		return;
	}

	require($path);	
}

function custom_theme_features() {
	add_theme_support( 'custom-logo' );
	add_theme_support('title-tag');
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

add_filter( 'nav_menu_link_attributes', 'add_menu_link_class', 1, 3 );

add_action('wp_enqueue_scripts', 'get_styles');
add_action('wp_enqueue_scripts', 'get_scripts');
add_action('after_setup_theme', 'custom_theme_features');

add_filter('upload_mimes', 'cc_mime_types');
add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);

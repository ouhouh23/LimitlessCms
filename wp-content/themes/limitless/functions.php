<?php

function get_styles() {
	wp_enqueue_style('main-style', get_stylesheet_uri(), array(), microtime());
}

function get_scripts() {
	wp_enqueue_script('fontawesome', "https://kit.fontawesome.com/6b13e560f5.js");
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

add_action('wp_enqueue_scripts', 'get_styles');
add_action('wp_enqueue_scripts', 'get_scripts');

add_theme_support( 'custom-logo' );

add_filter('upload_mimes', 'cc_mime_types');

// connect scripts
// enable menus;
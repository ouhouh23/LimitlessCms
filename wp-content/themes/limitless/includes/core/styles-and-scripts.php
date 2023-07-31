<?php

function get_styles() {
	wp_enqueue_style('main-style', get_theme_file_uri('build/index.css'), null, microtime());
}

function get_scripts() {
	wp_enqueue_script('fontawesome', "https://kit.fontawesome.com/6b13e560f5.js");
	wp_enqueue_script('main-js', get_theme_file_uri('build/index.js'), null, microtime());
}

add_action('wp_enqueue_scripts', 'get_styles');
add_action('wp_enqueue_scripts', 'get_scripts');
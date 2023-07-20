<?php

function get_styles() {
	wp_enqueue_style('main-style', get_stylesheet_uri(), array(), microtime());
}

function get_scripts() {
	wp_enqueue_script('fontawesome', "https://kit.fontawesome.com/6b13e560f5.js");
}

add_action('wp_enqueue_scripts', 'get_styles');
add_action('wp_enqueue_scripts', 'get_scripts');

// connect sctipts
// enable logo;
// enable menus;
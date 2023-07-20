<?php

function get_styles() {
	wp_enqueue_style('main-style', get_stylesheet_uri(), array(), microtime());
}

add_action('wp_enqueue_scripts', 'get_styles');

// connect sctipts
// enable logo;
// enable menus;

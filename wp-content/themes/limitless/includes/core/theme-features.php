<?php

function theme_features() {
	add_theme_support('custom-logo');
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support('editor-styles');
	add_image_size('compact', 289, 217, true);
	add_theme_support('editor-styles');

	add_editor_style([ 'build/style-index.css', 'build/index.css']); 
}

add_action('after_setup_theme', 'theme_features', 1);
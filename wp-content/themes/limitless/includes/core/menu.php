<?php

function registered_menus() {
	register_nav_menus( 
		[
			'headerMenu' => 'Header menu',
			'FooterMenu' => 'Footer menu'
		]);	
	}

add_action('after_setup_theme', 'registered_menus', 2);

function set_link_class($atts, $item, $args) {
  if (property_exists($args, 'link_class')) {
    $atts['class'] = $args->link_class;
  }

  if ($item->current || (get_post_type() == 'post' && $item->title == 'Blog') || (get_post_type() == 'team' && $item->title == 'Our Team'))  {
  	$class = 'navigation__item_active';
  	$atts['class'] = isset($atts['class']) ? "{$atts['class']} $class" : $class;
  }

  return $atts;
}

add_filter('nav_menu_link_attributes', 'set_link_class', 1, 3);
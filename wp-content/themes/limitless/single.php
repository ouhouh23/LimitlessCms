<?php

get_template_part('templates/partials/head');
get_template_part('templates/partials/header');

$src = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : 
'/wp-content/themes/limitless/assets/images/cards/placeholder-1.png';

$thumbnail_id = get_post_thumbnail_id($post->ID);
$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ? 
get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) : "post image";

the_custom_component('card-opened', '', [
	'src' => $src,
	'alt' => $alt,
	'categories' => get_post_categories(get_post_type())
]);

get_template_part('templates/partials/footer');
<?php get_template_part('templates/partials/head') ?>
<section class="hero hero_tight hero_reverse hero_small wrapper">
  <?php get_template_part('templates/partials/header');
	if (!have_posts()) {
		echo'<h1 class="heading_xxl heading_heavy">No Posts yet</h1>';
	}
	else {
		dd(the_post_thumbnail('featuredPost'));
		$src = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url('featured_post') : 
		'/wp-content/themes/limitless/assets/images/cards/placeholder-1.png';

		$thumbnail_id = get_post_thumbnail_id($post->ID);
		$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ? 
			get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) : "post image";

		the_custom_component('sections/post-featured', '', [
			'src' => $src,
			'alt' => $alt
		]);

		the_post();
		echo '</section>';
	}
	get_template_part('templates/partials/footer');
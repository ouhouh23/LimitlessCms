<?php
	global $posts;
	global $post;

if (!have_posts()) {
	echo'<h1 class="heading_xxl heading_heavy">No Posts yet</h1>';
}

else {
	echo '<section class="hero hero_tight hero_reverse hero_small wrapper">';

	$src = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : 
	'/wp-content/themes/limitless/assets/images/cards/placeholder.png';

	$thumbnail_id = get_post_thumbnail_id($post->ID);
	$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ? 
		get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) : "post image";

	$author_id = get_post_field( 'post_author', $post->ID);

	render_element('/sections/post/main', '', [
		'src' => $src,
		'alt' => $alt,
		'author_id' => $author_id
	]);

	array_shift($posts);

	echo '</section>';
}

if (count($posts) > 0) : ?>
  <section class="collection wrapper">
		<header class="header collection__header">
		<h2 class="heading_xxl heading_heavy header__heading">All posts</h2>
		</header>

		<div class="collection__container">
			<?php foreach($posts as $post) {
				the_post();
				$src = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : 
				"/wp-content/themes/limitless/assets/images/cards/placeholder.png";
	      $thumbnail_id = get_post_thumbnail_id($post->ID);
	      $alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ? 
	        get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) : "content illustration";

	      $author_id = get_post_field( 'post_author', $post->ID);

	      render_element('components/card', 'card_compact', [
	        'src' => $src,
	        'alt' => $alt,
					'author_id' => $author_id,
	        'categories' => get_post_categories('post')
	      ]);
	  	}
	  echo '</div>';
endif;

render_pagination('blog');

wp_reset_postdata();

echo '</section>';
echo '</section>';

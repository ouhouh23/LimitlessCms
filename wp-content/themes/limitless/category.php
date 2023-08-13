<?php get_template_part('templates/partials/head') ?>
<?php get_template_part('templates/partials/header') ?>

<section class="collection wrapper">
	<header class="header collection__header">
		<h1 class="display_small heading_heavy header__heading">All posts</h1>
	</header>

	<div class="collection__container">
		<?php while(have_posts()) {
			foreach($posts as $post) {
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
		}

	echo '</div>';

	wp_reset_postdata();

	$slug = get_queried_object()->slug;
	render_pagination("category/posts/$slug");

echo '</section>';

get_template_part('templates/partials/footer');
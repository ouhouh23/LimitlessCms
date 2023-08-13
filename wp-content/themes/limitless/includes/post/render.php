<?php

function render_posts($number, $type = 'post', $category = '', $component, $css_class = '', $id = '#') {
  global $post;

  $posts = get_posts([
    'posts_per_page' => $number,
    'category_name' => $category,
    'post_type' => $type,
    'order' => 'ASC'
  ]);

  if (empty($posts)) {
     echo "<h3 class='heading_xl heading_heavy collection__placeholder'>No posts yet.</h3>";
     return;
  }

  $title = get_posts_title($type);
  $description = get_posts_description($type, $category, $posts);
?>

  <section id="<?= $id ?>" class="collection <?= $css_class ?> wrapper">
    <header class="header collection__header">

    <h2 class="display_small heading_heavy header__heading">Our <span class="header__underline"><?= $title ?></span></h2>

    <?php if (!empty($description)) : ?>
      <p class="paragraph_base paragraph_regular header__text">
        <?= $description ?>
      </p> 
    <?php endif ?>

    <?php if (str_contains($css_class, 'collection_inlined') && posts_remain($type, $category, $posts)) : ?>
      <a  
        href="<?= $type == 'post' ? get_site_url('/blog/') : get_post_type_archive_link($type) ?>" 
        class="button button_large button_primary collection__button">

        Watch all
      </a>
    <?php endif ?>
  </header>

  <div class="collection__container">

  <?php foreach ($posts as $post) {
      setup_postdata($post);

      $src = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : 
        "/wp-content/themes/limitless/assets/images/cards/placeholder.png";
      $thumbnail_id = get_post_thumbnail_id($post->ID);
      $alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ? 
        get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) : "content illustration";

      $author_id = get_post_field( 'post_author', $post->ID);

      render_element("components/$component", '', [
        'src' => $src,
        'alt' => $alt,
        'author_id' => $author_id,
        'categories' => get_post_categories($type)
      ]);
  }
  echo '</div>';
  
  if (!str_contains($css_class, 'collection_inlined') && posts_remain($type, $category, $posts)) : ?>
    <a  
      href="<?= $type == 'post' ? get_site_url(null, '/blog/') : get_post_type_archive_link($type) ?>" 
      class="button button_large button_primary collection__button">

      Watch all
    </a>
  <?php endif;

  echo '</section>';

  wp_reset_postdata();
}
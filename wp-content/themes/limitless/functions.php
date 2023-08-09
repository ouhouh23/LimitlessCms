<?php

// Core
require_once('includes/core/styles-and-scripts.php');
require_once('includes/core/svg-support.php');
require_once('includes/core/login.php');

  // Logo, title, thumbnails, image size support
  require_once('includes/core/theme-features.php');

  // Navigation menus
  require_once('includes/core/menu.php');
  
// Post
require_once('includes/post/register-post-type.php');
require_once('includes/post/attach-image.php');
require_once('includes/post/sanitize.php');
require_once('includes/post/filters.php');

// Components
require_once('includes/element.php');
require_once('includes/pagination.php');

// Blocks
require_once('includes/Block/Block.php');
require_once('includes/Block/StaticBlock.php');
require_once('includes/Block/DynamicBlock.php');

function dd($value) {
  echo '<pre>';
  var_dump($value);
  echo '</pre>';
  die();
}

function get_posts_title($type) {
  if ($type !== 'post') {
   return get_post_type_object($type)->labels->name;
  }

  return 'Posts';
}

function get_posts_description($type, $category, $posts) {
  if ($type !== 'post') {
    return get_post_type_object($type)->description;
  }
  $categories = get_the_category($posts[0]);

  foreach($categories as $item) {
    if ($item->name == $category) {
      return $item->description;
    }
  }
}

function get_post_categories($type) {
  if ($type !== 'post') {
    return null;
  }

  $categories = [];

  foreach(get_the_category() as $category) {
    if ($category->name !== 'Posts') {
      $categories[] = ['name' =>$category->name, 'id' => $category->cat_ID];
    }
  }
  return $categories; 
}

function posts_remain($type, $category, $posts) {
  if ($type == 'post') {
    $categories = get_the_category($posts[0]);

    foreach($categories as $item) {
      if ($item->name == $category) {
         return $item->category_count > count($posts);
      }
    }
  }

  return intval(wp_count_posts($type)->publish) > count($posts);
}

function render_posts($number, $type = 'post', $category = '', $component, $css_class = '', $size = null) {
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

  <section id="collection" class="collection <?= $css_class ?> wrapper">
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

new DynamicBlock('heading');
new DynamicBlock('caption');
new DynamicBlock('scroll');
new DynamicBlock('button');
new DynamicBlock('button-group');
new DynamicBlock('hero');

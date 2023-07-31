<?php

function dd($value) {
  echo '<pre>';
  var_dump($value);
  echo '</pre>';
  die();
}

function get_styles() {
	wp_enqueue_style('main-style', get_theme_file_uri('build/index.css'), null, microtime());
}

function get_scripts() {
	wp_enqueue_script('fontawesome', "https://kit.fontawesome.com/6b13e560f5.js");
	wp_enqueue_script('main-js', get_theme_file_uri('build/index.js'), null, microtime());
}

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}

function the_custom_component($component, $class = '', $atts = null) {
	$path = "wp-content/themes/limitless/templates/components/$component.php";

	if (!file_exists($path)) {
		return;
	}

	require($path);	
}

function custom_theme_features() {
	add_theme_support('custom-logo');
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
  add_image_size('compact', 289, 217, true); 

	register_nav_menus( 
		[
			'headerMenu' => 'Header menu',
			'FooterMenu' => 'Footer menu'
		]);	
	}

function add_menu_link_class($atts, $item, $args) {
  if (property_exists($args, 'link_class')) {
    $atts['class'] = $args->link_class;
  }

  if ($item->current) {
  	$class = 'navigation__item_active';
  	$atts['class'] = isset($atts['class']) ? "{$atts['class']} $class" : $class;
  }

  return $atts;
}

function register_post_types() {
  register_post_type('programs', [
    'public' => true,
    'show_in_rest' => true,
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
    'has_archive' => true,
    'menu_icon' => 'dashicons-media-document',

    'description' => 'Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem adipiscing risus 
      pulvinar non sed nullam id integer. Integer quis porttitor mauris arcu, pretium orci quam. 
      Enim cursus mattis nunc aliquam pharetra feugiat ante sollicitudin',

    'labels' => [
      'name' => 'Programs',
      'add_new_item' => 'Add New Program',
      'edit_item' => 'Edit Program',
      'all_items' => 'All Programs',
      'singular_name' => 'Program'
    ],
  ]);

  register_post_type('team', [
    'public' => true,
    'show_in_rest' => true,
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
    'has_archive' => true,
    'menu_icon' => 'dashicons-businessperson',

    'description' => 'Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem adipiscing risus 
      pulvinar non sed nullam id integer. Integer quis porttitor mauris arcu, pretium orci quam. 
      Enim cursus mattis nunc aliquam pharetra feugiat ante sollicitudin',
      
    'labels' => [
      'name' => 'Team',
      'add_new_item' => 'Add new team member',
      'edit_item' => 'Edit team member',
      'all_items' => 'All team members',
      'singular_name' => 'Team member'
    ],
  ]);
}

function post_filters($query) {
  if (!is_admin() && is_post_type_archive('team') && $query->is_main_query()) {
    $query->set('posts_per_page', 2);
  }

  if (!is_admin() && str_contains($_SERVER['REQUEST_URI'], "/blog/") && $query->is_main_query()) {
    $query->set('posts_per_page', 7);
    $query->set('category_name', 'Posts');
  }

  if (!is_admin() && str_contains($_SERVER['REQUEST_URI'], "/category/posts") && $query->is_main_query()) {
    $query->set('posts_per_page', 7);
  }
}

add_action('wp_enqueue_scripts', 'get_styles');
add_action('wp_enqueue_scripts', 'get_scripts');
add_action('after_setup_theme', 'custom_theme_features');
add_action('init', 'register_post_types');
add_action('pre_get_posts', 'post_filters');

add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);
add_filter('upload_mimes', 'cc_mime_types');
add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);

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

      the_custom_component($component, '', [
        'src' => $src,
        'alt' => $alt,
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

  // wp_reset_postdata();
} 

function render_pagination($page, $section = null) {
  $links = paginate_links([
    'prev_text' => ('<button type="button" class="button button_square 
                      button_small button_primary button_rounded 
                      carousel__button carousel__button_left">
                        <i class=" fa-solid fa-arrow-left"></i>
                    </button>'
                  ),
    'next_text' => ('<button type="button" class="button button_square 
                      button_small button_primary button_rounded 
                      carousel__button carousel__button_right">
                        <i class=" fa-solid fa-arrow-right"></i>
                    </button>'
                  ),
    'base'    => site_url("/$page/%_%#$section"),
  ]);

  if(!$links) {
    return;
  }

  echo "<div class='carousel-group pagination'>$links</div>";
}


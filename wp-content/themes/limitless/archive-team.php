<?php get_template_part('templates/partials/head') ?>

<section class="hero hero_cutted wrapper">
  <?php get_template_part('templates/partials/header') ?>

  <div class="hero__body">
    <div class="hero__text">
      <span class="caps caps_heavy hero__caption">Our   <?= get_post_type() ?></span>

      <h1 class="heading_xxl heading_heavy hero__heading">
        Meet the people who make it happen.
      </h1>
    </div>

    <img 
      src="/wp-content/themes/limitless/assets/images/hero/hero-2.png" 
      alt="hero image" 
      class="hero__image"
      width="846"
      height="630"
    />
  </div>

  <a href="#collection" class="scroll-button hero__scroll">
    <img src="/wp-content/themes/limitless/assets/images/icons/scroll-button.svg" alt="scroll button" class="scroll-button__icon" />

    <span class="scroll-button__text">
      Scroll
    </span>
  </a>
</section>

<section id="collection" class="collection collection_rounded wrapper">
  <header class="header collection__header">

    <h2 class="display_small heading_heavy header__heading">We're stronger <span class="header__underline">together</span></h2>

    <?php if (!empty($post_type->description)) : ?>
      <p class="paragraph_base paragraph_regular header__text">
        <?= $post_type->description ?>
      </p> 
    <?php endif ?>
  </header>

  <?php if(have_posts()) : ?>
    <div class="collection__container">
      <?php
        $counter = 0;
        $max = 4;

        while(have_posts()) {

          the_post();

          $src = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : 
            '/wp-content/themes/limitless/assets/images/cards/placeholder-1.png';

          $thumbnail_id = get_post_thumbnail_id($post->ID);
          $alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ? 
            get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) : "post image";

          render_element('components/card-rounded', '', [
            'src' => $src,
            'alt' => $alt
          ]);

          $counter++;

          if($counter === $max && (count($posts)) > $counter) {
            echo "</div>";
            echo "<div class='collection__container collection__container_triple'>";
          }
        }
      ?>
    </div>
  <?php endif;
    render_pagination('team', 'collection');
    wp_reset_postdata();
  ?>
</section>

<?php
 get_template_part('templates/components/offer');

 get_template_part('templates/partials/footer') 
 ?>

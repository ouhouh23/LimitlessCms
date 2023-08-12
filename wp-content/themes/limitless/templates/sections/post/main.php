<div class="hero__body">
  <div class="hero__text">
    <span class="caps caps_regular caps_secondary hero__caption">Featured post</span>

    <h1 class="heading_xxl heading_heavy">
      <?= wp_trim_words(get_the_excerpt(), 6) ?>
    </h1>

    <h2 class="heading_xs heading_regular">
      author:<span class="author" ><?= get_author_name($atts['author_id']); ?></span>
    </h2>

    <a
      href="<?= get_permalink() ?>"
      class="button button_medium button_primary hero__button" 
    >
      Read
    </a>

    <?php 
      if (get_current_user_id() == $atts['author_id']) {
        render_element('components/controls', 'button_medium');
      }
    ?>
  </div>

  <img 
    src="<?= $atts['src'] ?>" 
    alt="<?= $atts['alt'] ?>" 
    class="hero__image"
    width="502"
    height="502"
  />
</div>

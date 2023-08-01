<div class="hero__body">
  <div class="hero__text">
    <span class="caps caps_regular hero__caption">Featured post</span>

    <h1 class="heading_xxl heading_heavy">
      <?= wp_trim_words(get_the_excerpt(), 6) ?>
    </h1>

    <a
      href="<?= get_permalink() ?>"
      class="button button_medium button_primary hero__button" 
    >
      Read
    </a>
  </div>

  <img 
    src="<?= $atts['src'] ?>" 
    alt="<?= $atts['alt'] ?>" 
    class="hero__image"
    width="502"
    height="502"
  />
</div>
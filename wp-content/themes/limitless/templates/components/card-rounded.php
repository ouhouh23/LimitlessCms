<a href="<?= get_permalink() ?>">
  <div class="card <?= $class?>">
    <img 
      src="<?= $atts['src'] ?>"
      alt="<?= $atts['alt'] ?>"
      class="card__image collection__image"
      width="255"
      height="255"
    >

    <div class="card__text collection__text">
      <h3 class="heading_large heading_heavy collection__heading">
        <?php the_title() ?>
      </h3>

      <p class="paragraph_base paragraph_regular card__paragraph collection__paragraph">
        <?= wp_trim_words(get_the_excerpt(), 40) ?>
      </p>
    </div>
  </div>
</a>
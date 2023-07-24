<div class="card <?= $class ?>">
  <img 
    src="<?= $atts['src'] ?>"
    alt="<?= $atts['alt'] ?>"
    class="card__image"
    width="209"
    height="209"
  >

  <div class="card__text">
    <h3 class="heading_large heading_heavy">
      <?php the_title() ?>
    </h3>

    <p>
      <?= wp_trim_words(get_the_excerpt(), 40) ?>
    </p>

    <div class="card__buttons">
      <div class="card__button-group">
        <a 
          href="<?php the_permalink() ?>" 
          class="button button_small button_primary card__button"
        >
            Read more
        </a>
      </div>
    </div>
  </div>
</div>
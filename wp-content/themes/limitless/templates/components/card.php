<div class="card <?= $class ?>">
  <img 
    src="<?= $atts['src'] ?>"
    alt="<?= $atts['alt'] ?>"
    class="card__image"
    width="209"
    height="209"
  >

  <div class="card__text">
    <?php
    if (!empty($atts['categories'])) : ?>
      <div class="card__tags">
        <?php foreach($atts['categories'] as $category) : ?>
          <a href="<?= get_category_link($category['id']) ?>" class="tag tag_primary tag_outlined card__tag"><?= $category['name'] ?></a>
        <?php endforeach?>
      </div>
    <?php endif;

    if (get_current_user_id() == $atts['author_id']) {
      render_element('components/controls', 'button_small');
    }
    ?>

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
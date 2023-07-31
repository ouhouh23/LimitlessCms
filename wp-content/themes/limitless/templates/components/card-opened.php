<section class="section section_default section_tall">
  <div class="section__text">
    <?php
      if (!empty($atts['categories'])) : ?>
        <div class="card__tags">
          <?php foreach($atts['categories'] as $category) : ?>
            <a href="<?= get_category_link($category['id']) ?>" class="tag tag_primary tag_outlined card__tag"><?= $category['name'] ?></a>
          <?php endforeach?>
        </div>
    <?php endif?>
    
    <h1 class="heading_xxl heading_heavy section__heading">
      <?php the_title() ?>
    </h1>

    <?php the_content() ?>

      <a  
      href="<?= wp_get_referer() ?>#collection" 
      class="button button_large button_primary section__button">

      Go back
      </a>
  </div>

  <img 
    src="<?= $atts['src'] ?>"
    alt="<?= $atts['alt'] ?>"
    class="section__image"
    width="700"
    height="700"
  >
</section>
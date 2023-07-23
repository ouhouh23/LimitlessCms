<section class="section section_default section_tall">
  <div class="section__text">
    <h1 class="heading_xxl heading_heavy section__heading">
      <?php the_title() ?>
    </h1>

    <?php the_content() ?>

      <a  
      href="<?= wp_get_referer() ?>" 
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
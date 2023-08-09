<section class="section section_default section_tall">
  <div class="section__text">
    <h1 class="heading_xxl heading_heavy section__heading">
      <?php the_title() ?>
    </h1>

    <h2 class="heading_md heading_regular section__role">
      <?php the_field('role') ?>
    </h2>

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
    width="400"
    height="400"
  >
</section>
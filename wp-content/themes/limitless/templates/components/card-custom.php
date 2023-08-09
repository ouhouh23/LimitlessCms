<a href="<?= get_permalink() ?>">
	<div class="card collection__card">
		<img 
		  src="<?= $atts['src'] ?>"
		  alt="<?= $atts['alt'] ?>"
		  class="card__image collection__image"
		  width="104"
		  height="104"
		>

		<div class="card__text collection__text">
		  <h4 class="heading_md heading_heavy collection__heading">
		    <?php the_title() ?>
		  </h4>

		  <h5 class="caps caps_regular card__heading">
		    <?php the_field('role') ?>
		  </h5>
		</div>
	</div>
</a>

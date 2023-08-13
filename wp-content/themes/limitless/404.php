<?php get_template_part('templates/partials/head') ?>
<?php get_template_part('templates/partials/header') ?>

<section class="container">
  <header class="header">
    <h1 class="display_small heading_heavy header__heading"><span class="header__underline">404</span><br>
    	Sorry, page not found
    </h1>
  </header>

  <div class="container__body">
	  <a href="<?= site_url() ?>" class="button button_large button_primary">
	  	Back Home
	  </a>
	</div>
</section>

<?php get_template_part('templates/partials/footer') ?>;
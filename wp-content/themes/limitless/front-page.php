<?php get_template_part('templates/partials/head') ?>
  <section class="hero hero_illustrated wrapper">
    <?php get_template_part('templates/partials/header') ?>

    <div class="hero__text">
      <span class="caps caps_heavy hero__caption"><?php bloginfo('name') ?></span>

      <h1 class="display_small heading_heavy">
        Enabling emerging adults to adapt and succeed.
      </h1>

      <div class="hero__buttons">
        <button
          type="button"
          class="button button_medium button_primary button_ghost hero__button"
        >
          get involved
        </button>

        <button
          type="button"
          class="button button_medium button_primary hero__button"
        >
          donate
        </button>
      </div>
    </div>

    <a href="#collection" class="scroll-button hero__scroll">
      <img src="/wp-content/themes/limitless/assets/images/icons/scroll-button.svg" alt="scroll button" class="scroll-" />

      <span class="scroll-button__text">
        Scroll
      </span>
    </a>
  </section>

  <section class="section section_tight">
    <div class="section__text">
      <h2 class="display_small heading_heavy section__heading">
        About <span class="section__caption"><?php bloginfo('name') ?></span>
      </h2>

      <div class="text-block section__block">

        <p class="paragraph_base paragraph_light text-block__text">
          Convallis est lorem lorem vel consectetur. Mauris leo fermentum, tellus sollicitudin 
          viverra feugiat risus blandit laoreet. Auctor lacinia turpis ultrices tempus. 
          Ornare ullamcorper vivamus tellus leo elementum montes, quis imperdiet. Eget elit 
          elementum gravida facilisi ac commodo elementum commodo. Tellus neque sagittis porttitor
          luctus pretium quam. Ultrices diam hendrerit pulvinar sit magna eget adipiscing eget etiam. 
          Sed rhoncus vivamus urna mauris. Velit malesuada viverra amet duis nunc eget turpis.
        </p>
      </div>

      <a
        href="<?= site_url('/about') ?>" 
        class="button button_large button_primary section__button">

        Read more
      </a>
    </div>

    <img 
      src="/wp-content/themes/limitless/assets/images/section/section-1.png"
      alt="section image"
      class="section__image"
      width="734"
      height="842"
    >
  </section>f

  <?php render_posts(4, 'programs', '', 'card-horizontal', 'collection_vertical') ?>

  <section class="section section_default">
    <div class="section__text">
      <h2 class="display_small heading_heavy section__heading">
        We exist for <br> your success.
      </h2>

      <a  
        href="<?= site_url('/mission') ?>" 
        class="button button_large button_primary section__button">

        Our mission
      </a>
    </div>

    <img 
      src="/wp-content/themes/limitless/assets/images/section/section-2.png"
      alt="section image"
      class="section__image"
      width="700"
      height="700"
    >
  </section>

  <section class="subscribe">
    <h2 class="heading_xl heading_heavy subscribe__heading">
      Say updated with the latest news!
    </h2>

    <form class="form form_horizontal">
      <div class="input input_compact form__item">
        <label class="paragraph_sm paragraph_heavy input__label" for="home-input-1">
          Name
          <span class="input__required">*</span>
        </label>

        <input 
          type="text" 
          name="text-input" 
          placeholder="Jane Pollock"
          class="input__body paragraph_heavy" 
          id="home-input-1" 
        />
      </div>

      <div class="input input_compact form__item">
        <label class="paragraph_sm paragraph_heavy input__label" for="home-input-2">
          Email address
          <span class="input__required">*</span>
        </label>

        <input 
          type="email" 
          name="text-input" 
          placeholder="jane@example.com"
          class="input__body paragraph_heavy" 
          id="home-input-2" 
        />
      </div>

      <button 
        type="button"
        class="button button_medium button_primary form__button subscribe__button" 
      >
        Subscribe!
      </button>
    </form>
  </section>

  <?php render_posts(5, 'team', '', 'card-custom', 'collection_vertical collection_inlined') ?>

  <?php render_posts(4, 'post', 'Posts', 'card') ?>

  <!-- <section class="collection wrapper">
    <header class="header collection__header">

      <h2 class="display_small heading_heavy header__heading">The <span class="header__underline">Blog</span></h2>

      <p class="paragraph_base paragraph_regular header__text">
        Tortor sit nisl purus nunc massa diam velit hac in. Nisl,
        sem adipiscing risus pulvinar non sed nullam id integer. 
        Integer quis porttitor mauris arcu, pretium orci quam. 
        Enim cursus mattis nunc aliquam pharetra feugiat ante sollicitudin. 
      </p> 
    </header>

    <div class="collection__container">
      <div class="card">
        <img 
          src="/wp-content/themes/limitless/assets/images/cards/card-image-4.png"
          alt="card image"
          class="card__image"
          width="289"
          height="217"
        >

        <div class="card__text">
          <h3 class="caps caps_heavy card__heading">
            Blog
          </h3>

          <h4 class="heading_sm heading_heavy">
            Blog Title
          </h4>

          <p class="paragraph_sm paragraph_regular card__paragraph">
            Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit,
            auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at.
            Netus sagittis eleifend aliquet urna quis.
          </p>

          <div class="card__buttons">
            <div class="card__button-group">
              <button  
                type="button" 
                class="button button_small button_primary card__button"
              >
                  read now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img 
          src="/wp-content/themes/limitless/assets/images/cards/card-image-5.png"
          alt="card image"
          class="card__image"
          width="289"
          height="217"
        >

        <div class="card__text">
          <h3 class="caps caps_heavy card__heading">
            Blog
          </h3>

          <h4 class="heading_sm heading_heavy">
            Blog Title
          </h4>

          <p class="paragraph_sm paragraph_regular card__paragraph">
            Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit,
            auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at.
            Netus sagittis eleifend aliquet urna quis.
          </p>

          <div class="card__buttons">
            <div class="card__button-group">
              <button  
                type="button" 
                class="button button_small button_primary card__button"
              >
                  read now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img 
          src="/wp-content/themes/limitless/assets/images/cards/card-image-6.png"
          alt="card image"
          class="card__image"
          width="289"
          height="217"
        >

        <div class="card__text">
          <h3 class="caps caps_heavy card__heading">
            Blog
          </h3>

          <h4 class="heading_sm heading_heavy">
            Blog Title
          </h4>

          <p class="paragraph_sm paragraph_regular card__paragraph">
            Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit,
            auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at.
            Netus sagittis eleifend aliquet urna quis.
          </p>

          <div class="card__buttons">
            <div class="card__button-group">
              <button  
                type="button" 
                class="button button_small button_primary card__button"
              >
                  read now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img 
          src="/wp-content/themes/limitless/assets/images/cards/card-image-13.png"
          alt="card image"
          class="card__image"
          width="289"
          height="217"
        >

        <div class="card__text">
          <h3 class="caps caps_heavy card__heading">
            Blog
          </h3>

          <h4 class="heading_sm heading_heavy">
            Blog Title
          </h4>

          <p class="paragraph_sm paragraph_regular card__paragraph">
            Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit,
            auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at.
            Netus sagittis eleifend aliquet urna quis.
          </p>

          <div class="card__buttons">
            <div class="card__button-group">
              <button  
                type="button" 
                class="button button_small button_primary card__button"
              >
                  read now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button  
      type="button" 
      class="button button_large button_primary collection__button">

      All blog posts
    </button>
  </section> -->

  <section class="carousel">
    <div class="carousel__gallery">
      <img 
        src="/wp-content/themes/limitless/assets/images/carousel/carousel-1.png"
        alt="carousel image"
        class="carousel__image"
        width="699"
        height="525"
      >

      <img 
        src="/wp-content/themes/limitless/assets/images/carousel/carousel-2.png"
        alt="carousel image"
        class="carousel__image"
        width="699"
        height="525"
      >

      <img 
        src="/wp-content/themes/limitless/assets/images/carousel/carousel-3.png"
        alt="carousel image"
        class="carousel__image"
        width="699"
        height="525"
      >
    </div>

    <div class="carousel-group">
      <button
        type="button" 
        class="button button_square button_small button_primary button_rounded carousel__button carousel__button_left"
      >
        <i class=" fa-solid fa-arrow-left"></i>
      </button>

      <button
        type="button" 
        class="button button_square button_small button_primary button_rounded carousel__button carousel__button_right"
      >
        <i class=" fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </section>

  <?php get_template_part('templates/partials/footer') ?>

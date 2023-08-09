<section class="form <?= $class ?> wrapper">
  <h1 class="heading_xxl heading_heavy form__heading">Edit Post</h1>

  <form id="test" class="form__body" method="POST" enctype="multipart/form-data" data-post-form data-post-form-update>
    <?php
      $parent = get_cat_ID('Posts');
      $categories = get_categories([
        'type' => 'post',
        'child_of' => $parent
      ]);

      if (!empty($categories)) : ?>
        <div class="input input_compact form__item">
          <label class="paragraph_sm paragraph_heavy input__label" for="select">
            Select Category:
            <span class="input__required">*</span>
          </label>

          <select class="input__body paragraph_heavy" id="select" name="categories">

          <?php foreach($categories as $category) : ?>
            <option 
              class="paragraph_heavy" 
              value="<?= $parent?> <?= $category->cat_ID ?>"
              <?php if (get_the_category($atts['post'])[0]->name == $category->name) echo 'selected' ?>
            >
                <?= $category->name ?>
            </option>
          <?php endforeach ?>

          </select>
        </div>
      <?php endif
    ?>

    <div class="input input_compact form__item">
      <label class="paragraph_sm paragraph_heavy input__label" for="input-form-1">
        Post title
        <span class="input__required">*</span>
      </label>

      <input 
        type="text" 
        name="title"
        value="<?= $atts['post']->post_title ?>" 
        class="input__body paragraph_heavy" 
        id="input-form-1"
        required
      />
    </div>

    <div class="input input_compact form__item">
      <label class="paragraph_sm paragraph_heavy input__label" for="input-form-2">
        Post excerpt
      </label>

      <input 
        type="text" 
        name="excerpt"
        value="<?= $atts['post']->post_excerpt ?>"  
        class="input__body paragraph_heavy" 
        id="input-form-2"
      />
    </div>

    <div class="input input_compact input_textarea form__item">
      <label class="paragraph_sm paragraph_heavy input__label" for="input-form-4">
        Post content
        <span class="input__required">*</span>
      </label>

      <textarea 
        name="content" 
        class="input__body paragraph_heavy"
        id="input-form-4"
        required 
      ><?= wp_strip_all_tags($atts['post']->post_content) ?></textarea>
    </div>

    <div class="form__item file">
      <label class="button button_small button_secondary file__label" for="file">
        Choose file
      </label>

      <input class="visially-hidden" type="file" id="file" value="test.png" name="post_image" />

      <img 
        src="<?= get_the_post_thumbnail_url($atts['post']) ? get_the_post_thumbnail_url($atts['post']) : '' ?>" 
        class="<?= get_the_post_thumbnail_url($atts['post']) ? 'file__image' : '' ?>"
        alt=""
      />
    </div>

    <input type="hidden" name="status" value="publish" />
    <input type="hidden" name="postId" value="<?= $atts['post']->ID ?>" />

    <button 
      type="sumbit"
      class="button button_medium button_primary form__button" 
    >
      Publish
    </button>
  </form>
</section>
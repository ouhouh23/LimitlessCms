<section class="form <?= $class ?> wrapper">
  <h1 class="heading_xxl heading_heavy form__heading">Create New Post</h1>

  <form id="test" class="form__body" method="POST" enctype="multipart/form-data" data-post data-post-create>
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
            <option class="paragraph_heavy" value="<?= $parent?> <?= $category->cat_ID ?>">
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
      ></textarea>
    </div>

    <div class="form__item">
      <input type="file" id="file" name="post_image" />
    </div>

    <input type="hidden" name="status" value="publish" />

    <button 
      type="sumbit"
      class="button button_medium button_primary form__button" 
    >
      Publish
    </button>
  </form>
</section>
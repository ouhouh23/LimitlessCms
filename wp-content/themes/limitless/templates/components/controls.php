<div class="buttons">
    <input type="hidden" name="postId" value="<?= get_the_ID() ?>">

    <a
      href="<?= site_url("/post-edit/?id=" . get_the_ID()) ?>"
      class="button <?= $class ?> button_secondary" 
    >
      Edit
    </a>

  <form method="post" data-post-form data-post-form-delete>
    <input type="hidden" name="postId" value="<?= get_the_ID() ?>">

    <button
      type="submit"
      class="button <?= $class ?> button_neutral" 
    >
      Delete
    </button>
  </form>
</div>
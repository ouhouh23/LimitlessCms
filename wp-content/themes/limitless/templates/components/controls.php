<div class="buttons">
  <form method="post" data-post data-post-edit>
    <input type="hidden" name="postId" value="<?= get_the_ID() ?>">

    <button
      type="sumbit"
      class="button <?= $class ?> button_secondary" 
    >
      Edit
    </button>
  </form>

  <form method="post" data-post data-post-delete>
    <input type="hidden" name="postId" value="<?= get_the_ID() ?>">

    <button
      type="submit"
      class="button <?= $class ?> button_neutral" 
    >
      Delete
    </button>
  </form>
</div>
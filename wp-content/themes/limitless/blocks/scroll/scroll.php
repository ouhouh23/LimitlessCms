<a 
  href="<?= isset($attributes['link']) ? $attributes['link'] : '#' ?>" 
  class="scroll-button <?= $attributes['direction'] ?>">
  <img src="/wp-content/themes/limitless/assets/images/icons/scroll-button.svg" alt="scroll button" class="scroll-button__icon" />
  <?php if(isset($attributes['text'])) : ?>
    <span class="scroll-button__text">
      <?= $attributes['text'] ?>
    </span>
  <?php endif ?>
</a>
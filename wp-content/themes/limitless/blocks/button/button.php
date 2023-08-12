<a
  href="<?php if (isset($attributes['link']))  echo site_url($attributes['link']) ?>" 
  class="button <?= $attributes['size'] ?> <?= $attributes['color'] ?> <?= $attributes['type'] ?>"
>
  <?= $attributes['text'] ?>
</a>
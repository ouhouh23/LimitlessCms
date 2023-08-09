<?=  var_dump($attributes) ?>
<h1 class="<?= $attributes['size'] ?> <?php if(isset($attributes['colorClass'])) echo $attributes['colorClass'] ?> heading_heavy">
	<?= $attributes['text'] ?>		
</h1>
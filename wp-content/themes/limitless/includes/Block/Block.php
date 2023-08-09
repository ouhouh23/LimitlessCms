<?php

abstract class Block {
  function __construct($name, $data = null) {
    $this->name = $name;
    $this->data = $data;

    add_action('init', [$this, 'init']);
  }

  function getCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/blocks/{$this->name}/{$this->name}.php");
    return ob_get_clean();
  }

  abstract function registerScript();

  function init() {
    $this->registerScript();

    if (isset($this->data)) {
      wp_localize_script($this->name, $this->name, $this->data);
    }

    register_block_type("limitless/{$this->name}", 
      [
        'editor_script' => $this->name,
        'render_callback' => [$this, 'getCallback']

      ]);
  }
}

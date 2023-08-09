<?php

class StaticBlock extends Block {
	function registerScript() {
		wp_register_script($this->name, get_stylesheet_directory_uri() . "/blocks/{$this->name}/{$this->name}.js", array('wp-blocks', 'wp-editor'));
	}
}
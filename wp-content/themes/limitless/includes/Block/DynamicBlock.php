<?php

class DynamicBlock extends Block {
	function registerScript() {
		wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
	}
}
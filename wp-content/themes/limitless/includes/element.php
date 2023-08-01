<?php

function render_element($element, $class = '', $atts = null) {
	$path = "wp-content/themes/limitless/templates/$element.php";

	if (!file_exists($path)) {
		return;
	}

	require($path);	
}
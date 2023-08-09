<?php

// function sanitize($data) {
//   if (is_page()) {
//   	return $data;
//   }

//   else {
//     $data['post_title'] = sanitize_text_field($data['post_title']);
//     $data['post_excerpt'] = sanitize_text_field($data['post_excerpt']);
//     $data['post_content'] = sanitize_textarea_field($data['post_content']);

//     return $data;
//   }
// }

// add_filter('wp_insert_post_data', 'sanitize');
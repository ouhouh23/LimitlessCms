<?php

function redirect_home() {
  $user = wp_get_current_user();

  if (count($user->roles) == 1 && $user->roles[0] == 'subscriber') {
    wp_redirect(site_url('/'));

    die();
  }
}


function hide_admin_bar() {
  $user = wp_get_current_user();

  if (count($user->roles) == 1 AND $user->roles[0] == 'subscriber') {
    show_admin_bar(false);
  }
}

function redirect() {
  wp_redirect(site_url('/login?failed=true'));
}

function auto_login_new_user($user_id) {
    wp_set_current_user($user_id);
    wp_set_auth_cookie($user_id);

    wp_redirect(site_url('/'));
    exit();
}

add_action('wp_login_failed', 'redirect');
add_action('admin_init', 'redirect_home');
add_action('wp_loaded', 'hide_admin_bar');
add_action('user_register', 'auto_login_new_user');
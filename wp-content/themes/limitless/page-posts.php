<?php
/*
 Template name: Posts
*/

get_template_part('templates/partials/head'); 
get_template_part('templates/partials/header'); 

render_posts(4, 'post', $_GET['category'], 'card', 'card_compact');

get_template_part('templates/partials/footer'); 
<?php

// Core
require_once('includes/core/styles-and-scripts.php');
require_once('includes/core/svg-support.php');
require_once('includes/core/login.php');

  // Logo, title, thumbnails, image size support
  require_once('includes/core/theme-features.php');

  // Navigation menus
  require_once('includes/core/menu.php');
  
// Post
require_once('includes/post/register-post-type.php');
require_once('includes/post/attach-image.php');
require_once('includes/post/filters.php');

require_once('includes/post/title.php');
require_once('includes/post/description.php');
require_once('includes/post/categories.php');
require_once('includes/post/remains.php');
require_once('includes/post/render.php');

// Components
require_once('includes/element.php');
require_once('includes/pagination.php');

// Blocks
require_once('includes/Block/Block.php');
require_once('includes/Block/StaticBlock.php');
require_once('includes/Block/DynamicBlock.php');

new DynamicBlock('heading');
new DynamicBlock('caption');
new DynamicBlock('scroll');
new DynamicBlock('button');
new DynamicBlock('text');

new DynamicBlock('hero');
new DynamicBlock('hero-text');
new DynamicBlock('button-group');

new DynamicBlock('section');
new DynamicBlock('section-text');
new DynamicBlock('section-image');

new DynamicBlock('carousel');
new DynamicBlock('carousel-image');

new StaticBlock('header');
new StaticBlock('programs');
new StaticBlock('subscription');
new StaticBlock('team');
new StaticBlock('blog');
new StaticBlock('footer');

new StaticBlock('posts');
new StaticBlock('single');


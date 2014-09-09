<?php
/*
Plugin Name: WP Baldrick Boilerplate
Description: Boilerplate for baldrick based UI development
Author: David Cramer
Version: 1.0.0
*/


if ( ! defined( 'WPINC' ) ) {
	die;
}

// Include Framework
include plugin_dir_path( __FILE__ ) . 'framework.php';

// include frontend example
include plugin_dir_path( __FILE__ ) . 'examples/example-frontend-shortcode.php';

// include admin example
include plugin_dir_path( __FILE__ ) . 'examples/example-admin-functions.php';
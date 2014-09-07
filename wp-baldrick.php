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


// include Examples
include plugin_dir_path( __FILE__ ) . 'examples/example-admin-page.php';
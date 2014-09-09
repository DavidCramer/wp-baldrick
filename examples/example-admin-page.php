<?php

// Add Admin menu page
add_action( 'admin_menu', 'baldrick_example_admin_page' );
function baldrick_example_admin_page(){
	add_menu_page( 'Baldrick Example Test Page', 'Baldrick Examples', 'manage_options', 'baldrick_examples', 'baldrick_build_example_page' );
}

// build the example page by including the example page
function baldrick_build_example_page(){
	include plugin_dir_path( __FILE__ ) . 'baldrick-examples.php';
}


// add example ajax actions
add_action( 'wp_ajax_search_posts', 'example_post_search');
add_action( 'wp_ajax_nopriv_search_posts', 'example_post_search');
function example_post_search(){
	$_GET['s'] = $_POST['_value'];
	$posts = get_posts();

	wp_send_json( $posts );
}

add_action( 'wp_ajax_baldrick_examples', 'baldrick_examples_function' );
add_action( 'wp_ajax_baldrick_examples_json', 'baldrick_examples_json' );
// add example ajax function
function baldrick_examples_function(){
	
	$data = array();

	foreach($_POST as $key=>$value){
		$data[] = array(
			'key'	=>	$key,
			'value'	=>	$value
		);
	}

	if(isset($_POST['template'])){
		wp_send_json( $data );
	}
	echo '<pre>';
	print_r($_POST);
	echo '</pre>';
	die;
}

function baldrick_examples_json(){
	wp_send_json( $_SERVER );
}

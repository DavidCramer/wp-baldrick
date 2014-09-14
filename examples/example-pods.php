<?php
//allow access to get_items only
add_filter( 'pods_json_api_access_pods_get_items', '__return_true' );

add_shortcode( 'wp_baldrick_pods_form_example', 'wp_baldrick_pods_form_shortcode' );
function wp_baldrick_pods_display_shortcode(){

	ob_start();

	?>
	<!-- SEARCH FORM : ATTRIBUTES DEFINE THE AJAX REQUEST -->
	<form id="post_search_example" method="GET" class="wp-baldrick" data-endpoint="pods/jedi" data-target="#search_results" data-template="#my_result_template">

		<!-- SEARCH FIELD -->
		<input type="text" class="wp-baldrick" name="search" data-event="keyup" data-for="#post_search_example" autocomplete="off">

		<!-- ANOTHER FILTER - IN THIS CASE : limit -->
		<select name="limit">
			<option value="5">5</option>
			<option value="10">10</option>
			<option value="20">20</option>
			<option value="50">50</option>
			<option value="-1">All</option>
		</select>

		<!-- SUBMIT BUTTON TRIGGERS THE FORM TO SUBMIT -->
		<button type="submit">Search</button>

	</form>

	<!-- RESULTS DIV (TARGET) -->
	<div id="search_results"></div>

	<!-- RESULTS TEMPLATE -->
	<script type="text/html" id="my_result_template">

		<hr>

		{{#if items}}

		{{headers/total}} results. | Page{{#if request/offset}} {{request/offset}} {{else}} 1 {{/if}} of {{headers/total_pages}}.

		{{#each items}}

		<div>
			<h1 class="entry-title"><a href="{{link}}">{{title}}</a></h1>
			<div><img src="{{author/avatar}}" class="avatar avatar-24" style="width: 18px; display: inline; vertical-align: middle;"> By: {{author/name}}</div>
			{{#if excerpt}}
			<p>{{{excerpt}}}</p>
			{{/if}}
		</div>

		{{/each}}
		{{else}}
			{{request}}

		<p>No results found for <strong>"{{request/filter/s}}"</strong></p>

		{{/if}}


	</script>




	<?php


	return ob_get_clean();


}

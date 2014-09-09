<?php

add_shortcode( 'wp_baldrick_example', 'wp_baldrick_shortcode' );
function wp_baldrick_shortcode(){

	ob_start();
	?>
	<!-- SEARCH FORM -->
	<form id="post_search_example" method="GET" class="wp-baldrick" data-endpoint="posts" data-target="#search_results" data-template="#my_result_template">
		
		<!-- SEARCH FIELD -->
		<input type="text" class="wp-baldrick" name="filter[s]" data-event="keyup" data-for="#post_search_example" autocomplete="off">
		
		<!-- ANOTHER FILTER - IN THIS CASE : posts_per_page -->
		<select name="filter[posts_per_page]">
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
			
			<p>No results found for <strong>"{{request/filter/s}}"</strong></p>
		
		{{/if}}


	</script>




	<?php 
	

	return ob_get_clean();


}
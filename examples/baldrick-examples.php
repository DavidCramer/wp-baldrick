<h3>WP Baldrick Examples</h3>
<hr>
<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"

>Modal Request (500x500 centered)</button>


<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="100%"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"
	data-request="#modal_content_example"
>Modal Request (full)</button>

<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal"
	data-modal-width="100%"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"

>Modal Request (no title)</button>


<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal"
	data-modal-width="100%"
	data-modal-center="true"

>Modal Request (no buttons)</button>

<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples_nope"
	data-modal="example-modal"
	data-modal-width="160px"
	data-modal-height="100px"
	data-modal-center="true"
	data-modal-life="300"
	data-modal-class="rounded"

>Modal Request centered no title life span 1000ms</button>

<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-template="#modal_content_table_example"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"

>Modal Request (Template)</button>

<script type="text/html" id="modal_content_example">
<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal-inner"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"
	data-request="#modal_content_example"

>Modal Request (500x500 centered)</button>
	
</script>


<script type="text/html" id="modal_content_table_example">
<table class="widefat">
	<tr>
		<th>Key</th>
		<th>Value</th>
	</tr>
	{{#each this}}
	<tr class="{{#even}}alternate{{/even}}">
		<td>{{key}}</td>
		<td>{{value}}</td>
	</tr>
	{{/each}}
</table>	
</script>


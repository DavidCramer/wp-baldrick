<h3>WP Baldrick Examples</h3>
<hr>
<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-target="#baldrick-example-target"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"

>Modal Request (500x500 centered)</button>


<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-target="#baldrick-example-target"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="100%"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"
	data-request="#modal_content_example"
>Modal Request (full)</button>

<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-target="#baldrick-example-target"
	data-modal="example-modal"
	data-modal-width="100%"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"

>Modal Request (no title)</button>


<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-target="#baldrick-example-target"
	data-modal="example-modal"
	data-modal-width="100%"
	data-modal-center="true"

>Modal Request (no buttons)</button>

<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples_nope"
	data-target="#baldrick-example-target"
	data-modal="example-modal"
	data-modal-width="160px"
	data-modal-height="100px"
	data-modal-center="true"
	data-modal-life="300"
	data-modal-class="rounded"

>Modal Request centered no title life span 1000ms</button>

<button class="button wp-ajax" type="button" 
	
	data-request="#modal_content_example"
	data-target="#baldrick-example-target"
	data-modal="example-modal"
	
	data-modal-height="50px"
	sdata-modal-life="1000"
	data-modal-class="updated"
>Modal Request centered no title life span 1000ms</button>

<div id="baldrick-example-target"></div>
<script type="text/html" id="modal_content_example">
<button class="button wp-ajax" type="button" 
	
	data-action="baldrick_examples"
	data-target="#baldrick-example-target"
	data-modal="example-modal-inner"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"
	data-request="#modal_content_example"
	
>Modal Request (500x500 centered)</button>
	
</script>


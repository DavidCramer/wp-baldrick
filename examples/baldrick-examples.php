<h3>WP Baldrick Examples</h3>
<hr>
<button class="button wp-baldrick" type="button" 
	
	data-request="#modal_content_form"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons='Close|dismiss;Save|{"data-target" : "#text-area-src", "data-modal-close": true, "data-request" : "#example-modal_baldrickModal"}'

>Modal Request (500x500 centered)</button>


<button class="button wp-baldrick" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="100%"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"
	data-request="#modal_content_example"
>Modal Request (full)</button>

<button class="button wp-baldrick" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal"
	data-modal-width="100%"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"

>Modal Request (no title)</button>


<button class="button wp-baldrick" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal"
	data-modal-width="100%"
	data-modal-center="true"

>Modal Request (no buttons)</button>

<button class="button wp-baldrick" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal"
	data-modal-width="160px"
	data-modal-height="100px"
	data-modal-center="true"
	data-modal-life="300"
	data-modal-class="rounded"

>Modal Request centered no title life span 1000ms</button>

<button class="button wp-baldrick" type="button" 
	
	data-action="baldrick_examples"
	data-template="#modal_content_table_example"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss;Save|alert|button-primary"

>Modal Request (Template)</button>

<button class="button wp-baldrick" type="button" 
	
	data-request="#text-area-src"
	data-template="#modal_content_table_example"
	data-modal="example-modal"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss;Save|alert|button-primary"

>Modal Request (Template)</button>
<button class="button wp-baldrick" type="button" 
	
	data-action="baldrick_examples_json"
	data-target="#text-area-src"

>Request to textarea</button>
<textarea style="width:100%;" id="text-area-src" class="wp-baldrick" data-event="change" data-modal="textarea" data-modal-title="this data" data-template="#modal_content_table_example">[{"key":"modal","value":"example-modal"},{"key":"modalTitle","value":"Baldrick Modal Example"},{"key":"modalButtons","value":"Close|dismiss;Save|alert|button-primary"},{"key":"modalWidth","value":"500px"},{"key":"modalHeight","value":"500px"},{"key":"action","value":"baldrick_examples"},{"key":"template","value":"#modal_content_table_example"},{"key":"modalCenter","value":"true"}]</textarea>

<hr>
<form id="test_form">
<input type="text" name="username" value="username"><br>
<input type="text" name="password" value="password"><br>
<input type="text" name="email" value="email"><br>
<input type="text" name="data[add]" value="data[add]"><br>
<input type="text" name="data[more]" value="data[more]"><br>
<input type="text" name="data[fields]" value="data[fields]"><br>
<button type="button" class="wp-baldrick" data-request="#test_form" data-template="#form_template" data-modal="woooter">Send</button>
</form>
<hr>
<div id="form_template_resault"></div>
<script type="text/html" id="modal_content_example">
<button class="button wp-baldrick" type="button" 
	
	data-action="baldrick_examples"
	data-modal="example-modal-inner"
	data-modal-title="Baldrick Modal Example"
	data-modal-width="500px"
	data-modal-height="500px"
	data-modal-center="true"
	data-modal-buttons="Close|dismiss"
	data-request="#modal_content_example"

>Modal Request (500x500 centered)</button>
<hr>


</script>
<script id="form_template" type="text/html">
<h2>{{username}}</h2>
	{{#each data}}
	<p>{{this}}</p>
	{{/each}}
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

<script type="text/html" id="modal_content_form">
<input type="text" name="username" value="username"><br>
<input type="text" name="password" value="password"><br>
<input type="text" name="email" value="email"><br>
<input type="text" name="data[add]" value="items"><br>
<input type="text" name="data[more]" value="more"><br>
<input type="text" name="data[fields]" value="stuff"><br>
</script>


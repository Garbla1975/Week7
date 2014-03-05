$(document).ready(function() {
	$('section p:first').css('color', 'red');//this is like using style attribute.  Adds style inline
    $('section p:last').addClass('good');
	$('body').hover( function ()
	{
		$('body').transition({x:'1000px'});	
	}, 
	
	function ()
	{
		$(this).transition({x:'0px'});
		$(this).clearQueue();
			
	})
	
	
	
	
	
	
});
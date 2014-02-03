$(document).ready(function(){
	var note = $('#note'),
		ts = new Date(2014, 5, 15), // 2013 Aug 15
		newYear = false;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('.offer').countdown({timestamp:ts});
	
});

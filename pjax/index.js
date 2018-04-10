var Pjax = require('pjax-api').Pjax;
new Pjax({
	areas: [
		'body'
	]
});

$(document).on("pjax:ready", function(){
	console.log("fuga");
});

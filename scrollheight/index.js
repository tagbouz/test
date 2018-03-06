(function(){
	// zoom
	var zoom = window.innerWidth / document.body.clientWidth;

	// これじゃダメ
	// document.querySelector('#wrapper').style.height = window.innerHeight + 'px';
	// zoom後のheightが、window.innerHeightと同等になるように逆算する必要がある
	document.querySelector('#wrapper').style.height = window.innerHeight / zoom + 'px';


	console.log('before/innerHeight', window.innerHeight);
	console.log('before/scrollHeight', document.body.scrollHeight);


	document.querySelector('html').style.zoom = zoom;


	console.log('after/innerHeight', window.innerHeight);
	console.log('after/scrollHeight', document.body.scrollHeight);


	// console出すときのサイズ調整用。わかりやすいように。
	window.addEventListener('resize', function(){
		console.log('resize/innerWidth', window.innerWidth);
		console.log('resize/innerHeight', window.innerHeight);
		console.log('resize/scrollHeight', document.body.scrollHeight);
	});

})();

$(function(){
	
	$('.top').load('top.html',function(){
		$.getScript('js/top.js');
	});
	$('.header').load('header.html',function(){
		$.getScript('js/header.js');
	});
	$('.nav').load('nav.html',function(){
		$.getScript('js/nav.js');
	});
	
	$('.foot').load('foot.html');
	
	$('.banner').load('banner.html',function(){
		$.getScript('js/banner.js');
	});
});

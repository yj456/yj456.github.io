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
	
	var ban = $('.floor1 .floor-cont .partr3');
	var ban1 = $('.floor2>.floor-cont .partr3');
	var ban2 = $('.floor3>.floor-cont .partr3');
	var ban3 = $('.floor4>.floor-cont .partr3');
	var ban4 = $('.floor5>.floor-cont .partr3');
	var ban5 = $('.floor6>.floor-cont .partr3');
	var ban6 = $('.floor7>.floor-cont .partr3');
	var ban7 = $('.floor8>.floor-cont .partr3');
	
	var lunb1 = new Lunb(ban);
	lunb1.init();
	
	var lunb2 = new Lunb(ban1);
	lunb2.init();
	
	var lunb3 = new Lunb(ban2);
	lunb3.init();
	
	var lunb4 = new Lunb(ban3);
	lunb4.init();
	
	var lunb5 = new Lunb(ban4);
	lunb5.init();
	
	var lunb6 = new Lunb(ban5);
	lunb6.init();
	
	var lunb7 = new Lunb(ban6);
	lunb7.init();
	
	var lunb8 = new Lunb(ban7);
	lunb8.init();
	
	$('.pic2').hover(function(){
		$(this).find('.fol').show();
	},function(){
		$(this).find('.fol').hide();
	});
	
	
	var floor = {
		floorleft: $('.floorleft'),
		floorlist: $('.floor-list'),
		flooritem: $('.floor1'),
		init: function(){
			console.log(this.floorlist);
			console.log(this.flooritem);
			this.scroll();
		},
		scroll: function(){
			var that = this;
			$(window).scroll(function(){
				var scrollT = $(this).scrollTop();
				console.log(scrollT);
				if(scrollT >= 500){
					that.floorleft.show();
					/*that.floorleft.css({
						display: 'block',
						top:'572px'
					});*/
				}
				
				if(scrollT <= 300){
					that.floorleft.hide();
					/*that.floorleft.css({
						top:'572px'
					});*/
				}
			})
		}
	}
	
	floor.init();
});


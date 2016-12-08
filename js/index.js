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
		floorlist1: $('.floor-list1'),
		topfixed: $('.topfixed'),
		floorright: $('.floorright'),
		scrolltop: $('.scrolltop'),
		flag: true,
		init: function(){
			this.scroll();
			this.switchFloor();
			console.log(this.flooritem);
		},
		scroll: function(){
			var that = this;
			$(window).scroll(function(){
				var scrollT = $(this).scrollTop();
				console.log(scrollT);
				
				if(scrollT >= 100){
					that.topfixed.show();
				}
				
				if(scrollT <= 100){
					that.topfixed.hide();
				}
				
				if(scrollT >= 700){
					that.floorright.css({
						position: 'fixed'
					});
					that.floorleft.css({
						position: 'fixed'
					});
				}
				
				if(scrollT <= 500){
					that.floorright.css({
						position: 'absolute'
					});
					that.floorleft.css({
						position: 'absolute'
					});
				}
			});
		},
		switchFloor: function(){
			var that = this;
			this.floorlist.click(function(){
				that.flag = false;
				
				var t;
				var sum = 0;
				
				if($(this).index() == 0){
					t = 850;
				}
				
				if($(this).index() == 1){
					t = 1300;
				}
				
				if($(this).index() == 2){
					t = 1700;
				}
				
				$('html,body').stop(true).animate({
					scrollTop: t
				},function(){
					//自动滚动完成 改变标志
					that.flag = true;
				});
				
			});
			
			this.floorlist1.click(function(){
				that.flag = false;
				
				var  t = that.flooritem.eq($(this).index()).offset().top - 50;
				
				$('html,body').stop(true).animate({
					scrollTop: t
				},function(){
					//自动滚动完成 改变标志
					that.flag = true;
				});
			});
			
			this.scrolltop.click(function(){
				$('html,body').stop(true).animate({
					scrollTop: 0
				},function(){
					//自动滚动完成 改变标志
					that.flag = true;
				});
			});
		}
	}
	
	floor.init();
	
	
	var inpt1 = $('.topfixedInpt');
	var value = $('.t-nei');
	
	inpt1.on('input',function(){
		var inpt1V = inpt1.val();
		
		if(inpt1V.length == 0){
			value.hide();
			return;
		}
		
		value.show();
		
		$.ajax({
			url:"http://suggest.taobao.com/sug?code=utf-8&",
			data: {
				q: inpt1V
			},
			dataType: 'jsonp',
			success: function(data){
				var cont = '';
				for(var i in data.result){
					cont += '<li>'
						+		'<a href="#" >'+data.result[i][0]+'</a>'
						+	'</li>';
				}
				value.html(cont);
			}
		});
	});
	
	
	var q = $('.qrcode');
	var rNotice = $('.r-notice');
	$('.app1').hover(function(){
		q.show();
	},function(){
		q.hide();
	});
	
	$('.checkin').hover(function(){
		rNotice.show();
	},function(){
		rNotice.hide();
	});
	
	var timebox = $('.timebox');
	var time1 = $('.time1').html();
	var time2 = $('.time2').html();
	var time3 = $('.time3').html();
	var time4 = $('.time4').html();
	var time5 = $('.time5').html();
	var timer2 = setInterval(function(){
		time5--;
		if(time5 == 0){
			time5 = 9;
			time4--;
			if(time4 == 0){
				time4 = 5;
				time3--;
				if(time3 == 0){
					time3 = 9;
					time2--;
					if(time2 == 0){
						time2 = 5;
						time1--;
						if(time1 == 0){
							time1= 0;
							clearInterval(timer2);
						}
					}
				}
			}
		}
		
		$('.time1').html(time1);
		$('.time2').html(time2);
		$('.time3').html(time3);
		$('.time4').html(time4);
		$('.time5').html(time5);
	},1000);
	
	
	$('.tg').click(function(){
		$('.opan').hide();
		$('.fold').show();
	});
	
	$('.hotarea15').click(function(){
		$('.fold').hide();
		$('.opan').show();
	});
});


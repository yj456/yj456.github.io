$(function(){
	$('.top').load('top.html',function(){
		$.getScript('js/top.js');
	});
	$('.header').load('header.html',function(){
		$.getScript('js/header.js');
	});
	$('.nav').load('nav.html',function(){
		$.getScript('js/nav.js');
		$('.catitmlst').addClass('catitmlsthide');
		$('.toplevel').hover(function(){
			$('.catitmlst').show();
		},function(){
			$('.catitmlst').hide();
		});
	});
	
	$('.foot').load('foot.html');
	
	var magnifier ={
		showImg: $('.showImgW'),
		smallImg: $('.smallImg'),
		bigImg: $('.bigImg'),
		lil: $('.imglist ul>li'),
		init: function(){
			this.change();
			this.show();
			this.mousedown();
		},
		change: function(){
			var that = this;
			that.lil.mouseenter(function(){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				
				console.log($(this).index());
				var cont = '<img src="img/m'+($(this).index() + 1)+'.jpg" />';
				that.showImg.find('.item').html(cont);
				that.bigImg.html(cont);
			});
		},
		show:function(){
			var that = this;
			this.showImg.hover(function(){
				that.showImg.find('p').show();
				that.bigImg.show();
			},function(){
				that.showImg.find('p').hide();
				that.bigImg.hide();
			});
		},
		mousedown: function(){
			var that =this;
				
				this.showImg.find('p').mousemove(function(e){
					var t = e.pageY - that.showImg.offset().top;
					var l = e.pageX - that.showImg.offset().left;
					
					t = t <= 100 ? 100 : (t >= 300? 300 : t);
					l = l <= 100 ? 100 : (l >= 300? 300 : l);

					$(this).css({
						top: t-100,
						left: l-100
					});
					
					that.bigImg.find('img').css({
						top: -2*(t-100),
						left: -2*(l-100)
					});
			});	
		}
	}
	
	magnifier.init();
	
	$('.detail-l').click(function(){
		$(this).addClass('active1');
		$(this).siblings().removeClass('active1');
		
		$(this).find('i').show();
		$(this).siblings().find('i').hide();
		
		$('.suggest').show();
		$('.commWrap').hide();
	});
	
	$('.detail-r').click(function(){
		$(this).addClass('active1');
		$(this).siblings().removeClass('active1');
		
		$(this).find('i').show();
		$(this).siblings().find('i').hide();
		
		$('.suggest').hide();
		$('.commWrap').show();
	});
	
	var xuan = {
		xu: $('.xuan1'),
		content: $('.content'),
		close: $('.close'),
		init: function(){
			this.show();
		},
		show: function(){
			var that = this;
			this.content.click(function(){
				that.xu.show();
			});
			this.xun();
			this.down();
		},
		xun: function(){
			var that = this;
			this.xu.find('ul').on('click','li',function(){
				$(this).find('a').addClass('active2');
				$(this).siblings().find('a').removeClass('active2');
				
				that.content.html($(this).find('a').html());
				
			});
		},
		down: function(){
			var that = this;
			this.close.on('click',function(){
				that.xu.hide();
				
			});
			/*
			$('.main').click(function(e){
				if(!($(e.target).is('.xuan1'))){
					that.xu.hide();
				}
			})*/
			
		}
	}
	
	xuan.init();
	
	
});

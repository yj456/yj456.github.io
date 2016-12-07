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
	
	
	var cat = {
		main: $('.PInfo'),
		size: $('.tit9'),
		sub: $('.sub'),
		add: $('.add'),
		data: {},
		stack: 1000,
		init: function(){
			this.initData();
		},
		initData: function(){
			var that = this;
			var gid = this.main.attr('data-gid');
			$.getJSON('js/data.json',function(res){
				that.data = res[gid];
				console.log(that.data);
				
				that.sizeClick();
				
				that.increate();
				
				that.decreate();
				
				that.input();
				
				that.addCart();
			})
		},
		sizeClick: function(){
			this.size.on('click','a',function(){
				$(this).addClass('active5').siblings().removeClass('active5');
			});
		},
		increate: function(){
			var that = this;
			
			this.add.on('click',function(){
				var cont = parseInt($('.ctrnum-qty').val());
				
				if(cont >= that.stack){
					return;
				}
				cont++;
				$('.ctrnum-qty').val(cont);
			});
		},
		decreate: function(){
			var that = this;
			
			this.sub.click(function(){
				var cont1 = parseInt($('.ctrnum-qty').val());
				
				if(cont1 <= 1){
					return;
				}
				
				cont1--;
				
				$('.ctrnum-qty').val(cont1);
			});
		},
		input: function(){
			var that = this;
			
			$('.ctrnum-qty').on('input',function(){
				var con = parseInt($(this).val());
				
				console.log(con)
				
				if(con <= 0 || isNaN(con)){
					$(this).val(1);
					return;
				}
				
				if(con >= that.stack){
					$(this).val(that.stack);
					return;
				}
				
				$(this).val(con);
			});
		},
		addCart: function(){
			var that= this;
			$('.addcart').click(function(){
				var gid = that.main.data('gid');
				var sizeId = that.size.find('.active5').data('size');
				var amount = parseInt($('.ctrnum-qty').val());
				console.log(amount);
				console.log(sizeId);
				var cook = $.cookie('kl_cart') || '{}';
				cook = JSON.parse(cook);
				if(!cook[sizeId]){
					cook[sizeId] ={
						"goods-id": gid,
						"size-id": sizeId,
						"amount": amount
					}
				}else{
					cook[sizeId].amount += amount;
				}
				
				$.cookie('kl_cart',JSON.stringify(cook),{expires:365,path: '/'});
				
			});
		}
	}
	cat.init();
	
	
	$('.addcart').on('click',addCart);
	
	function  addCart(e){
		var  offset = $('.gou').offset();
		var flyer = $('<img class="u-flyer" src="img/x.jpg"/>');
		
		flyer.fly({
		    start: {
		        left: e.pageX,
		        top: e.pageY
		    },
		    end: {
		        left: offset.left,
		        top: offset.top,
		        width: 20,
		        height: 20,
		    }
		});
		
		$('.gou').find('b').css({
			opacity: 1
		});
	}
	
	
});

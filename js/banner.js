$(function(){
	var ban = {
		img: $('.imgwraper>img'),
		imgWraper: $('.imgwraper'),
		yuan: $('.yuan'),
		arleft: $('.arleft'),
		arright: $('.arright'),
		timer: null,
		next: 0,
		now: 0,
		init: function(){
			this.circle();
			this.autoPlay();
			this.hover();
			this.left();
			this.right();
			this.mousedown();
		},
		autoPlay: function(){
			var that = this;
			this.timer = setInterval(function(){
				that.next++;
				that.imgSwitch();
			},1500);
		},
		imgSwitch: function(){	
			if(this.next <=-1){
				this.next = this.img.length-1;
			}
			if(this.next >= this.img.length){
				this.next = 0;
			}
			this.img.eq(this.now).stop(true).fadeOut(500);
			this.img.eq(this.next).stop(true).fadeIn(500);
			
			this.now = this.next;
			
			this.yuan.find('span').removeClass('bgc');
			this.yuan.find('span').eq(this.now).addClass('bgc');
		},
		hover: function(){
			var that = this;
			this.imgWraper.hover(function(){
				clearInterval(that.timer);
				that.arleft.show();
				that.arright.show();
			},function(){
				that.autoPlay();
				that.arleft.hide();
				that.arright.hide();
			});
		},
		circle: function(){
			var cont = '';
			console.log(this.img.length);
			for(var i=0;i < this.img.length;i++){
				cont += '<span>'+ (i +1) +'</span>'
			}
			this.yuan.html(cont);
			this.yuan.children().eq(0).addClass('bgc');
		},
		left: function(){
			var that = this;
			this.arleft.mousedown(function(){
				clearInterval(that.timer);
				$(this).show();
				that.arright.show();
				that.next--;
				that.imgSwitch();
			});
		},
		right: function(){
			var that = this;
			this.arright.mousedown(function(){
				clearInterval(that.timer);
				$(this).show();
				that.arleft.show();
				that.next++;
				that.imgSwitch();
			});
			
		},
		mousedown:function(){
			var that = this;
			this.yuan.on('mouseenter','span',function(){
				clearInterval(that.timer);
				$(this).addClass('bgc');
				$(this).siblings().removeClass('bgc');
				
				that.img.eq(that.now).stop(true).fadeOut(500);
				that.img.eq($(this).index()).stop(true).fadeIn(500);
				that.now = $(this).index();
			});
			
			this.yuan.on('mouseleave','span',function(){
				that.autoPlay();
			});
		}
	}
	ban.init();
})
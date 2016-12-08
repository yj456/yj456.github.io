$(function(){
	var username = $('.u-inpt');
	var password1 = $('.p-inpt');
	var password2 = $('.p1-inpt');
	var phone = $('.pn-inpt');
	var tes = $('.dn-inpt');
	var regU = /^[a-zA-Z][a-zA-Z0-9_]{5,18}$/;
	var regP = /[a-zA-Z0-9]{6,16}/;
	var regPh = /^(13[7|8|9])\d{8}$/;
	var code;
	var flag_u = false;
	var flag_p = false;
	var flag_p1 = false;
	var flag_ph = false;
	var flag_t = false;
	
	username.on('focus',function(){
		$(this).css({
			borderColor:'#4aafe9'
		});
		
		username.on('input',function(){
			var userV = username.val();
			if(userV.length == 0){
				$('.u-tip').hide();
				$('.u-ts').hide();
				return;
			}
			$('.u-tip').show();
		});
	});
	
	username.on('blur',function(){
		var str = username.val();
		$(this).css({
			borderColor:'#c5cddb'
		});
		
		if(str.length == 0){
			$('.u-ts').hide();
			return;
		}
		
		if(!regU.test(str)){
			$('.u-ts').show();
			$('.u-inpt').css({
				borderColor:'#fa5b5b'
			});
			flag_u = false;
		}else{
			$('.u-ts').hide();
			$('.u-tip').hide();
			flag_u = true;
		}
	});
	
	$('.u-c').on('click',function(){
		username.val('');
		$('.u-tip').hide();
		$('.u-ts').hide();
		username.css({
			borderColor:'#c5cddb'
		});
	});
	
	password1.on('focus',function(){
		$(this).css({
			borderColor:'#4aafe9'
		});
		
		password1.on('input',function(){
			var paswV = password1.val();
			if(paswV.length == 0){
				$('.p-tip1').hide();
				$('.p-ts1').hide();
				return;
			}
			
			$('.p-tip1').show();
		})
	});
	
	$('.p-c1').click(function(){
		password1.val('');
		$('.p-tip1').hide();
		$('.p-ts1').hide();
		password1.css({
			borderColor:'#c5cddb'
		});
	});
	
	password1.on('blur',function(){
		var str1 = password1.val();
		$(this).css({
			borderColor:'#c5cddb'
		});
		
		if(str1.length == 0){
			$('.u-ts1').hide();
			return;
		}
		
		if(regP.test(str1)){
			$('.p-ts1').hide();
			$('.p-tip1').hide();
			flag_p = true;
		}else{
			$('.p-ts1').show();
			password1.css({
				borderColor:'#fa5b5b'
			});
			flag_p = false;
		}
	});
	
	
	password2.on('focus',function(){
		$(this).css({
			borderColor:'#4aafe9'
		});
		
		password2.on('input',function(){
			var pasw1V = password2.val();
			if(pasw1V.length == 0){
				$('.p-tip2').hide();
				$('.p-ts2').hide();
				return;
			}
			$('.p-tip2').show();	
		});
	});
	
	password2.on('blur',function(){
		var paswV = password1.val();
		var str1 = password2.val();
		$(this).css({
			borderColor:'#c5cddb'
		});
		
		if(str1.length == 0){
			$('.u-ts2').hide();
			return;
		}
		
		if(paswV == str1){
			$('.p-ts2').hide();
			$('.p-tip2').hide();
			flag_p1 = true;
		}else{
			$('.p-ts2').show();
			password2.css({
				borderColor:'#fa5b5b'
			});
			flag_p1 = false;
		}
	});
	
	$('.p-c2').click(function(){
		password2.val('');
		$('.p-tip2').hide();
		$('.p-ts2').hide();
		password2.css({
			borderColor:'#c5cddb'
		});
	});
	
	phone.on('focus',function(){
		$(this).css({
			borderColor:'#4aafe9'
		});
		
		phone.on('input',function(){
			var str = phone.val();
			if(str.length == 0){
				$('.pn-tip').hide();
				return;
			}
			$('.pn-tip').show();
		});
	});
	
	phone.on('blur',function(){
		var phoneV = phone.val();
		$(this).css({
			borderColor:'#c5cddb'
		});
		
		if(phoneV.length == 0){
			$('.pn-ts').hide();
			return;
		}
		
		if(!regPh.test(phoneV)){
			$('.pn-ts').show();
			phone.css({
				borderColor:'#fa5b5b'
			});
			flag_ph = false;
		}else{
			$('.pn-tip').hide();
			$('.pn-ts').hide();
			flag_ph = true;
		}
	});
	
	$('.pn-c').click(function(){
		phone.val('');
		$('.pn-tip').hide();
		$('.pn-ts').hide();
		phone.css({
			borderColor:'#c5cddb'
		});
	});
	
	$('.test').click(function(){
		code = Math.floor(Math.random()*9000+1000).toString();
		
		alert('验证码是'+code);
	});
	
	tes.on('focus',function(){
		$(this).css({
			borderColor:'#4aafe9'
		});
	});
	
	tes.on('blur',function(){
		var tesV = tes.val();
		
		if(tesV == code){
			$('.dn-ts').hide();
			$(this).css({
				borderColor:'#c5cddb'
			});
			flag_t = true;
		}else{
			$('.dn-ts').show();
			flag_t = false;
		}
	});
	
	$('.btn').click(function(){
		if(flag_p && flag_p1 && flag_ph && flag_t && flag_u){
			alert('注册成功');
	
			/*$.cookie('username1',user,{expires:10,path: '/'});
			console.log([$.cookie('username1')])
			$.cookie('password',$('.p-inpt').val(),{expires:10,path: '/'});
			location.href='login.html';*/
		}
	});
	
	
	var verify = {
		main: $('.verify-main'),
		move: $('.verify-move'),
		tip: $('.verify-tip'),
		status: $('.verify-status'),
		slice1: $('.verify-slice'),
		img: $('.verify-img'),
		flag: false,
		offsetL: $('.verify-main').offset().left,
		init: function(){
			this.hover();
			this.mousedown();
			this.mouseup();
		},
		hover: function(){
			var timer1 = null;
			var timer2 = null;
			var that = this;
			$('.verify').hover(function(){
				clearTimeout(timer2);
				timer1 = setTimeout(function(){
					that.img.fadeIn(300);
				},300);
			},function(){
				clearTimeout(timer1);
				timer2 = setTimeout(function(){
					that.img.fadeOut(300);
				},300);
			});
		},
		mousedown: function(){
			var that = this;
			this.move.mousedown(function(){
				if(that.flag){
					return;
				}
				
				that.tip.fadeOut();
				that.mousemove();
			});
		},
		mouseup: function(){
			var that = this;
			
			$(document).mouseup(function(){
				if(that.flag){
					return;
				}
				
				$(document).off('mousemove');
				
				var left = parseFloat(that.slice1.css('left'));
				if( left>= 130 && left<= 178){
					that.status.show();
					that.move.attr('src','img/slider1.png');
					that.flag = true;
				}else{
					that.move.animate({
						left: 1
					},600,function(){
						that.tip.show();
					});
					that.slice1.animate({
						left: 0
					},600);
				}
			});
		},
		mousemove: function(){
			var that = this;
			var l = 0;
			$(document).mousemove(function(e){
				e.preventDefault();
				
				l = e.pageX - that.offsetL - 36;
				
				l = l <= 1 ? 1 : (l>=250?250:l);
				
				that.move.css({
					left: l
				});
				
				that.slice1.css({
					left: l
				});
			});
			
		}
	}
	
	verify.init();
});
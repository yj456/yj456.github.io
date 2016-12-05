$(function(){
	
	var login = {
			user: $('.user'),
	 		pasw:  $('.pasw'),
			username: $('.username'),
			password1: $('.password'),
			userR: $('.user-r'),
			paswR: $('.pasw-r'),
			loginBtn: $('.ck'),
			cs:{
				user: 'yj@163.com',
				pasw: '123456'
			},
			flag: true,
			init: function(){
				this.userfocus();
				this.paswfocus();
				this.blur();
				this.click();
				this.rem();
				this.fill();
			},
			userfocus: function(){
				var that = this;
				this.username.on('focus',function(){
					that.user.css({
						borderColor:'#4aafe9'
					});
					
					$('.nerror').hide();
					
					$(this).on('input',function(){
						var userV = that.username.val();
						if(userV.length == 0){
							that.userR.hide();
							return;
						}
						
						that.userR.show();
					});
				});
			},
			paswfocus: function(){
				var that = this;
				this.password1.on('focus',function(){
					that.pasw.css({
						borderColor:'#4aafe9'
					});
					
					$('.nerror').hide();
					
					$(this).on('input',function(){
						var paswV = that.password1.val();
						if(paswV.length == 0){
							that.paswR.hide();
							return;
						}else{
							that.paswR.show();	
						}
					});
				});
			},	
			blur: function(){
				var that =this;
				this.username.on('blur',function(){
					that.user.css({
						borderColor:'#c5cddb'
					});
				});
				
				this.password1.on('blur',function(){
					that.pasw.css({
						borderColor:'#c5cddb'
					});
				});
			},
			click: function(){
				var that = this;
				this.loginBtn.click(function(){
					 var userV = that.username.val();
					 var paswV = that.password1.val();
					 
					 if(userV.length == 0){
					 	$('.nerror').show();
					 	$('.ferrorhead').html('请输入帐号');
					 	return;
					 }
					 
					 if(paswV.length == 0){
					 	$('.nerror').show();
					 	$('.ferrorhead').html('请输入密码');
					 	return;
					 }
					 
					 if(!(userV == that.cs.user) || !(paswV == that.cs.pasw)){
					 	$('.nerror').show();
					 	$('.ferrorhead').html('帐号或密码错误');
					 	return;
					 }
					 
					 if(that.flag){
					 	$.cookie('username',userV,{ path: '/', expires: 10 });
						$.cookie('password',paswV,{ path: '/', expires: 10 });
					 }else{
					 	$.removeCookie('username',{path:'/'});
					 	$.removeCookie('password',{path:'/'});
					 }
				});
				
				this.paswR.find('.paswr-img').click(function(){
						that.password1.val("");
						that.paswR.hide();
				});
				
				this.userR.find('.r-img').click(function(){
						that.username.val("");
						that.userR.hide();
				});
			},
			rem: function(){
				var that = this;
				$('#un-check').change(function(){
					if($(this).is(':checked')){
						$('.unlogin').find('span').addClass('check-select');
					}else{
						$('.unlogin').find('span').removeClass('check-select');
						that.flag = false;
					}
				});
				
			},
			fill:function(){
				if($.cookie('username')){
					this.username.val($.cookie('username'));
					this.password1.val($.cookie('password'));
					this.flag = true;
				}
			}
	}
	
	login.init();
	
	$('.thirdpart').find('li').on('mouseenter','a',function(){
		$(this).css({
			marginRight: -4
		});
	});
	$('.thirdpart').find('li').on('mouseleave','a',function(){
		$(this).css({
			marginRight:0
		});
	});
	
	
});

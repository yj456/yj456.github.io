$(function(){
	$('.mcDropMenuBox').hover(function(){
		$('.mcDropMenu').show();
		$(this).addClass('bgC');
		$(this).find('span').addClass('sap1');
	},function(){
		$('.mcDropMenu').hide();
		$(this).removeClass('bgC');
		$(this).find('span').removeClass('sap1');
	});
	
	$('.mcDropMenuBox1').hover(function(){
		$('.mcDropMenu1').show();
		$(this).addClass('bgC');
		$(this).find('span').addClass('sap1');
	},function(){
		$('.mcDropMenu1').hide();
		$(this).removeClass('bgC');
		$(this).find('span').removeClass('sap1');
	});
	
	$('.mcDropMenuBox2').hover(function(){
		$('.mcDropMenu2').show();
		$(this).addClass('bgC');
		$(this).find('span').addClass('sap1');
	},function(){
		$('.mcDropMenu2').hide();
		$(this).removeClass('bgC');
		$(this).find('span').removeClass('sap1');
	});
	
	$('.topLeft2').hover(function(){
		$('.notice').show();
	},function(){
		$('.notice').hide();
	});
});

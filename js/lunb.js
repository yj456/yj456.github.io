function  Lunb(banner){
	this.main = banner;
	this.prolist1 = banner.find('.prolist1');
	this.itemgroup = this.prolist1.find('.itemgroup');
	this.cri = banner.find('.cri');
	this.next = 0;
	this.now = 0;
	this.timer = null;
}

Lunb.prototype = {
	constructor:Lunb,
	init: function(){
		this.itemgroup.eq(0).show();
		this.autoPlay();
		this.hover();
	},
	autoPlay: function(){
		var that = this;
		this.timer = setInterval(function(){
			that.next++;
			that.imgSwitch();
		},2000);
	},
	imgSwitch: function(){
		
		if(this.next >= 3){
			this.next = 0;
		}
		
		if(this.now <= -1){
			this.now = 2;
		}
		
		this.itemgroup.eq(this.now).hide();
		this.itemgroup.eq(this.next).show();
		
		this.cri.find('span').eq(this.next).siblings().removeClass('active6');
		this.cri.find('span').eq(this.next).addClass('active6');
		
		this.now = this.next;
	},
	hover: function(){
		var that = this;
		this.prolist1.hover(function(){
			clearInterval(that.timer);
		},function(){
			that.autoPlay();
		});
		
		this.cri.on('mouseenter','span',function(){
			clearInterval(that.timer);
			
			$(this).addClass('active6');
			$(this).siblings().removeClass('active6');
			
			that.next = $(this).index();
			that.imgSwitch();
		});
		
		this.cri.on('mouseleave','span',function(){
			that.autoPlay();
		});
	}
}

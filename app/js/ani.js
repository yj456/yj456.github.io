var aniObj = {
	name: '首页',
	dom: $('#ani'),
	init: function(){
		this.bindEvent();
	},
	bindEvent: function(){
		
	},
	enter: function() {
		//页面进入的时候, 写代码，要有决胜千里之外的能力
		this.dom.show();
	},
	leave: function() {
		//页面离开的时候
		this.dom.hide();
	}
}
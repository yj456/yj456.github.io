$(function(){
	$('.top').load('top.html',function(){
		$.getScript('js/top.js');
	});
	
	$('.foot').load('foot.html',function(){
		$('.box').addClass('dis');
	});
	
	var cart ={
		data:null,
		pay: {},
		cart: {},
		con: $('.m-cart'),
		init: function(){
			this.readCookie();
			var that = this;
			
			$.getJSON('js/data.json?key='+Math.random(),function(data){
				
				that.data = data;
				
				for(var key in that.cart){
					
					(function(k){
						var ul = $('<ul class="cart-goods-item clear"></ul>');
						
						ul.load('goodsInfo.html?key='+Math.random(),function(){
							var gid = that.cart[k]['goods-id'];
							ul.attr({
								'data-gid': gid,
								'data-sizeid': k
							});
							//信息填充
							ul.find('.goods-size').html( data[gid]['size'][k]);
							ul.find('.goods-price').html( data[gid]['goods-sale'].toFixed(2));
							ul.find('.amount-input').val( that.cart[k].amount );
							var total = that.cart[k].amount * data[gid]['goods-sale'];
							ul.find('.goods-money').html( total.toFixed(2) );
							//追加到商品区
							that.con.append(ul);
						});
					})(key);
				}
			});
			
			this.increase();
			this.decrease();
			this.input();
			this.selectAll();
			this.remove();
			this.delSelected();
			this.goodsSelect();
		},
		increase: function(){
			var that = this;
			
			this.con.on('click','.amount-increase',function(){
				
				var amount = $(this).prev().val();
				var gid = $(this).parents('.cart-goods-item').data('gid');
				var stack = that.data[gid].stack;
				
				if(amount >= stack){
					return;
				}
				
				amount++;
				
				$(this).prev().val(amount);
				
				that.handleCookie($(this).prev());
			});
		},
		decrease: function(){
			var that =this;
			
			this.con.on('click','.amount-decrease',function(){
				var amount = $(this).next().val();
				
				if(amount <= 1){
					$(this).next().val(1);
					return;
				}
				
				amount--;
				
				$(this).next().val(amount);
				
				that.handleCookie($(this).next());
			});
		},
		input: function(){
			var that = this;
			
			this.con.on('input','.amount-input',function(){
				var amount = parseInt($(this).val());
				var gid = $(this).parents('.cart-goods-item').data('gid');
				var stack = that.data[gid].stack;
				
				if(amount >= stack){
					amount = stack;
				}
				
				if(isNaN(amount) || amount == ''){
					$(this).val(1);
				}else{
					$(this).val(amount);
				}
				
				that.handleCookie($(this));
			});
		},
		readCookie: function(){
			this.cart = $.cookie('kl_cart') || '{}';
			
			this.cart = JSON.parse(this.cart);
		},
		setCookie: function(){
			$.cookie('kl_cart',JSON.stringify(this.cart),{expires:365,path:'/'});
		},
		handleCookie: function(inp){
			var goodsItem = inp.parents('.cart-goods-item');
			var sizeId = goodsItem.data('sizeid');
			
			var price = parseFloat(goodsItem.find('.goods-price').html());
			var money = goodsItem.find('.goods-money');
			
			var totalMoney = (parseInt(inp.val())* price).toFixed(2);
			
			money.html(totalMoney);
			
			this.cart[sizeId].amount = parseInt(inp.val());
			
			this.setCookie();
			
			if(goodsItem.find('input[type="checkbox"]').prop('checked')){
				
				this.pay[sizeId] = totalMoney;
				
				this.handlePay();
			}
		},
		remove: function(){
			var that = this;
			
			this.con.on('click','.delete',function(){
				if(confirm('确定删除宝贝吗？')){
					
					$(this).parents('.cart-goods-item').remove();
					
					var sizeId = $(this).parents('.cart-goods-item').data('sizeid');
					
					delete that.cart[sizeId];
					
					that.setCookie();
				}
			});
		},
		goodsSelect: function(){
			var that = this;
			this.con.on('change','.kl-check input[type="checkbox"]',function(){
				var goodsItem = $(this).parents('.cart-goods-item');
				
				var sizeId = goodsItem.data('sizeid');
				
				var money = goodsItem.find('.goods-money').html();
				
				if(that.pay[sizeId]){
					delete that.pay[sizeId];
				}else{
					that.pay[sizeId] = money;
				}
				
				var allCheck = that.con.find('input[type="checkbox"]');
				var allCHecked = that.con.find('input[type="checkbox"]:checked');
				
				if(allCheck.length == allCHecked.length){
					$('.select-all-btn').prop('checked',true);
				}else{
					$('.select-all-btn').prop('checked',false);
				}
				
				that.handlePay();
			});
		},
		handlePay: function(){
			var amount = $('.user-goods-amount');
			var money = $('.user-goods-money');
			var gopay = $('.go-pay');
			
			var num = 0;
			var total = 0;
			
			for(var i in this.pay){
				num++;
				total += parseFloat(this.pay[i]);
			}
			
			if(num > 0){
				gopay.addClass('can-pay');
			}else{
				gopay.removeClass('can-pay');
			}
			
			amount.html(num);
			money.html(total.toFixed(2));
			
		},
		selectAll: function(){
			$('.select-all-btn').click(function(){
				var status = $(this).prop('checked');
				var allCheck = $('.m-cart input[type="checkbox"]');
				
				if(status){
					allCheck.prop('checked',true);
				}else{
					allCheck.prop('checked',false);
				}
				
				allCheck.change();
			});
		},
		delSelected: function(){
			var that= this;
			$('.cart-option .delete').click(function(){
				var allCheck = that.con.find('input[type="checkbox"]:checked');
				
				if(allCheck.length == 0){
					alert('确定删除选中的宝贝吗？');
					return;
				}
				
				if(confirm('确定删除选中的宝贝吗？')){
					allCheck.each(function(){
						var sizeId = $(this).parents('.cart-goods-item').data('sizeid');
						
						$(this).parents('.cart-goods-item').remove();
						
						delete that.cart[sizeId];
						that.setCookie();
						
						delete that.pay[sizeId];
						
						that.handlePay();
					});
				}
			});
		}
		
	}
	
	cart.init();
});
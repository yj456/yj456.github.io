$(function(){
	var inpt = $('.topInput');
	var searchhint = $('.searchhint');
	
	inpt.on('input',function(){
		var inptV = inpt.val();
		if(inptV.length == 0){
			searchhint.hide();
			return;
		}else{
			searchhint.show();	
		}
		$.ajax({
			url: 'http://suggest.taobao.com/sug?code=utf-8&',
			data: {
				q : inptV
			},
			dataType: 'jsonp',
			success: function(data){
				var cont = '';
				for(var i in data.result){
					cont += '<li>'
						+		'<a href="#" >'+data.result[i][0]+'</a>'
						+	'</li>'
				}
				searchhint.find('ul').html(cont);
			}
		})
	});
});
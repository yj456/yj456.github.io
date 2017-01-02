var config = {
	'/:name': function(id){
		routeController.init(id)
	}
}
var t = new Router(config);
t.init('ani');
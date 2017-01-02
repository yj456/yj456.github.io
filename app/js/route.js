var routeController = (function(){

	var prevModule; 
	var curModule; 

	var  HashModuleMap = {
		'ani': aniObj,
		'home': homeObj,
		'myshow':myshowObj
	}

	var initMap = {
		
	}

	function initMethod(hashName){
		
		var module = HashModuleMap[hashName] || HashModuleMap['ani'];
		
		/*if(hashName.indexOf('form') !== -1) {
			module = HashModuleMap['form'];
			module.changeCity(hashName);
		}*/

		
		prevModule = curModule; //null homeObj
		curModule = module; //当前模块 = 首页对象 homeObj rankObj

		if(prevModule) {
			prevModule.leave();//homeObj.leave();
		}
		curModule.enter(); //首页得以展示, 排名页展示
		

		if(!initMap[hashName]) { //如果当前模块没有被标记成功（没有被初始化过）
			curModule.init(); //为当前模块执行init方法，进行初始化操作

			initMap[hashName] = true; // 将当前模块标记成已经初始化过了
		}

	}

	return {
		init: initMethod
	}
})();
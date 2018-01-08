var eventMain;
// http://blog.csdn.net/magic__man/article/details/51831227
//添加监听  name funEvent 执行的函数
function addEvent(name, funEvent) {
	//  document.addEventListener('oneating', function (event) {  
	//      alert(event.mingzi+'，'+event.message);  
	//  }, false);  
	document.addEventListener(name,funEvent(event), false);
}
//发出事件 name 事件的名字 objc 事件传递的参数，为objc
function sendEvent(name, objc) {
	var event = document.createEvent('HTMLEvents');
	event.initEvent(name, true, true);
	event.canshu = objc;
	document.dispatchEvent(event);
}

var vmEvent ;

// import md5 from '@/framework/common/utils/md5.js';
var key_mounted_not = "t_mounted_not_key";

function a_context(a_this,tagName){
	function get_for_refs(instance,tagName_f){
		let refs = instance.$refs;
		if(!refs){
			refs = instance[0].$refs
		}
		if(refs && typeof(refs) == "object"){
			if(refs.hasOwnProperty(tagName_f)){
				return refs;
			}else{
				let keys = Object.keys(refs)
				let item;
				keys.forEach(function(key, index){
					let item_f = get_for_refs(refs[key],tagName_f)
					if(item_f && item_f.hasOwnProperty(tagName_f)){
						item = item_f;
						return;
					}
				})
				if(item){ return item; }
			}
		}else if(typeof(refs) == "array"){
			let itme;
			refs.forEach(function (t, i) {
				itme_f = get_for_refs(t,tagName_f);
				if(itme_f.hasOwnProperty(tagName_f)){
					item = itme_f;
					return;
				}
			})
			if(item){ return item; }
		}
		return null;
	}
	
	let list_t = get_for_refs(a_this,tagName)
	console.log("find:",list_t)
	if(list_t){
		return list_t[tagName];
	}else{
		return null;
	}
}
// function a_mounted(cmd_str,nextTick){
// 	let fun_str_arr=[];
// 	function get_tick_fun_str(current,next) {
// 		let placeholder = 'placeholder_'+next;
// 		if(current == "this"){
// 			current = 'getCurrentPages()[getCurrentPages().length - 1]'
// 		}
// 		let fun_str = current+'.$nextTick(()=>{let '+next + "= "+current+".$refs."+next+';'+placeholder+'})'
// 		// console.log("fun_str:",fun_str);
// 		return fun_str;
// 	}
// 	function get_last_fun_str(current) {
// 		if(current == "this"){
// 			current = 'getCurrentPages()[getCurrentPages().length - 1]'
// 		}
// 		let fun_str = current+'.$nextTick(()=>{nextTick()})'
// 		// console.log("get_last_fun_str:",fun_str);
// 		return fun_str;
// 	}
	
// 	let instances = cmd_str.split('.$refs.');
// 	console.log('instances:',instances)
// 	for(let i =0;i<instances.length-1;i++){
// 		if(i == instances.length -2){
// 			fun_str_arr.push(get_last_fun_str(instances[i],instances[i+1]));
// 		}else{
// 			fun_str_arr.push(get_tick_fun_str(instances[i],instances[i+1]));
// 		}
// 	}
// 	let eval_cmd_str = "";
// 	// console.log('fun_str_arr:',fun_str_arr)
// 	eval_cmd_str = fun_str_arr[0];
// 	fun_str_arr.forEach(function(item,index){
// 		if(index != 0){ 
// 			let placeholder = 'placeholder_'+instances[index];
// 			eval_cmd_str = eval_cmd_str.replace(placeholder,item);
// 		};
// 	})
// 	eval(eval_cmd_str);
// }

var callBacks ={};
export default {
	a_mounted(name,nextTick){
		let that = getCurrentPages()[getCurrentPages().length - 1];
		let context;
		that.$nextTick(function(){
			context = a_context(that,name)
			if(context){
				nextTick(context)
			}else{
				var obj = {
					"fun":nextTick,
					"name":name
				}
				callBacks[that.route]=obj;
			}
		})
	},
	key_mounted_not(){
		return key_mounted_not;
	}
}

function query_callBack(key){
	if(callBacks.hasOwnProperty(key)){
		return callBacks[key];
	}else{
		return null;
	}
}

function init(){
	uni.$on(key_mounted_not,function(data){
        console.log('监听到事件来自 '+key_mounted_not+' ，携带参数 msg 为：' + data);
		var page = getCurrentPages()[getCurrentPages().length - 1];
		page.$nextTick(function(){
			var obj = query_callBack(page.route);
			if(!obj){
				console.error(page.route+"路径下未注册a_mounted方法");
			}
			var context = a_context(page,obj.name);
			if(context){
				var fun = obj.fun;
				fun(context);
				delete callBacks[page.route];
			}else{
				console.warn(page.route+"路径下未发现:"+obj.name+",请检查ref绑定name是否正确");
			}
		})
    })
}
init();



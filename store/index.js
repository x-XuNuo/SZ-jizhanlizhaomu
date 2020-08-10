import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './module/moduleA';
import moduleB from './module/moduleB';

Vue.use(Vuex)

const TOKEN = uni.getStorageSync("token") || "";

const store = new Vuex.Store({
	// state 存放状态
	//不要直接更改state中的状态的值  
	state: {
		// 前端token
		token: TOKEN,
	},

	// getters 对state中的成员加工后传递给外界
	getters: {
		// 用户是否登录
		// state 当前VueX对象中的状态对象
		// getters 当前getters对象，用于将getters下的其他getter拿来用
		// this.$store.getters.xxxx

		hasLogin: state => {
			if (state.token) {
				return true;
			} else {
				return false
			}
		}
	},

	// mutations state成员操作 比如对该数据的修改、增加、删除等等
	// Vue.set  Vue.delete 删除成员
	mutations: {
		//es6语法，等同edit:funcion(){...}
		SET_TOKEN(state, token) {
			state.token = token;
			uni.setStorageSync("token", token);
		}
	},
	// actions 异步操作
	// 由于直接在mutation方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交mutation方法。
	// 在组件中调用:this.$store.dispatch('aEdit',{age:15})


	// 默认参数
	// context 上下文(相当于箭头函数中的this)对象
	// payload 挂载参数

	actions: {


		// aEdit(context,payload){
		//     setTimeout(()=>{
		//         context.commit('edit',payload)
		//     },2000)
		// }

		// 改进: 由于是异步操作，所以我们可以为我们的异步操作封装为一个Promise对象

		// aEdit(context, payload) {
		// 	return new Promise((resolve, reject) => {
		// 		setTimeout(() => {
		// 			context.commit('edit', payload)
		// 			resolve()
		// 		}, 2000)
		// 	})
		// }


		// // 登录过期 重新登录
		// reLogin({
		// 	commit
		// }, info) {
		// 	commit("SET_TOKEN", "");
		// 	$mRouter.redirectTo({
		// 		route: $mRoutesConfig.login
		// 	});
		// }
	},

	modules: {
		moduleA,
		moduleB
	}

	// modules 模块化状态管理

	// models:{
	//     a:{
	//         state:{},
	//         getters:{},
	//         ....
	//     }
	// }
	// 组件内调用模块a的状态： this.$store.state.a

	// 提交或者dispatch某个方法和以前一样,会自动执行所有模块内的对应type的方法
	// this.$store.commit('editKey')
	// this.$store.dispatch('aEditKey')

})

export default store

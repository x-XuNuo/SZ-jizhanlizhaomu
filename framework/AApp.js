import Vue from 'vue'
import aRouter from '@/framework/ARouter.js';
import uView from "@/framework/libs/uView";

class AApp extends Vue {
	constructor(arg) {
		super();
		this.init();
	}

	init() {
		// this.initComponent();
		this.initRouter();
		this.initMixins();
		this.initThirdFrame();
	}
	
	// 第三方框架引入
	initThirdFrame(){
		Vue.use(uView);
	}
	
	// 自定义组件初始化注册
	initComponent() {}

	// 初始化路由器
	initRouter() {
		aRouter.beforeEach((navType, to) => {
			console.log("navType => {}", navType);
			console.log("to => {}", to);
			if (to.requiresAuth) {
				console.log("need auth ----->   ");
			} else {
				console.log("no need --->", to);
				if (navType == "jumpLink") {

					// #ifdef APP-PLUS
					uni.navigateTo({
						url: to
					});
					// #endif

					// #ifdef H5
					window.location.href = to;
					// #endif

				} else {

					uni[navType]({
						url: to
					});
				}

			}
		})
	}

	// 初始化mixins 
	initMixins() {}

	// 统一路由管理
	async main(query) {
		return new Promise((resolve, reject) => {
			console.log("query is =>  {}", query);
		});
	}
}

export default new AApp();

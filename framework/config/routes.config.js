/* 
 * 路由表对象：
 * 该文件挂载在Vue原型中 $aRoutesConfig
 * 作用：调用$mRouter对象的方法 传入以下对应的路由对象，详细见common目录下的router.js
 * 示例：this.$mRouter.push({route:this.$mRoutesConfig.main,query:{a:1}})
 * 注意：所有在pages目录下新建的页面都必须在"路由表"中进行声明，并且在框架的pages.json注册。
 * 
 * 配置参数项说明： 
 * name:可选配置 （路由名称）
 * path:必填配置 （路由地址）
 * requiresAuth:可选配置 （是否权限路由）
 */

export default {
	// 权限路由
	user: {
		name: "我的推广码",
		path: "/pages/user/user",
		// requiresAuth 是否拦截 true-不拦截 false-拦截
		requiresAuth: true
	},
	// 权限路由
	alist: {
		name: "a-list",
		path: "/pages/framework/a-list",
		requiresAuth: false
	},
	// 外链地址跳转
	commonLink: {
		name: "common-link",
		path: "/pages/common-page/common-link",
		requiresAuth: true
	},
	// 低代码实现
	frame: {
		name: "frame",
		path: "/pages/frame/frame",
		requiresAuth: true
	}
}

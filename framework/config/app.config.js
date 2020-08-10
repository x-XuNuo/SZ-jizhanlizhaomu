const CONFIG = {
	//开发环境配置
	development: {
		tokenKey: "TOKEN_DEV" ,// 登录标识,
		baseUrl: "http://dev.sicbcore.com",
		// 公司ID
		companyId:"f572a336a93e4a379987c063154cfbad",
		// 项目ID
		projectId:"e67789780c42c91e287113460f774e43"
	},

	//生产环境配置
	production: {
		tokenKey: "TOKEN_PRO",// 登录标识,
		baseUrl: "https://jizhanlipeixun.sicbcore.com",
		// 公司ID
		companyId:"f572a336a93e4a379987c063154cfbad",
		// 项目ID
		projectId:"e67789780c42c91e287113460f774e43"
	}

}

export default CONFIG[process.env.NODE_ENV];

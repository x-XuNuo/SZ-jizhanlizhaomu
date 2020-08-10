const CONFIG = {
	//开发环境配置
	development: {
		tokenKey: "TOKEN_DEV" ,// 登录标识,
		baseUrl: "http://dev.sicbcore.com",
		// 公司ID
		companyId:"b2f38c6e747e4b2d9db341faec7c0e6a",
		// 项目ID
		projectId:"63930c07614f4f45ad1638cbef6bfd8e"
	},
	//生产环境配置
	production: {
		tokenKey: "TOKEN_PRO",// 登录标识,
		baseUrl: "https://jizhanlipeixun.sicbcore.com",
		// 公司ID
		companyId:"b2f38c6e747e4b2d9db341faec7c0e6a",
		// 项目ID
		projectId:"63930c07614f4f45ad1638cbef6bfd8e"
	}

}

// export default CONFIG[process.env.NODE_ENV];
export default CONFIG.development;

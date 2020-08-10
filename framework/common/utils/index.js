import crypto from '@/framework/common/utils/crypto/cryptoaes.js';
import md5 from '@/framework/common/utils/md5.js';
import fConfig from '@/framework/config/index.js';
import * as apis from '@/framework/apis/index.js';
export default {
	/* 
	 第三方方法，例如aes/md5加解密方法
	 */
	thirdParts: {
		md5: md5,
		crypto: crypto
	},
	/* 
	 * 将cityNo 转 cityName
	 * cityData:原数据
	 * cityNo：二级地区编码
	 */
	getCityName(cityData, cityNo) {
		if (!cityNo) return;
		if (!(cityData instanceof Array)) return;
		// 9112
		cityNo += "";
		for (let i = 0; i < cityData.length; i++) {
			let sheng = cityData[i];
			for (let j = 0; j < sheng.children.length; j++) {
				let shi = sheng.children[j];
				if (shi.value == cityNo) {
					// 使用return 终止循环
					return `${sheng.label}-${shi.label}`;
				}
			}
		}
	},

	/* 
	 * obj 转 params字符串参数  
	 * 例子：{a:1,b:2} => a=1&b=2
	 */
	objParseParam(obj) {
		let paramsStr = "";
		if (obj instanceof Array) return paramsStr;
		if (!(obj instanceof Object)) return paramsStr;
		for (let key in obj) {
			paramsStr += `${key}=${obj[key]}&`;
		}
		return paramsStr.substring(0, paramsStr.length - 1);
	},

	/* 
	 * obj 转 路由地址带参数
	 * 例子：{a:1,b:2} => /pages/index/index?a=1&b=2
	 */
	objParseUrlAndParam(path, obj) {
		let url = path || "/";
		let paramsStr = "";
		if (obj instanceof Array) return url;
		if (!(obj instanceof Object)) return url;
		paramsStr = this.objParseParam(obj);
		paramsStr && (url += "?");
		url += paramsStr;
		return url;
	},

	/* 
	 * 获取url字符串参数
	 */
	getRequestParameters(locationhref) {
		let href = locationhref || "";
		let theRequest = new Object();
		let str = href.split("?")[1];
		if (str != undefined) {
			let strs = str.split("&");
			for (let i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
			}
		}
		return theRequest;
	},

	/* 
	 * 银行卡每四位空格
	 */
	formatCardNo(cardNo) {
		cardNo += "";
		return cardNo.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
	},

	/**
	 * 乘法，解决js精度损失问题
	 * @param {*} arg1 
	 * @param {*} arg2 
	 */
	accMul(arg1, arg2) {
		arg1 = arg1 || 0;
		var m = 0,
			s1 = arg1.toString(),
			s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length
		} catch (e) {}
		try {
			m += s2.split(".")[1].length
		} catch (e) {}
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
	},

	//正则匹配地址中带的参数
	getQueryString(name) {
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "igm");
		let r = window.location.search.substr(1).match(reg);
		if (r !== null) {
			return unescape(r[2]);
		};
		return null;
	},

	getIsIos() { //是否为IOS
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			return true;
		} else {
			return false;
		}
	},

	// 判断是否为微信
	getIsWeiXin() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			return true;
		} else {
			return false;
		}
	},

	// 判断是否为企业微信
	getIsEnterpriseWeiXin() {
		var ua = navigator.userAgent.toLowerCase();
		if (this.getIsWeiXin() && ua.match(/wxwork/i) == 'wxwork') {
			return true;
		} else {
			return false;
		}
	},

	// 地址参数截取
	getRequest(originalUrl) {
		var url;
		if (originalUrl.indexOf("from")) {
			url = originalUrl.substring(originalUrl.indexOf('&'));
		} else {
			url = originalUrl;
		}
		url = url.replace(/&amp;/g, "&");
		console.log(url)
		//获取url中"?"符后的字串  
		var theRequest = new Object();

		if (url.indexOf("?") != -1) {
			var originalStr = url.split("?")[1];
			var lastStrs = originalStr.split("&");
		} else {
			var lastStrs = url.split("&");
		}

		for (var i = 0; i < lastStrs.length; i++) {
			theRequest[lastStrs[i].split("=")[0]] = unescape(lastStrs[i].split("=")[1]);
		}
		return theRequest;
	},

	//获取?的参数
	dealParams: function(url) {
		var urlparams = decodeURIComponent(url);
		var params = {};
		if (urlparams.indexOf("?") != (-1)) {
			var urls = urlparams.split("?");
			var arr = urls[1].split("&");
			for (var i = 0, l = arr.length; i < l; i++) {
				var a = arr[i].split("=");
				params[a[0]] = a[1];
			}
			return params;
		} else {
			return ''
		}
	},

	//随机数的生成
	randomChar: function() {
		var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
		];
		var times = new Date().getTime();
		var res = "";
		for (var i = 0; i < 35; i++) {
			var id = Math.ceil(Math.random() * 35);
			res += chars[id];
		}
		res += times;
		return res;
	},

	//获取cookie
	getCookie: function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},

	//清除cookie
	clearAllCookie() {
		var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
		if (keys) {
			for (var i = keys.length; i--;) {
				document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
			}
		}
	},

	// 拼接参数
	convertObj(data) {
		var tempArr = [];
		for (var i in data) {
			var key = encodeURIComponent(i);
			var value = encodeURIComponent(data[i]);
			tempArr.push(key + '=' + value);
		}
		var urlParamsStr = tempArr.join('&');
		return urlParamsStr;
	},

	// 解决iOS在微信浏览器调起键盘，页面会被软键盘顶上去，页面有留白问题
	solveIosBlank() {
		// #ifdef H5
		const u = navigator.userAgent;
		const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		if (isiOS) {
			// window.scrollTo(0, 0)
			setTimeout(() => {
				window.scrollTo(0, document.body.scrollTop + 1);
				document.body.scrollTop >= 1 && window.scrollTo(0, document.body.scrollTop - 1);
			}, 10)
		}
		// #endif
	},

	// 将时间戳格式转化为yyyyMMddHHmmss
	generateTimeReqestNumber() {
		var date = new Date();
		return date.getFullYear().toString() + (date.getMonth() + 1) + (date.getDate()) + (date.getHours()) + (date.getMinutes()) +
			(date.getSeconds());
	},

	// 获取当前平台来源
	// iosApp、androidApp、wx公众号、wx企业号、wx小程序、钉钉、h5
	async getPlatformSources() {
		let platform = '';
		let source = '';
		platform = uni.getSystemInfoSync().platform;
		// #ifdef APP-PLUS

		source = platform + 'APP';

		// #endif

		// #ifdef H5

		if (this.getIsWeiXin()) {

			// 当前环境是否为企业微信
			if (this.getIsEnterpriseWeiXin()) {
				source = 'WeChatEnterprise';
			}

			// 当前环境是否为微信小程序
			await wxShare.miniProgram.getEnv(function(res) {
				// console.log("334:", res.miniprogram)
				if (res.miniprogram) {
					// 小程序环境下逻辑
					source = 'WeChatApplet';
				} else {
					//非小程序环境下逻辑
					source = 'WeChatOfficialAccount';
				}
				uni.setStorageSync('source', source);

			})

		} else if (await ddShare.env.platform != "notInDingTalk") {
			// console.log("347:", ddShare.env.platform != "notInDingTalk")
			source = 'DingTalk';
			uni.setStorageSync('source', source);

		} else {
			source = 'H5';
		}

		// #endif

		console.log('source', source);
		uni.setStorageSync('source', source);

	},

	// 请求参数加密
	AesEncrypted(params) {
		// json转换字符串
		let paramsStr = JSON.stringify(params);

		// 生成签名的时间戳
		let timestamp = this.generateTimeReqestNumber();

		// 生成签名的随机串
		let nonceStr = this.randomChar();

		// 注意IV必须是 16 个字节 8*16 = 128 位
		let IV = 'BjNzhiZDctOGMxOS';
		// 由于采用的 AES-256， 所以 Key 为 32 个字节 32*8 = 256
		let aesKey = 'I0YmM5NTgtY2IyYi00OWIzLWFkZTktZj';

		// 加密：
		let encrypted = this.thirdParts.crypto.AESUtil.encrypt(paramsStr, aesKey, IV);
		encrypted = encodeURI(encrypted);
		let encryptedParam = (encrypted.replace(/%2B/g, '+').replace(/%20/g, '+')).trim();

		let sign = this.thirdParts.md5.hex_md5(paramsStr + timestamp + nonceStr);

		let encryptedJson = {
			"reqData": encrypted,
			"sign": sign,
			"timestamp": timestamp,
			"nonceStr": nonceStr
		}
		return encryptedJson;
	},

	// 页面请求数据唯一标识
	pageCodeEncrypted(params) {
		let companyId = fConfig.APP.companyId;
		let projectId = fConfig.APP.projectId;
		let pageCode = this.thirdParts.md5.hex_md5(companyId + projectId + params);
		return pageCode;
	},

	// 特殊字符转义
	htmlEncodeByRegExp(str) {
		var s = "";
		if (str.length == 0) return "";
		s = str.replace(/&/g, "&amp;");
		s = str.replace(/</g, "&lt;");
		s = str.replace(/>/g, "&gt;");
		s = str.replace(/ /g, "&nbsp;");
		s = str.replace(/\'/g, "&#39;");
		s = str.replace(/\"/g, "&quot;");
		s = str.replace(/\n/g, "<br/>");
		return s;

	},

	// 特殊字符反转义
	htmlDecodeByRegExp(str) {
		var s = "";
		if (str.length == 0) return "";
		// s = str.replace(/&amp;/g, "&"); 
		// s = str.replace(/&lt;/g, "<"); 
		// s = str.replace(/&gt;/g, ">"); 
		// s = str.replace(/&nbsp;/g, " "); 
		// s = str.replace(/&#39;/g, "\'"); 
		s = str.replace(/&quot;/g, "\"");
		// s = str.replace(/<br\/>/g, "\n"); 
		return s;
	},

	// 处理页面属性参数
	processDataFun(params) {
		// 组件属性
		let propsData = {};
		// 操作相关属性
		let operateData = {};
		// 业务属性
		let data = {};

		// console.log('params:', params);

		for (let item in params) {
			// 组件属性
			if (item.indexOf('PD') != (-1)) {
				let processParam = item.split('-')[1];

				if (item.indexOf('List') != (-1) && item) {
					let temp = params[item];
					temp = this.htmlDecodeByRegExp(temp);
					// temp = temp.replace(/&quot;/g, "\"");
					temp = JSON.parse(temp);
					
					propsData[processParam] = temp;

				} else {
					propsData[processParam] = params[item];
				}


			}

			// 业务属性
			if (item.indexOf('DT') != (-1)) {
				let processParam = item.split('-')[1];
				let attributeList = ['jointParam', 'list'];

				if (attributeList.indexOf(processParam) != (-1)) {
					let temp = params[item];

					temp = this.htmlDecodeByRegExp(temp);
					// temp = temp.replace(/&quot;/g, "\"");

					temp = JSON.parse(temp);

					data[processParam] = temp;

				} else {
					data[processParam] = params[item];
				}



			}

			// 操作相关属性
			if (item.indexOf('OD') != (-1)) {
				let processParam = item.split('-')[1];
				let attributeList = ['click', 'change', 'cancel', 'send', 'list', ];
				if (attributeList.indexOf(processParam) != (-1) || processParam.indexOf('click') != (-1)) {
					let temp = params[item];
					temp = this.htmlDecodeByRegExp(temp);
					// temp = temp.replace(/&quot;/g, "\"");

					if (processParam.indexOf('list') != (-1) && processParam) {
						temp = JSON.parse(temp);
					}

					operateData[processParam] = temp;

				} else {
					operateData[processParam] = params[item];
				}



			}


		}
		// console.log('转换结果:',JSON.stringify(operateData))
		return {
			propsData: propsData,
			data: data,
			operateData: operateData
		};

	},

	// ---------------------组件初始化---起----------------------------

	async initPages() {
		let queryPageJson = {};
		var pages = getCurrentPages();
		let currentPage = pages[pages.length - 1].route;
		let pageCode = this.pageCodeEncrypted(currentPage);

		let requestParam = {
			version: fConfig.CONST.VERSION || '',
			pageCode: pageCode || '',
			systemCode: fConfig.CONST.SYSTEM_CODE || ''
		};
		requestParam = this.AesEncrypted(requestParam);

		let res = await apis.queryPageJson(requestParam);
		if (res && res.code == '0') {
			queryPageJson = res.page;
			
			// 测试造数据注释以下两行
			queryPageJson = decodeURIComponent(res.page);
			queryPageJson = JSON.parse(queryPageJson);

			// console.log('queryPageJson:', queryPageJson);
		}
		return queryPageJson;
	},

	// ---------------------组件初始化---止----------------------------

}

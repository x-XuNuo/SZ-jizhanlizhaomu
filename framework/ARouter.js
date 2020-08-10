/*   全局路由器
 * 
 */

class ARouter {
	constructor(arg) {
		this.callBack = () => {};
	}

	beforeEach(callBack) {
		if (callBack instanceof Function) this.callBack = callBack;
	}

	push(to) {
		this.callBack("navigateTo", to);
	}

	redirectTo(to) {
		this.callBack("redirectTo", to);
	}

	reLaunch(to) {
		this.callBack("reLaunch", to);
	}

	switchTab(to) {
		this.callBack("switchTab", to);
	}
	
	jumpLink(url){
		// #ifdef APP-PLUS
		url = encodeURIComponent(url);
		let link = '/pages/common-page/common-link?url= ' + url;
		this.callBack("jumpLink", link);
		// #endif
		
		// #ifdef H5
		this.callBack("jumpLink", url);
		// #endif
	}

	back(delta) {
		uni.navigateBack({
			delta
		})
	}

}

export default new ARouter();
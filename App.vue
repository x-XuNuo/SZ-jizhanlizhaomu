<script>
	// #ifdef H5
	// 移动端调试
	// var VConsole = require("@/framework/common/utils/vconsole.min.js");
	// #endif
	export default {
		onLaunch: function() {
			console.log("glob: " + JSON.stringify(getApp().globalData));
			
			uni.$on('update',()=>{
				console.log("update: " + "event");
			})
		},
		onShow: function() {
		},
		onHide: function() {
		},
		mounted() {
			// #ifdef H5
			// var vConsole = new VConsole();
			// #endif
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("@/framework/common/assets/style/utils.scss");
</style>

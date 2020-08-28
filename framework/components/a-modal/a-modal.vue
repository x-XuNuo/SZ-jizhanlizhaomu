<template>
		<u-modal
		v-model="this.propsData.show == 'true' ? true : false"
		:z-index="this.propsData.zIndex"
		:title="this.propsData.title"
		:width="this.propsData.width"
		:content="this.propsData.content"
		:show-title="this.propsData.showTitle"
		:show-confirm-button="this.propsData.showConfirmButtom == 'true' ? true :false"
		:show-cancel-button="this.propsData.showCancelButton == 'true' ? true :false"
		:confirm-text="this.propsData.confirmText"
		:cancel-text="this.propsData.cancelText"
		:cancel-color="this.propsData.cancelColor"
		:confirm-color="this.propsData.confirmColor"
		:border-radius="this.propsData.borderRadius"
		:title-style="this.propsData.titleStyle"
		:content-style="this.propsData.contentStyle"
		:cancel-style="this.propsData.cancelStyle"
		:confirm-style="this.propsData.confirmColor"
		:zoom="this.propsData.zoom == 'true' ? true : false"
		:async-close="this.propsData.asyncClose == 'true' ? true :false"
		:mask-close-able="this.propsData.maskCloseAble == 'true' ? true : false"
		:negative-top="this.propsData.negativeTop"
		@confirm="confirm"
		@cancel="cancel"
	></u-modal>
	
</template>

<script>
export default {
	name: 'a-modal',
	props: {
		// json配置属性信息
		attributesData: Array | Object
	},
	data() {
		return {
			// json配置属性信息
			propsData: {},
			// 操作相关属性
			operateData: {},
			// 业务属性
			data: {},
			// 请求相关属性
			requestData: {}
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData ?  this.attributesData.propsData : {};
		this.data = this.attributesData ? this.attributesData.data : {};
		this.operateData = this.attributesData ? this.attributesData.operateData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.current : {};

	},

	methods: {
		//数据接口
		setPropsData(propsData) {
			this.propsData = propsData;
			console.log("37:",this.propsData)
		},
		
		// 业务属性接口
		setData(data) {
			this.data = data;
		},
		
		//操作属性接口
		setOperateData(operateData) {
			this.operateData = operateData;
		},
		
		//请求接口
		setRequestData(requestData) {
			this.requestData = requestData;
		},

		// string转换成函数
		evalFun(ev) {
			eval(ev);
		},
		
		// 网络请求
		request() {
			let requestApi = '';
			if (this.requestData.requestMode && this.requestData.remoteApi) {
				if (this.requestData.requestMode == 'POST') {
					requestApi = this.$apis.POST(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else if (this.requestData.requestMode == 'GET') {
					requestApi = this.$apis.GET(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else {
					console.log('请检查参数是否正确！');
				}
		
				console.log('requestApi:', requestApi);
		
				requestApi
					.then(res => {
						if (typeof this.requestData.success == 'function') {
							this.requestData.success(res);
						} else if (typeof this.requestData.success == 'string') {
							try {
								let string = 'this.$root.' + this.requestData.success;
								this.evalFun(string);
							} catch (e) {
								console.log('错误信息：', e);
							}
						} else {
							console.log('请检查参数是否正确！');
						}
		
						this.data = res;
					})
					.catch(error => {
						if (this.requestData.error) {
							let string = 'this.$root.' + this.requestData.success;
							this.evalFun(string);
						} else {
							console.log('error:', error);
						}
					});
			} else {
				console.log('请检查参数是否正确！');
				return;
			}
		},
		
		// 点击确认按钮时触发
		confirm(){
			console.log("2345678908765")
			if (this.operateData.confirm) {
				let string = 'this.$root.' + this.operateData.confirm;
				this.evalFun(string);
			}
		},
		
		// 点击取消按钮时触发
		cancel(){
			if (this.operateData.cancel) {
				let string = 'this.$root.' + this.operateData.cancel;
				this.evalFun(string);
			}
		},
		
	}
};
</script>
<style scoped></style>

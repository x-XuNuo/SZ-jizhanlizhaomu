<template>
	<view>
		<ux-load-refresh
			v-if="this.data.list"
			ref="loadRefresh"
			:backgroundCover="this.propsData.backgroundCover"
			:pageNo="parseInt(this.propsData.pageNo)"
			:totalPageNo="parseInt(this.propsData.totalPageNo)"
			:isRefresh="this.propsData.isRefresh == 'true' ? true : false"
			:refreshTime="parseInt(this.propsData.refreshTime)"
			@loadMore="loadMore"
			@refresh="refresh"
		>
			<block slot="content-list">
				<view v-if="this.propsData.mode == 'card'">
					<view v-for="(item, index) in this.data.list" :key="index" class="bg-fff pt15 color999">{{ item }}</view>
				</view>
			</block>
		</ux-load-refresh>
	</view>
</template>

<script>
export default {
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
			requestData: {},
			//页面列表参数
			pageInfo: {
				pageNo: 0,
				totalPageNo: 1,
				pageSize: 10,
				isRefresh: true
			},
			isLoading: false
		};
	},
	mounted() {
		console.log("50-attributesData:",this.attributesData);
		
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		this.requestData = this.attributesData.requestData;
		this.pageInfo.pageNo = this.propsData.pageNo;
		//初始化数据
		this.request();
		// console.log('this.propsData:', this.propsData);
		// console.log('this.data:', this.data);
		// console.log('this.operateData:', this.operateData);
		// console.log('this.requestData:', this.requestData);
	},

	methods: {
		//数据接口
		setPropsData(propsData) {
			this.propsData = propsData;
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
			let that = this;
			let requestApi = '';

			if (!this.isLoading && this.requestData.requestMode && this.requestData.remoteApi) {
				if (this.requestData.requestMode == 'POST') {
					requestApi = this.$apis.POST(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else if (this.requestData.requestMode == 'GET') {
					requestApi = this.$apis.GET(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else {
					console.log('请检查参数是否正确！');
				}

				requestApi
					.then(res => {
						if (this.requestData.success) {
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
							// 组件内部方法 -- 结束单次加载更多
							this.loadOver();
						} else {
							console.log('success-参数:', this.requestData.success);
						}

						// 调用接口返回成功后，逻辑如下
						if (res && res.data) {
							if (that.pageInfo.pageNo > that.pageInfo.totalPageNo) {
								return;
							}
							console.log("132:",res)
							if (that.pageInfo.isRefresh) {
								// that.data = res.data;
								that.data.list = that.data.list.concat(res.data.list);
								// 组件内部方法 -- 事件触发下拉刷新
								this.runRefresh();
								// 初始化数据
								that.pageInfo.isRefresh = false;
								that.isLoading = false;
							} else {
								that.data.list = that.data.list.concat(res.data.list);
								// 组件内部方法 -- 结束单次加载更多
								this.loadOver();
							}

							// 数据累加
							that.pageInfo.totalPageNo = res.data.totalPageNo;
							that.pageInfo.pageNo += 1;
						} else {
							that.pageInfo.isRefresh = false;
							that.isLoading = false;
							console.log('+++++++++ 返回数据异常 ++++++++++');
							return;
						}
					})
					.catch(error => {
						// 初始化数据
						that.pageInfo.isRefresh = false;
						that.isLoading = false;
						console.log('error:', error);
					});
			} else {
				console.log('请检查参数是否正确！');
				return;
			}
		},

		// 组件内方法
		// 结束单次加载更多
		loadOver() {
			this.$refs.loadRefresh.loadOver();
		},

		// 事件触发下拉刷新
		runRefresh() {
			this.$refs.loadRefresh.runRefresh();
		},

		// 事件 - 加载更多
		loadMore() {
			if (this.operateData.loadMore) {
				try {
					let string = 'this.$root.' + this.operateData.loadMore;
					this.evalFun(string);
				} catch (e) {
					console.log('错误信息：', e);
				}
			}
		},

		// 事件 - 数据列表刷新
		refresh() {
			if (this.operateData.refresh) {
				try {
					this.runRefresh();
					let string = 'this.$root.' + this.operateData.refresh;
					this.evalFun(string);
				} catch (e) {
					console.log('错误信息：', e);
				}
			}
		}
	}
};
</script>

<style scoped></style>

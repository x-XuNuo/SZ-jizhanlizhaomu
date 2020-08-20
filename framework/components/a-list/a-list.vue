<template>
	<view>
		<ux-load-refresh
			v-if="this.data.list"
			ref="loadRefresh"
			:backgroundCover="'ffffff'"
			:pageNo="this.pageInfo.pageNo"
			:totalPageNo="this.pageInfo.totalPageNo"
			:isRefresh="this.propsData.isRefresh == 'true' ? true : false"
			:refreshTime="parseInt(this.propsData.refreshTime)"
			@loadMore="loadMore"
			@refresh="refresh"
		>
			<block slot="content-list">
				<view v-if="this.propsData.mode == 'card'">
					<view v-for="(item, index) in this.data.list" :key="index" class="bg-fff pt15 color999">
						<slot name="a-card-prove"></slot>
						<slot name="a-card">
							<a-card 
								:ref="'aCard' + index" 
								:attributesData="$U.processDataFun(attributes)">
							
							 </a-card>
						</slot>
						<slot name="a-card-below"></slot>
					</view>
				</view>
			</block>
		</ux-load-refresh>
	</view>
</template>


<script>
import aCard from "../../../a-card.js"

export default {
	props: {
		// json配置属性信息
		attributesData: Array | Object
	},
	data() {
		let that = this;
		return {
			// json配置属性信息
			propsData: {},
			// 操作相关属性
			operateData: {},
			// 业务属性
			data: {
				list:''
			},
			// 请求相关属性
			requestData: {},
			//页面列表参数
			pageInfo: {
				pageNo: 0,
				totalPageNo: 1,
				pageSize: 10,
				isRefresh: true
			},
			isLoading: false,
			attributes : {},
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data?this.attributesData.data:{};
		this.operateData = this.attributesData.operateData;
		this.requestData = this.attributesData.requestData;
		this.pageInfo.pageNo = parseInt(this.propsData.pageNo);
		this.pageInfo.totalPageNo = parseInt(this.propsData.totalPageNo);
		this.attributes = aCard.data.attributes
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
			// eval(ev);
		},

		// 网络请求
		request() {
			let that =this
			let requestApi = '';
			if (!this.isLoading && this.requestData.requestMode && this.requestData.remoteApi) {
				if (this.requestData.requestMode == 'POST') {
					requestApi = this.$apis.POST(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else if (this.requestData.requestMode == 'GET') {
					requestApi = this.$apis.GET(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else {
					console.log('请检查参数是否正确！');
				}
				this.isLoading = true;

				requestApi
					.then(res => {
						this.isLoading = false;
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
						} else {
							console.log('success-参数:', this.requestData.success);
						}

						// 调用接口返回成功后，逻辑如下
						if (res && res.data) {
							console.log("129：，",res.data)
							if (that.pageInfo.pageNo > that.pageInfo.totalPageNo) {
								return;
							}
							if (that.pageInfo.isRefresh) {
								that.$set(that.data,'list')
								that.data.list = res.data.list;
								console.log("------ 数据刷新了 ------")
							} else {
								that.data.list = that.data.list.concat(res.data.list);
								console.log("----- 加载了更多数据 ------")
							}

							// 数据累加
							that.pageInfo.totalPageNo = parseInt(res.data.totalPageNo);
							that.pageInfo.pageNo += 1;
						} else {
							console.log('+++++++++ 返回数据异常 ++++++++++');
							return;
						}
						that.pageInfo.isRefresh = false;
					})
					.catch(error => {
						// 初始化数据
						that.pageInfo.isRefresh = false;
						that.isLoading = false;
						console.log('error:', error);
					});
			} else {
				that.pageInfo.isRefresh = false;
				that.isLoading = false;
				console.log('请检查参数是否正确！');
			}
		},

		// 事件 - 加载更多
		loadMore() {
			if (this.operateData.loadMore) {
				this.pageInfo.isRefresh = false;
				this.request();
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
				this.pageInfo.isRefresh = true;
				this.pageInfo.pageNo = 0;
				this.request();
				try {
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

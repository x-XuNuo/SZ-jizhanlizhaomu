<template>
	<view class="listmat">
		<ux-load-refresh
			v-if="this.data.list"
			ref="loadRefresh"
			:backgroundCover="'#ffffff'"
			:pageNo="this.pageInfo.pageNo"
			:totalPageNo="this.pageInfo.totalPageNo"
			:isRefresh="this.propsData.isRefresh == 'true' ? true : false"
			:refreshTime="parseInt(this.propsData.refreshTime)"
			@loadMore="loadMore"
			@refresh="refresh"
		>
			<block slot="content-list">
				<view v-if="this.propsData.mode == 'card'">
					<view v-for="(item, index) in this.data.list" :key="index" class="color999">
							<ax-card
								ref="axCardDefault"
								:dataSource = "item"
								model = "default"
								@cardClick = "cardclick(item.recruitId)"
								@tipsClick = "tipsClick(item)"
							>
							</ax-card>
					</view>
				</view>
				
				<view v-if="this.propsData.mode == 'card-delete'">
					<view v-for="(item, index) in this.data.list" :key="index" class="color999">
						<ax-card
							ref="axCardDEle"
							:dataSource = "item"
							model = "dele"
							@cellDelete = "cellDelete(index)"
						>
						</ax-card>
					</view>
				</view>
				
				<view v-if="this.propsData.mode == 'card-photo'">
					<view v-for="(item, index) in this.data.list" :key="index" class="color999">
						<ax-card
							ref="axCardPhoto"
							:dataSource = "item"
							model = "photo"
						>
						</ax-card>
					</view>
				</view>
				
				<view v-if="this.propsData.mode == 'card-btncard'">
					<view v-for="(item, index) in this.data.list" :key="index">
						<ax-card
							ref="axCardBtncard"
							:dataSource = "item"
							model = "btncard"
						>
						</ax-card>
					</view>
				</view>
				
				<view v-if="this.propsData.mode == 'card-personnel'">
					<view v-for="(item, index) in this.data.list" :key="index">
						<ax-card
							ref="axCardpersonnel"
							:dataSource = "item"
							model = "personnelCard"
						>
						</ax-card>
					</view>
				</view>
				
				<view v-if="this.propsData.mode == 'card-img'">
					<view v-for="(item, index) in this.data.list" :key="index">
							<ax-card
								ref="axCardImg"
								:dataSource = "item"
								model = "img"
							>
							</ax-card>
					</view>
				</view>
				
				<view v-if="this.propsData.mode == 'imageText'">
					<view v-for="(item, index) in this.data.list" :key="index">
						<ax-card
							ref="axCardImgText"
							:dataSource = "item"
							model = "imageText"
						>
						</ax-card>
					</view>
				</view>
			</block>
		</ux-load-refresh>
		
		<a-modal
			ref = "alert"
		>
		</a-modal>
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
			attributes: {}
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData ?  this.attributesData.propsData : {};
		this.data = this.attributesData ? this.attributesData.data : {};
		this.operateData = this.attributesData ? this.attributesData.operateData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.current : {};
		this.requestData = this.attributesData ? this.attributesData.requestData : {};
		this.pageInfo.pageNo = parseInt(this.propsData.pageNo);
		this.pageInfo.totalPageNo = parseInt(this.propsData.totalPageNo);
		this.attributes = aCard.data.attributes;
		//初始化数据
		this.request();;
	},

	methods: {
		//数据接口
		setPropsData(propsData) {
			this.propsData = propsData;
			console.log('propsData:', propsData);
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
							console.log('129：', res.data);
							if (that.pageInfo.pageNo > that.pageInfo.totalPageNo) {
								return;
							}
							if (that.pageInfo.isRefresh) {
								that.$set(that.data, 'list');
								that.data.list = res.data.list;
								this.$PU.register_mounted();
								console.log('------ 数据刷新了 ------');
							} else {
								that.data.list = that.data.list.concat(res.data.list);
								console.log('----- 加载了更多数据 ------');
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
				this.pageInfo.isRefresh = false;
				this.request();
				this.loadOver();
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
		},
		// 列表跳转
		cardclick(index){
			// console.log(index)
			let url = "/pages/recruitment/recruit/information-detail?id=" + index
			uni.navigateTo({
				url: url
			})
		},
		// 模态框关闭
		modalOff(){
			let off = {
				show: 'false',
			}
			this.$nextTick(() => {
				this.$refs.alert.setPropsData(off);
			});
		},
		// 模态框显示
		tipsClick(index){
			let modalPD = {
				show: 'true',
				title : "驳回原因",
				content:"本次聘才申请人数不符合部门招聘计划，请重新申请",
				showConfirmButtom : "true",
				confirmColor:"#fd6703",
				asyncClose:"true",
				maskCloseAble:"true",
			};
			this.$nextTick(() => {
				let modalOD = this.$refs.alert.operateData
				modalOD.confirm = this.modalOff
				// btnOD.click = this.chaxun
				this.$refs.alert.setPropsData(modalPD);
				this.$refs.alert.setOperateData(modalOD);
			});
			console.log("306：",index)
		},
			
		// 删除事件
		cellDelete(index){
			this.data.list.splice(index,1)
		}
	}
};
</script>

<style scoped>
	.listmat{
		background-color: #f5f5f5;
		margin-top: 40upx;
	}
</style>

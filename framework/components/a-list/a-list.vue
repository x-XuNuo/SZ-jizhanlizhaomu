<template>
	<view>
		<ux-load-refresh
			v-if="this.propsData.dataList"
			ref="loadRefresh"
			:backgroundCover="this.propsData.backgroundCover"
			:pageNo="this.propsData.currPage"
			:totalPageNo="this.propsData.totalPage"
			:isRefresh="this.propsData.isRefresh"
			:refreshTime="this.propsData.refreshTime"
			@loadMore="loadMore"
			@refresh="refresh"
		>
		<block slot="content-list">
			
			<view v-if="this.propsData.mode == 'card'">
				
				<view v-for="(item,index) in this.propsData.dataList" :key="index">
					{{ item }}
				</view>
				
				
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
			reqestData: {}
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		this.reqestData = this.attributesData.reqestData;

		console.log('this.propsData:', this.propsData);
		console.log('this.data:', this.data);
		console.log('this.operateData:', this.operateData);
		console.log('this.reqestData:', this.reqestData);
	},

	methods: {
		//数据接口
		setPropsData(val) {
			this.propsData = val;
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
		setRequestData(reqestData) {
			this.reqestData = reqestData;
		},
		
		// 组件内方法
		// 结束单次加载更多
		loadOver(){
			this.$refs.loadRefresh.loadOver();
		},
		
		// 事件触发下拉刷新
		runRefresh(){
			this.$refs.loadRefresh.runRefresh();
		},
		
		// 事件 - 加载更多
		loadMore(){
			if (this.operateData.loadMore) {
				eval('this.$root.' + this.operateData.loadMore);
			}
		},
		
		// 事件 - 数据列表刷新
		refresh(){
			if (this.operateData.refresh) {
				eval('this.$root.' + this.operateData.refresh);
			}
		}
		
	}
};
</script>

<style scoped></style>

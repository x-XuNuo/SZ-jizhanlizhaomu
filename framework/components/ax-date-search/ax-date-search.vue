<template>
	<view class="date-search">
		<!-- <view class="date-search" v-for="(item, index) in pageData" :key="index"> -->
		<!-- :attributesData="$U.processDataFun(item.attributes)" -->
			<a-calendar 
				:attributesData="attributesData"
				:requestParamData="requestParamData">
			</a-calendar>
			<a-button
				:attributesData="attributesData"
				:requestParamData="requestParamData">
			</a-button>
		</view>
	<!-- </view> -->
</template>

<script>
export default {
	name:"ax-date-search",
	props: {
		// json配置属性信息
		attributesData: Array | Object,
		// 请求参数
		requestParamData: Array | Object,
		
	},
	data() {
		return {
			// 请求页面组件JSON
			pages: {},
			// 页面配置信息
			// attributesData: {},
			// 页面组件信息
			pageData: [],
			// 组件数据
			assemblyData:{},
		};
	},
	watch: {},
	computed: {},
	created() {},
	mounted() {
		console.log("attributesData:",this.attributesData);
		// this.init();
	},
	methods: {
		// 组件初始化
		init() {
			let that = this
			this.$U.initPages().then(val => {
				this.pages = decodeURIComponent(val);
				this.attributesData = val.attributes;
				if(val.magicalCoder){
					this.pageData = val.magicalCoder.children;
					this.pageData.forEach(item => {
						if(item.magicalCoder.identifier == "ax-date-search"){
							this.assemblyData = item.attributes
						}
					})
					console.log('this.pageDta:', this.pageData);
				}else{
					console.log("请检查JSON是否正确");
				}
			});
		
		},
	}
};
</script>

</script>

<style>
</style>

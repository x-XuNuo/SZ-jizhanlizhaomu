<template>
	<view>
		<u-wuc-tab
			ref="tabHeight"
			:tab-list="propsData.tabList"
			:tabCur.sync="propsData.tabCur"
			:tab-class=" 'tc ' + propsData.tabClass ? propsData.tabClass : '' "
			:select-class="propsData.selectClass ? propsData.selectClass : '' "
			:textFlex.sync="textFlex"
			:mode="propsData.mode"
			:style="propsData.tabStyle ? propsData.tabStyle : ''"
			:triangleColor="this.propsData.triangleColor"
		></u-wuc-tab>
	</view>
</template>
<script>
export default {
   props: {
   	// json配置属性信息
   	attributesData: Array | Object,
   	// 请求参数
   	requestParamData: Array | Object
   },
   watch: {
   	attributesData(value) {
   		this.propsData = value.propsData;
   		this.data = value.data;
   		this.operateData = value.operateData;
   		this.textFlex = value.propsData.textFlex ? true : false;
   	},
   
   	requestParamData(value) {
   		this.requestParamData = value;
   	}
   },
   data() {
   	return {
   		// json配置属性信息
   		propsData: {},
   		// 操作相关属性
   		operateData: {},
   		// 业务属性
   		data: {},
   		//设置swiper高度
   		height: 0,
   		// swiper-item 高度
   		scrollHeight: 0,
   		// 是否平分
   		textFlex: false
   	};
   },
   
   mounted() {
   	// props参数处理
   	this.propsData = this.attributesData.propsData;
   	this.data = this.attributesData.data;
   	this.operateData = this.attributesData.operateData;
   this.textFlex = this.propsData.textFlex ? true : false;
   
   	console.log('this.propsData:', this.propsData);
   	console.log('this.data:', this.data);
   	console.log('this.operateData:', this.operateData);
   },
   
};
</script>
<style></style>
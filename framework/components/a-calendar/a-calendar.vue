<template>
	<view class="calendar-content">
		
		<view v-if="this.propsData.mode == 'default'">
			<ux-calendar
				ref="calendar"
				:mode="this.propsData.mode"
				:date="this.propsData.date"
				:lunar="this.propsData.lunar == 'true' ? true : false"
				:startDate="this.propsData.startDate"
				:endDate="this.propsData.endDate"
				:range="this.propsData.range == 'true' ? true : false"
				:insert="true"
				:clearDate="this.propsData.clearDate == 'true' ? true : false"
				:selected="this.propsData.selectedList"
				:showMonth="this.propsData.showMonth == 'true' ? true : false"
				@change="change"
				@confirm="confirm"
				@monthSwitch="monthSwitch"
				@close="close"
			/>
		</view>
		
		<view v-if="this.propsData.mode == 'dialog'">
			<view class="x-bc padding15 border-line" @click="openCalendar()">
				<view class="f14">{{ this.propsData.titleText }}</view><ux-icons :type="this.propsData.rightIcon"/>
			</view>
			<ux-calendar
				ref="calendar"
				:mode="this.propsData.mode"
				:date="this.propsData.date"
				:lunar="this.propsData.lunar == 'true' ? true : false"
				:startDate="this.propsData.startDate"
				:endDate="this.propsData.endDate"
				:range="this.propsData.range == 'true' ? true : false"
				:insert="false"
				:clearDate="this.propsData.clearDate == 'true' ? true : false"
				:selected="this.propsData.selectedList"
				:showMonth="this.propsData.showMonth == 'true' ? true : false"
				@change="change"
				@confirm="confirm"
				@monthSwitch="monthSwitch"
				@close="close"
			/>
		</view>
		
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
			this.current = parseInt(value.propsData.current);
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
			data: {}
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData ?  this.attributesData.propsData : {};
		this.data = this.attributesData ? this.attributesData.data : {};
		this.operateData = this.attributesData ? this.attributesData.operateData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.current : {};

		console.log('this.propsData:', this.propsData);
		console.log('this.data:', this.data);
		console.log('this.operateData:', this.operateData);
	},
	methods: {
		// 日期改变，insert :ture 时生效
		change(e){
			if(this.operateData.change){
				console.log(this.operateData.change);
			}else{
				console.log("change数据有误");
			}
		},
		
		// 确认选择insert :false 时生效
		confirm(e){
			// console.log("e:",e);
			if(this.operateData.confirm){
				eval(this.$U.htmlDecodeByRegExp(this.operateData.confirm));
			}
		},
		
		// 切换月份时触发
		monthSwitch(e){
			if(this.operateData.monthSwitch){
				eval(this.$U.htmlDecodeByRegExp(this.operateData.monthSwitch));
			}
		},
		setPropsData(val){
			this.propsData = val
		},
		setOperateData(val){
			this.operateData = val
		},
		// 关闭日历弹窗触发
		close(){
			if(this.operateData.close){
				eval(this.$U.htmlDecodeByRegExp(this.operateData.close));
			}
		},
		
		// mode 为dialog时，触发事件，弹窗展开
		openCalendar(){
			this.$refs.calendar.open();
		},
	}
}
</script>

<style></style>

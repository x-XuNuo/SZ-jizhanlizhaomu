<template>
	<view class="parent" @click="demoClick">
		<view class="text-area">parent component</view>
		<!-- 自定义组件 -->
		<a-frame ref="aFrame" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			axTemplate: {}
		};
	},

	onShow() {
		let that = this
		console.log('this.$refs.aFrame:', that.$refs.aFrame);

		setTimeout(() => {
			that.axTemplate = that.$refs.aFrame.$refs.axTemplate0;
			console.log('axTemplate:', that.axTemplate);
		}, 900);
	},
	methods: {
		// 测试父组件传递事件
		demoClick() {
			//设置请求回调

			var opdata = {
				linktype: '',
				linkrul: '',
				click: 'myCustomMethod()'
			};
			console.log("axTemplate:",this.$refs.aFrame.$refs.axTemplate0);
			this.$refs.aFrame.$refs.axTemplate0[0].setRequestData({ linkurl: 'https://uniapp.dcloud.io/api/request/request.md?timestamp=1587467727771', param: 'http://www.baidu.com' });

			// this.$refs.aFrame.$refs.axTemplate0[0].setOperateData(opdata);

			// this.$refs.aFrame.$refs.axTemplate0[0].setData({});

			//
		},
		// 父节点定义的函数，进行回调
		myCustomMethod() {
			console.log('父容器提供的函数回调 ');
		}
	}
};
</script>

<style></style>

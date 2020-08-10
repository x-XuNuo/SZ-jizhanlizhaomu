<template>
	<view class="example-body" v-if="propsData.cardList">
		<view v-for="(item, index) in propsData.cardList" :key="index" class="example-box">
			<a-card :title="item.title" :is-shadow="item.shadow ? true : false" :note="item.note" :extra="item.extra" :thumbnail="item.thumbnail" @click="clickCard(index)">
				<slot name="body">
					<text class="content-box-text">{{ item.content }}</text>
				</slot>
			</a-card>
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
	created() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;

		// console.log("this.propsData:",this.propsData);
		// console.log("this.data:",this.data);
		// console.log("this.operateData:",this.operateData);
	},
	mounted() {},
	methods: {
		clickCard(index) {
			if (this.operateData.click) {
				eval(this.operateData.click);
			}

			let coverParam = this.data ? '?' + this.$U.convertObj(this.data.jointParam) : '';
			if (this.operateData.linkType == "0") {
				this.$R.push(this.operateData.link + coverParam);
				console.log('url:', this.operateData.link + coverParam);
			} else {
				this.$R.jumpLink(this.operateData.link + coverParam);
			}
		}
	}
};
</script>
<style>
.example-body {
	flex-direction: column;
	padding: 30rpx;
	background-color: #ffffff;
}
</style>

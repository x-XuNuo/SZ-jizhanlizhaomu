<template>
	<view class="example-body" v-if="propsData.cardList">
		<view v-for="(item, index) in propsData.cardList" :key="index" class="example-box">
			<ux-card :title="item.title" :is-shadow="item.shadow == 'true' ? true : false" :note="item.note" :extra="item.extra" :thumbnail="item.thumbnail" @click="clickCardFun(index)">
				<slot name="body">
					<text class="content-box-text">{{ item.content }}</text>
				</slot>
			</ux-card>
			
		</view>
	</view>
</template>
<script>
export default {
	name:"a-card-list",
	props: {
		// json配置属性信息
		attributesData: Array | Object,
		// 请求参数
		requestParamData: Array | Object
	},
	watch: {
		attributesData(value) {
			this.propsData = value.propsData || '';
			this.data = value.data || '';
			this.operateData = value.operateData || '';
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
			// 依据propsData中的type从data取出的值
			dataList: {},
			// 依据propsData中的type从operateData取出的值
			operateDataList: {},
		};
	},
	created() {
		// props参数处理
		if(this.attributesData){
			this.propsData = this.attributesData.propsData || '';
			this.data = this.attributesData.data || '';
			this.operateData = this.attributesData.operateData || '';
		}

		console.log("this.propsData:",this.propsData);
		console.log("this.data:",this.data);
		console.log("this.operateData:",this.operateData);
	},
	mounted() {},
	methods: {
		clickCardFun(index) {
			console.log("index:",index);
			if (this.operateData.click) {
				eval(this.operateData.click);
			}

			// let coverParam = this.data ? '?' + this.$U.convertObj(this.data.jointParam) : '';
			// if (this.operateData.linkType == "0") {
			// 	this.$R.push(this.operateData.link + coverParam);
			// 	console.log('url:', this.operateData.link + coverParam);
			// } else if (this.operateData.linkType == "1") {
			// 	this.$R.jumpLink(this.operateData.link + coverParam);
			// 	console.log('jumpLink:', this.operateData.link + coverParam);
			// }
			let coverParam = '';
			if (this.propsData.cardList[index].type) {
				let a_type = this.propsData.cardList[index].type;
				this.operateDataList = this.operateData.list[a_type];
				
				if(this.data.list){
					this.dataList = this.data.list[a_type];
					coverParam = this.dataList ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';
				}
				
				if (this.operateData.click) {
					eval(this.operateData.click);
				}
				if (this.operateDataList.linkType == "0") {
					this.$R.push(this.operateDataList.link + coverParam);
					// console.log('url:', this.operateDataList.link + coverParam);
					
				} else if (this.operateDataList.linkType == "1") {
					this.$R.jumpLink(this.operateDataList.link + coverParam);
					// console.log('link:', this.operateDataList.link + coverParam);
				}
			} else {
				console.log('缺少参数-type');
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

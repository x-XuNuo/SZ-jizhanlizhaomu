<template>
	<view v-if="propsData.columnsCardList">
		<view v-for="(item, index) in this.propsData.columnsCardList" :key="index">
			<view v-if="index" class="line-common-inner"></view>
			<view class="bg-fff container curriculum pr15 pl15">
				<view class="title f15 font-weightbold" v-if="item.sortTitleText">{{ item.sortTitleText }}</view>
				<view class="list">
					<view class="list-item" v-for="(item2, index2) in item.list" :key="index2" @click="imgClick(index, item, index2, item2)">
						<view class="list-img">
							<view class="free tc pa f10">
								<view v-if="item2.badge">
									<text :class="'txt fs10 ' + item2.badgeClass">{{ item2.badge }}</text>
								</view>
							</view>
							<view class="bg-img"><image v-if="item2.img" :src="item2.img" alt=""></image></view>

							<image v-if="!item2.img" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt=""></image>
							<view class="list-text" v-if="item2.subTitleText">{{ item2.subTitleText }}</view>
						</view>
						<view class="name" v-if="item2.titleText">{{ item2.titleText }}</view>
					</view>
				</view>
			</view>
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
			data: {},
			// 依据propsData中的type从data取出的值
			dataList: {},
			// 依据propsData中的type从operateData取出的值
			operateDataList: {}
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;

		// console.log('this.propsData:', this.propsData);
		// console.log('this.data:', this.data);
		// console.log('this.operateData:', this.operateData);
	},
	methods: {
		imgClick(cardIndex, cardItem, listIndex, listItem) {
			console.log('columnsCardList-位置:' + cardIndex);
			console.log('columnsCardList-内容:', cardItem);
			console.log('columnsCardList > list-位置:' + listIndex);
			console.log('columnsCardList > list-内容:', listItem);

			if (listItem.type) {
				this.dataList = this.data.list[listItem.type];
				this.operateDataList = this.operateData.list[listItem.type];
				let coverParam = this.dataList ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';

				if (this.operateData.click) {
					eval(this.operateData.click);
				}
				if (this.operateDataList.linkType == "0") {
					this.$R.push(operateDataList.link + coverParam);
					// console.log('url:', this.operateDataList.link + coverParam);
				} else if (this.operateDataList.linkType == "1")  {
					this.$R.jumpLink(this.operateDataList.link + coverParam);
					// console.log("link:",this.operateDataList.link + coverParam);
				}
			} else {
				console.log('缺少参数-type');
			}
		}
	}
};
</script>

<style scope>
.line-common-inner {
	background: #f0eff5;
	height: 20upx;
	width: 100%;
}
.curriculum .title {
	color: #333;
	text-shadow: 0px 0px #333;
}
.container .title {
	height: 80upx;
	line-height: 80upx;
	position: relative;
	display: flex;
	justify-content: space-between;
}
.container .title image {
	width: 16upx;
	height: 24upx;
	margin-left: 6upx;
	/* 		vertical-align:middle; */
}

.list {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.list-item {
	width: 48%;
	margin-bottom: 20upx;
}
.list-item .list-img {
	position: relative;
}
.list-item .list-img .list-text {
	position: absolute;
	width: 100%;
	bottom: 0;
	font-size: 24upx;
	color: #f5f5f5;
	padding-left: 10upx;
	height: 50upx;
	line-height: 50upx;
	box-sizing: border-box;
	background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
	border-radius: 0 0 4px 4px;
}
.list-item image {
	display: block;
	width: 100%;
	height: 194upx;
	border-radius: 4px;
}
.list-item .name {
	margin-top: 10upx;
	color: #333;
	font-size: 28upx;
	line-height: 1.4;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}
.txt {
	display: block;
	width: 84upx;
	height: 40upx;
	line-height: 40upx;
	text-align: center;
	box-sizing: border-box;
	color: #ffffff;
	border: 1px solid;
	border-top-right-radius: 4px;
}
.free {
	top: 0;
	right: 0;
	z-index: 1;
}
</style>

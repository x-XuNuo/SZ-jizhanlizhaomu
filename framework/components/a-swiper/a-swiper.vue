<template>
	<view class="content" v-if="propsData.swiperList">
		<view v-if="propsData.swiperMode == 'image'">
			<ux-swiper-dot :info="propsData.swiperList" :current="current" :mode="propsData.mode" :dotsStyles="propsData.dotsStylesList">
				<block slot="swiper">
					<swiper
						class="swiper-box"
						:autoplay="propsData.autoplay == 'true' ? true : false"
						:circular="propsData.circular == 'true' ? true : false"
						:duration="parseInt(propsData.duration)"
						:interval="parseInt(propsData.interval)"
						@change="change"
					>
						<swiper-item v-for="(item, index) in propsData.swiperList" :key="index" @click="clickFun(index)">
							<view class="swiper-item"><image class="swiper-image" :src="item.images" /></view>
						</swiper-item>
					</swiper>
				</block>
			</ux-swiper-dot>
		</view>

		<view v-if="propsData.swiperMode == 'text'" class="pl15 pr15 x-c">
			<view class="pr5">
				<image v-if="propsData.leftIcon" class="icon-box" :src="propsData.leftIcon  || ''"></image>
				<view v-if="!propsData.leftIcon && propsData.leftText" class="f14 text-nowrap">{{ propsData.leftText || '' }}</view>
			</view>
			<ux-mosowe-swiper
				:current="current"
				:autoplay="propsData.autoplay == 'true' ? true : false"
				:circular="propsData.circular == 'true' ? true : false"
				:duration="parseInt(propsData.duration)"
				:interval="parseInt(propsData.interval)"
				:lists="propsData.swiperList"
				:touchable=false
				:height="80"
				textKey="title"
				swiperType="text"
			></ux-mosowe-swiper>
			<view class="pl5" @click="rightTextClickFun">
				<ux-icons v-if="propsData.rightIcon" class="icon-box" :type="propsData.rightIcon"></ux-icons>
				<view v-if="!propsData.rightIcon && propsData.rightText" class="f14 text-nowrap">{{ propsData.rightText || '' }}</view>
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
			operateDataList: {},
			// 当前页
			current: 0
		};
	},
	onLoad() {},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		this.current = parseInt(this.propsData.current);

		// console.log('this.propsData:', this.propsData);
		// console.log('this.data:', this.data);
		// console.log('this.operateData:', this.operateData);
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
			if (this.operateData.change) {
				eval(this.operateData.change);
			}
		},
		clickFun(index) {
			// swiperMode 为 swiper
			if (this.propsData.swiperList[index].type) {
				let a_type = this.propsData.swiperList[index].type;
				this.dataList = this.data.list[a_type];
				this.operateDataList = this.operateData.list[a_type];
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
		},
		rightTextClickFun(){
			// swiperMode 为text
			if(this.propsData.swiperMode == "text" && this.propsData.type ){
				this.dataList = this.data.list[this.propsData.type];
				this.operateDataList = this.operateData.list[this.propsData.type];
				let coverParam = this.dataList ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';
				if(this.operateData.rightTextClick){
					eval(this.operateData.rightTextClick);
				}
				
				if(this.operateData.list.linkType == "0"){
					this.$R.push(operateDataList.link + coverParam);
					// console.log('url:', this.operateDataList.link + coverParam);
				}else if(this.operateData.list.linkType == "1") {
					this.$R.jumpLink(this.operateDataList.link + coverParam);
					// console.log("link:",this.operateDataList.link + coverParam);
				}
				
			}else{
				console.log('a-swiper/rightTextClick缺少参数-type');
			}
		}
	}
};
</script>

<style scoped>
.swiper-box {
	/* height:100%; */
	height: 400upx;
}
.swiper-item {
	height: 100%;
}
.swiper-image {
	width: 100%;
	height: 100%;
}

</style>

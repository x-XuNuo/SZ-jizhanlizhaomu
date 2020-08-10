<template>
	<view class="pr15 pl15" v-if="propsData.columnList">
		<view v-for="(item, index) in propsData.columnList" :key="index" class="pt10 pb10 courseware-box x-c" @click="clickList(index)">
			<view class="mr15 order-box x-c">
				<view><image :src="item.icon ? item.icon : '@/framework/common/assets/image/common/userIcon.png'" mode="" style="width: 50upx; height: 50upx;"></image></view>
			</view>

			<view class="title-box  x-f f12">
				<view class="width100">
					<view class="mb5">{{ item.titleText }}</view>
					<view class="x-start text-color97">
						<view>{{ item.subTitleText }}</view>
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
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		// console.log("this.propsData:",this.propsData);
		// console.log("this.data:",this.data);
		// console.log("this.operateData:",this.operateData);
	},

	methods: {
		clickList(index) {
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

<style scoped>
.courseware-box {
	height: 100upx;
	border-bottom: 1px solid rgba(238, 238, 238, 1);
}
.order-box {
	width: 60upx;
	height: 100%;
}
.title-box {
	width: 100%;
	height: 100%;
}
.tag {
	padding: 0 10upx;
	margin-right: 20upx;
	text-align: center;
	border: 1px solid;
	border-radius: 4upx;
}
.tag-audition {
	border-color: rgba(0, 210, 61, 1);
	color: #00d23d;
}
.tag-type {
	border-color: rgba(255, 162, 129, 1);
	color: #ffa281;
}
.icon-box {
	width: 30upx;
	height: 30upx;
}
.watch-box {
	width: 80upx;
	height: 100%;
}
.circle-box {
	width: 10upx;
	height: 10upx;
	border: 1px solid #b8b8b8;
	border-radius: 50%;
}
</style>

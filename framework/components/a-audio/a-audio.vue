<template>
	<!-- 头条资讯音频 -->
	<view>
		<!-- 音频 -->
		<view class="tc text-center padding10" v-if="propsData.src">
			<view class="audio-border x-bc">
				<view class="x-f audio-control-wrapper" @click="audioaction">
					<view class="pl10 pr10 border-right1">
						<!-- <image class="img-playaudio" :src="isplay ? '/static/playingaudio.png' : '/static/playaudio.png'"></image> -->

						<view class="img-playaudio audio-control audio-control-switch" :style="{ color: propsData.color }">{{ isplay ? '&#xe612;' : '&#xe865;' }}</view>
					</view>

					<view class="pl10"><image class="img-audioimg" src="@/framework/common/assets/image/a-audio/audioImg.png"></image></view>
				</view>
				<view style="flex:2;">
					<slider :value="sliderValue" @change="voiceChange" :activeColor="propsData.color" backgroundColor="#d0d0d0" block-color="#e9e9e9" block-size="14" />
				</view>
				<view class="f14 color999 padding-right10">{{ voiceTime }}</view>
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
			this.createInnerAudio();
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
			// 支持音频类型
			audioFile: ['m4a', 'wav', 'mp3', 'aac'],
			isplay: false,
			voiceTime: '00:00s',
			sliderValue: 0,
			innerAudioContext: ''
		};
	},
	onLoad() {},

	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		console.log('propsData:', this.propsData);
		console.log('data:', this.data);
		console.log('operateData:', this.operateData);
		this.createInnerAudio();
	},

	destroyed() {
		this.deleteInnerAudio();
	},

	methods: {
		// 开始播放音频
		audioaction() {
			if (!this.isplay) {
				this.innerAudioContext.play();
			} else {
				this.innerAudioContext.pause();
			}
			this.isplay = !this.isplay;
		},
		// 音频组件初始化
		createInnerAudio() {
			var that = this;
			if (!this.innerAudioContext) {
				this.innerAudioContext = uni.createInnerAudioContext();
			} else {
				this.innerAudioContext.pause();
			}
			this.innerAudioContext.autoplay = this.propsData.autoplay == 'true' ? true : false;
			this.innerAudioContext.loop = this.propsData.loop == 'true' ? true : false;
			this.innerAudioContext.src = this.propsData.src;
			// this.innerAudioContext.src ='http://1400150494.vod2.myqcloud.com/8bd7c83bvodgzp1400150494/657133de5285890794939178218/f0.mp3';
			setTimeout(() => {
				that.voiceTime = this.formatSeconds(that.innerAudioContext.duration) == '0NaNs' ? '' : that.formatSeconds(that.innerAudioContext.duration);
			}, 800);
			this.innerAudioContext.onEnded(function() {
				that.isplay = false;
			});
			this.innerAudioContext.onTimeUpdate(function() {
				that.voiceTime = that.formatSeconds(that.innerAudioContext.currentTime);
				that.sliderValue = (that.innerAudioContext.currentTime / that.innerAudioContext.duration) * 100;
			});
		},

		// 音频组件销毁
		deleteInnerAudio() {
			if (this.innerAudioContext) {
				this.innerAudioContext.pause();
				this.innerAudioContext.destroy();
			}
		},

		//  音频改变
		voiceChange(e) {
			if (this.innerAudioContext.duration) {
				this.innerAudioContext.seek((e.detail.value / 100) * this.innerAudioContext.duration);
			} else {
			}
		},

		//  格式化时间
		formatSeconds(value) {
			var secondTime = parseInt(value); // 秒
			var minuteTime = 0; // 分
			var hourTime = 0; // 小时
			if (secondTime > 60) {
				//如果秒数大于60，将秒数转换成整数
				//获取分钟，除以60取整数，得到整数分钟
				minuteTime = parseInt(secondTime / 60);
				//获取秒数，秒数取佘，得到整数秒数
				secondTime = parseInt(secondTime % 60);
				//如果分钟大于60，将分钟转换成小时
				if (minuteTime > 60) {
					//获取小时，获取分钟除以60，得到整数小时
					hourTime = parseInt(minuteTime / 60);
					//获取小时后取佘的分，获取分钟除以60取佘的分
					minuteTime = parseInt(minuteTime % 60);
				}
			}
			var result = '' + (parseInt(secondTime) > 9 ? parseInt(secondTime) : '0' + parseInt(secondTime)) + 's';

			if (minuteTime > 0) {
				if (minuteTime < 10) {
					result = '0' + parseInt(minuteTime) + ':' + result;
				} else {
					result = '' + parseInt(minuteTime) + ':' + result;
				}
			}
			if (hourTime > 0) {
				if (hourTime < 10) {
					result = '0' + parseInt(hourTime) + ':' + result;
				} else {
					result = '' + parseInt(hourTime) + ':' + result;
				}
			}

			if (result != '0NaNs' && !minuteTime) {
				// console.log(result);
				result = '00:' + result;
			}

			return result;
			// console.log(result,'result')
		}
	}
};
</script>

<style>
@font-face {
	font-family: 'icon';
	src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot');
	src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff') format('woff'), url('//at.alicdn.com/t/font_1104838_fxzimc34xw.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1104838_fxzimc34xw.svg#iconfont') format('svg');
}
.audio-control-wrapper {
	font-family: 'icon' !important;
}
</style>
<style scoped>
.audio-control {
	font-size: 32upx;
	line-height: 1;
	/* padding: 16upx; */
}
.audio-control-switch {
	font-size: 28upx;
	/* margin: 0 80upx; */
}
.img-icon {
	width: 60upx;
	height: 60upx;
	border-radius: 50%;
}

.img-playaudio {
	width: 22upx;
	height: 28upx;
	top: 4upx;
}

.img-audioimg {
	width: 20upx;
	height: 30upx;
	top: 6upx;
	left: 10upx;
}

.uni-audio-default {
	border-radius: 20upx !important;
}

.uni-audio-right {
	border-radius: 20upx !important;
}

.padding-left22 {
	padding-left: 44upx;
}

.padding-right10 {
	padding-right: 20upx;
}

.color999 {
	color: #999999;
}

.audio-border {
	height: 82upx;
	line-height: 82upx;
	background: rgba(255, 255, 255, 1);
	box-shadow: -2px 5px 6px 2px rgba(0, 0, 0, 0.05);
	border-radius: 100px;
	border: 1px solid rgba(238, 236, 236, 1);
}

.border-right1 {
	border-right: 1px solid #dadada;
}
</style>

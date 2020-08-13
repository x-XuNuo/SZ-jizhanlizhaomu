<template>
	<scroll-view class="wuc-tab" :class="tabClass" :style="tabStyle" scroll-with-animation scroll-x :scroll-left="scrollLeft">
		<div class="left-incon-right" v-if="!textFlex">
			<div
				class="wuc-tab-item"
				:class="[index === tabCur && mode == 'default' ? selectClass + ' cur ' : '', index === tabCur && mode == 'triangle' ? selectClass + ' triangle ' : '']"
				v-for="(item, index) in tabList"
				:key="index"
				:id="index"
				@tap="tabSelect(index, $event)"
			>
				<text :class="item.icon"></text>
				<span class="f14">{{ item.name }}</span>
				<span v-if="index === tabCur && mode == 'triangle'" class="triangle-box" :style="'border-bottom-color:' + triangleColor"></span>
			</div>
		</div>

		<div class="flex text-center" v-if="textFlex">
			<div
				v-if="textFlexIds"
				class="wuc-tab-item flex-sub"
				:class="[item.id === tabCur && mode == 'default' ? selectClass + ' cur ' : '', item.id === tabCur && mode == 'triangle' ? selectClass + ' triangle ' : '']"
				v-for="(item, index) in tabList"
				:key="index"
				:id="item.id"
				@tap="tabSelect(item.id, $event)"
			>
				<text :class="item.icon"></text>
				<span class="f14">{{ item.name }}</span>
				<span v-if="item.id === tabCur && mode == 'triangle'" class="triangle-box" :style="'border-bottom-color:' + triangleColor"></span>
			</div>
			<div
				v-if="!textFlexIds"
				class="wuc-tab-item flex-sub"
				:class="[index === tabCur && mode == 'default' ? selectClass + ' cur ' : '', index === tabCur && mode == 'triangle' ? selectClass + ' triangle ' : '']"
				v-for="(item, index) in tabList"
				:key="index"
				:id="index"
				@tap="tabSelect(index, $event)"
			>
				<text :class="item.icon"></text>
				<span class="f14">{{ item.name }}</span>
				<span v-if="index === tabCur && mode == 'triangle'" class="triangle-box" :style="'border-bottom-color:' + triangleColor"></span>
			</div>
		</div>
	</scroll-view>
</template>
<script>
export default {
	name: 'a-crosswise-tab',
	data() {
		return {
			scrollLeftData: 0
		};
	},
	props: {
		tabList: {
			type: Array,
			default() {
				return [];
			}
		},
		tabCur: {
			type: Number || String,
			default() {
				return 0;
			}
		},
		tabClass: {
			type: String,
			default() {
				return '';
			}
		},
		tabStyle: {
			type: String,
			default() {
				return '';
			}
		},
		textFlex: {
			type: Boolean || String,
			default() {
				return false;
			}
		},
		textFlexIds: {
			type: Boolean || String,
			default() {
				return false;
			}
		},
		selectClass: {
			type: String,
			default() {
				return 'text-blue';
			}
		},
		mode: {
			type: String,
			default() {
				return 'default';
			}
		},
		triangleColor:{
			type:String,
			default() {
				return '#007aff';
			}
		}
	},
	methods: {
		tabSelect(index, e) {
			// console.log(this.$props.tabList);
			// console.log(index);
			// console.log(e);
			if (this.currentTab === index) return false;
			this.$emit('update:tabCur', index);
			this.$emit('change', index);
			this.scrollLeftData = e.currentTarget.offsetLeft;
		}
	},
	computed: {
		scrollLeft() {
			//return (this.scrollLeftData - 1) * 65;
			return this.scrollLeftData - 80;
		}
	}
};
</script>
<style>
div,
scroll-view,
swiper {
	box-sizing: border-box;
}
/*  #ifdef H5  */
scroll-view ::-webkit-scrollbar {
	display: none;
}
/*  #endif  */
.left-incon-right {
	border: 1px solid rgba(238, 238, 238, 1);
}
.wuc-tab {
	white-space: nowrap;
}
.wuc-tab-item {
	height: 80upx;
	display: inline-block;
	line-height: 80upx;
	/*  margin: 0 10upx; */
	padding: 0 60upx;
}

.wuc-tab-item.cur {
	border-bottom: 4upx solid;
}

.wuc-tab-item.triangle {
	position: relative;
}

.triangle .triangle-box {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	border: 6px solid transparent;
	border-bottom-color: #007aff;
	width: 0;
	height: 0;
}

.wuc-tab-item.cur span,
.wuc-tab-item.triangle span {
	font-size: 30upx;
}

.wuc-tab.fixed {
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 1024;
	box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
}

.flex {
	display: flex;
}
.text-center {
	text-align: center;
}
.flex-sub {
	flex: 1;
}
.text-blue {
	color: #ff0000;
}
.text-white {
	color: #ffffff;
}
.bg-white {
	background-color: #ffffff;
}
.bg-blue {
	background-color: #0081ff;
}
.text-orange {
	color: #5094f9;
	font-weight: bold;
}

.text-xl {
	font-size: 36upx;
}
.font16 {
	font-size: 32upx;
}
</style>

<template>
	<view ref="QS-SwiperGrid" class="QS-SwiperGrid">
		<block v-if="propsData.mode == 'swiper'">
			<swiper
				@animationfinish="swiperChange"
				:style="{ height: swiperHieght + 'px' }"
			>
				<swiper-item v-for="(item, index) in propsData.iconList" :key="index" class="pt10 pb10">
					<!-- :props="props" -->
					<!-- :grids="item" -->
					
					<u-qs-grid
						ref="QS_Grid"
						:grids="item"
						:hideText="propsData.hideText"
						:gridWidth="getWidth"
						:padding="propsData.padding"
						:iconSizeScale="propsData.iconSizeScale"
						:gridTextColor="propsData.gridTextColor"
						:gridTextSize="propsData.gridTextSize + 'upx'"
						:gridTextMarginTop="propsData.gridTextMarginTop + 'px'"
						gridOutline="none"
						:gridPadding="propsData.gridPadding + 'upx'"
						iconBorderRadius="50%"
						:iconHeight="propsData.iconHeight"
						:iconWidth="propsData.iconWidth"
						:gridPaddingTop="propsData.gridPaddingTop"
						:gridPaddingBottom="propsData.gridPaddingBottom"
						:gridPaddingLeft="propsData.gridPaddingLeft"
						:gridPaddingRight="propsData.gridPaddingRight"
						@_click="_click($event, index)"
					></u-qs-grid>
				</swiper-item>
			</swiper>
		</block>
		<block v-if="propsData.mode == 'default'">
			<!-- :props="props" -->
			<u-qs-grid
				:grids="propsData.iconList"
				:hideText="propsData.hideText"
				:gridWidth="getWidth"
				:padding="propsData.padding"
				:iconSizeScale="propsData.iconSizeScale"
				:gridTextColor="propsData.gridTextColor"
				:gridTextSize="propsData.gridTextSize + 'upx'"
				:gridTextMarginTop="propsData.gridTextMarginTop + 'px'"
				gridOutline="none"
				:gridPadding="propsData.gridPadding + 'upx'"
				:iconBorderRadius="propsData.iconBorderRadius"
				:iconHeight="propsData.iconHeight"
				:iconWidth="propsData.iconWidth"
				:gridPaddingTop="propsData.gridPaddingTop"
				:gridPaddingBottom="propsData.gridPaddingBottom"
				:gridPaddingLeft="propsData.gridPaddingLeft"
				:gridPaddingRight="propsData.gridPaddingRight"
				@_click="_click($event)"
			></u-qs-grid>
		</block>
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
	computed: {
		getWidth() {
			console.log('QS-Grids: componentWidth: ' + this.componentWidth);
			console.log('QS-Grids: padding: ' + this.propsData.padding);
			console.log('QS-Grids: row: ' + this.propsData.row);
			const a = (this.componentWidth - Number(this.propsData.padding) * 2) / this.propsData.row;
			console.log('QS-Grids: 单项宽度:' + a);
			return a;
		}
	},
	watch: {
		attributesData(value) {
			this.propsData = value.propsData;
			this.data = value.data;
			this.operateData = value.operateData;
		},

		requestParamData(value) {
			this.requestParamData = value;
		},

		gridsData(n) {
			this.setData(n);
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
			// 当前组件需要参数
			id_pre: 'QS-Grids_',
			grids: [],
			singleLenth: 0,
			componentWidth: 0,
			swiperHieght: 100,
			swiperCurrent: this.defCurrent
		};
	},
	onLoad() {},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;

		// console.log('this.propsData:', this.propsData);
		// console.log('this.data:', this.data);
		// console.log('this.operateData:', this.operateData);

		// #ifndef APP-NVUE
		this.countInfo();
		// #endif
		this.setData(this.gridsData);
	},
	methods: {
		swiperChange({ detail: { current } }) {
			this.swiperCurrent = current;
		},
		countInfo() {
			// #ifdef APP-NVUE
			dom.getComponentRect(this.$refs['QS-SwiperGrid'], option => {
				console.log('获取QS-SwiperGrid布局信息成功: ' + JSON.stringify(option));
				if (option.size) this.componentWidth = option.size.width;
				// this.$nextTick(()=>{
				this.countGridInfo();
				// })
			});
			// #endif
			// #ifndef APP-NVUE
			let view;
			// #ifndef MP-BAIDU || MP-ALIPAY
			view = uni.createSelectorQuery().in(this);
			// #endif
			// #ifdef MP-BAIDU || MP-ALIPAY
			view = uni.createSelectorQuery();
			// #endif
			view.select('.QS-SwiperGrid').fields({
				size: true
			});
			view.exec(res => {
				// console.log('获取节点信息成功:' + JSON.stringify(res))
				if (res[0] && res[0].width) {
					this.componentWidth = res[0].width;
					// this.$nextTick(()=>{
					this.countGridInfo();
					// })
				} else {
					console.log('获取节点信息失败!!');
				}
			});
			// #endif
		},
		countGridInfo() {
			if (this.mode === 'swiper') {
				this.$nextTick(() => {
					setTimeout(() => {
						const refs = this.$refs.QS_Grid;
						if (!refs) return;
						const ref = refs[0];
						if (!ref) return;
						const fn = ref.countGridInfo;
						if (!fn || typeof fn !== 'function') return;
						fn(res => {
							this.swiperHieght = res.height;
							// console.log("this.swiperHieght:",this.swiperHieght);
						});
					}, 100);
				});
			}
		},
		setData(arr) {
			this.setGrids(arr);
		},
		setGrids(arr) {
			let newArr = [];

			if (this.mode === 'swiper') {
				const singleLenth = Number(this.row) * Number(this.col);
				if (singleLenth < 0) {
					console.log('行数与列数不正确');
					return;
				}
				this.singleLenth = singleLenth;

				const totalPage = Math.ceil(arr.length / singleLenth);

				for (let i = 0; i < totalPage; i++) {
					const page = [];

					for (let j = 0; j < singleLenth; j++) {
						const c = i * singleLenth + j;
						if (c > arr.length - 1) break;
						page.push(arr[c]);
					}
					newArr.push(page);
				}
			} else {
				newArr = arr;
			}

			this.grids = newArr;
			this.$nextTick(() => {
				this.countInfo();
				// this.countGridInfo();
			});
		},
		_click(index, pageNum) {
			// console.log("index:",index);
			// console.log("pageNum:",pageNum);

			let count;
			if (pageNum !== undefined) {
				count = this.singleLenth * pageNum + index;
			} else {
				count = index;
			}

			if (this.propsData.mode == 'swiper') {
				if (this.propsData.iconList[pageNum][0].type) {
					let a_type = this.propsData.iconList[pageNum][0].type;
					this.dataList = this.data.list[a_type];
					this.operateDataList = this.operateData.list[a_type];
					let coverParam = this.dataList ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';

					if (this.operateData.click) {
						eval(this.operateData.click);
					}
					if (!this.operateDataList.linkType) {
						this.$R.push(operateDataList.link + coverParam);
						// console.log('url:', this.operateDataList.link + coverParam);
					} else {
						this.$R.jumpLink(this.operateDataList.link + coverParam);
						// console.log("link:",this.operateDataList.link + coverParam);
					}
				} else {
					console.log('缺少参数-type');
				}
			} else {
				// 默认mode 为 default时

				if (this.propsData.iconList[index].type) {
					let a_type = this.propsData.iconList[index].type;
					this.dataList = this.data.list[a_type];
					this.operateDataList = this.operateData.list[a_type];
					let coverParam = this.dataList ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';

					if (this.operateData.click) {
						eval(this.operateData.click);
					}
					if (this.operateDataList.linkType == '0') {
						this.$R.push(this.operateDataList.link + coverParam);
						// console.log('url:', this.operateDataList.link + coverParam);
					} else {
						this.$R.jumpLink(this.operateDataList.link + coverParam);
						// console.log('link:', this.operateDataList.link + coverParam);
					}
				} else {
					console.log('缺少参数-type');
				}
			}
		}
	}
};
</script>

<style scoped>
/* #ifndef APP-NVUE */
@import url('./u-qs-grid/css/u-qs-grid.css');

/* #endif */
.QS-SwiperGrid {
	/* #ifdef APP-NVUE */
	/* flex: 1; */
	/* #endif */
	/* #ifndef APP-NVUE */
	width: 100%;
	/* #endif */
	position: relative;
}
</style>

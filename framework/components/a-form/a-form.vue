<template>
	<view class="height100 pb50">
		<view v-if="formDataJson && formDataJson.propsData.currentPage == index" v-for="(item, index) in formDataJson.propsData.pages" :key="index">
			<view v-for="(item2, index2) in item.columns" :key="index2">
				<!-- 栏目 -->
				<view
					v-if="item2.columnsInfo"
					:style="{ 'background-color': item2.columnsInfo.columnBgColor, color: item2.columnsInfo.columnColor }"
					@click="item2.columnsInfo.isShowForm = !item2.columnsInfo.isShowForm"
				>
					<view class="x-bc pt10 pb10 mr15 ml15">
						<view class="x-start-center width80 one-t">
							<u-icon :name="item2.columnsInfo.columnIcon" :color="item2.columnsInfo.columnColor" size="40" class="mr5"></u-icon>
							<text>{{ item2.columnsInfo.columnName }}</text>
						</view>

						<view>
							<u-icon v-if="item2.columnsInfo.isShowForm == true" name="arrow-up-fill" :color="item2.columnsInfo.columnColor" size="32"></u-icon>
							<u-icon v-if="item2.columnsInfo.isShowForm == false" name="arrow-down-fill" :color="item2.columnsInfo.columnColor" size="32"></u-icon>
						</view>
					</view>
				</view>
				<!-- 表单 -->
				<u-form
					v-if="!item2.columnsInfo || item2.columnsInfo.isShowForm"
					class="pl15 pr15"
					ref="uForm"
					:model="formModelJson"
					:rules="formRulesJson"
					:error-type="formDataJson.propsData.errorType"
				>
					<block v-for="(item3, index3) in item2.elementList" :key="index3">
						<!-- 录入框 标准键盘 text 0101 -->
						<u-form-item
							v-if="item3.elementType == '0101'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<u-input type="text" input-align="right" :placeholder="item3.attributesData.propsData.placeholder" v-model="formModelJson[item3.prop]"></u-input>
						</u-form-item>

						<!-- 录入框 数字键盘 number 0102 -->
						<u-form-item
							v-if="item3.elementType == '0102'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<u-input type="number" input-align="right" :placeholder="item3.attributesData.propsData.placeholder" v-model="formModelJson[item3.prop]"></u-input>
						</u-form-item>

						<!-- 录入框  textarea 0104 -->
						<u-form-item
							v-if="item3.elementType == '0104'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<u-input type="textarea" :placeholder="item3.attributesData.propsData.placeholder" v-model="formModelJson[item3.prop]"></u-input>
						</u-form-item>

						<!-- 选择器 一级 0201 -->
						<u-form-item
							v-if="item3.elementType == '0201'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<u-input
								type="select"
								input-align="right"
								:select-open="singleColumnShow"
								v-model="formModelJson[item3.prop]"
								:placeholder="item3.attributesData.propsData.placeholder"
								@click="singleColumnShow = true"
							></u-input>
							<u-select
								mode="single-column"
								:list="item3.attributesData.propsData.selectList"
								v-model="singleColumnShow"
								@confirm="singleColumnConfirm($event, item3.prop)"
							></u-select>
						</u-form-item>

						<!-- 选择器 多级联动 0202 -->
						<u-form-item
							v-if="item3.elementType == '0202'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<u-input
								type="select"
								input-align="right"
								:select-open="mutilColumnAutoShow"
								v-model="formModelJson[item3.prop]"
								:placeholder="item3.attributesData.propsData.placeholder"
								@click="mutilColumnAutoShow = true"
							></u-input>
							<u-select
								mode="mutil-column-auto"
								:list="item3.attributesData.propsData.selectList"
								v-model="mutilColumnAutoShow"
								@confirm="mutilColumnConfirm($event, item3.prop)"
							></u-select>
						</u-form-item>

						<!-- 日期选择器 04 -->
						<u-form-item
							v-if="item3.elementType == '04'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<u-input
								type="select"
								input-align="right"
								:select-open="calendarShow"
								v-model="formModelJson[item3.prop]"
								:placeholder="item3.attributesData.propsData.placeholder"
								@click="calendarShow = true"
							></u-input>
							<u-calendar v-model="calendarShow" mode="date" @change="calendarConfirm(($event, item3.prop))"></u-calendar>
						</u-form-item>

						<!-- 不可修改的文本框 07 -->
						<u-form-item
							v-if="item3.elementType == '07'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<u-input type="text" :clearable="false" input-align="right" :disabled="true" v-model="formModelJson[item3.prop]"></u-input>
						</u-form-item>

						<!-- 点击按钮 触发上传 09 -->
						<u-form-item
							v-if="item3.elementType == '0901'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<u-upload
								:action="item3.action"
								:show-progress="false"
								ref="uUpload"
								:file-list="formModelJson[item3.prop] || []"
								@on-list-change="onListChange($event, item3.prop)"
							></u-upload>
						</u-form-item>
						<!-- 点击按钮 触发上传 09 -->
						<u-form-item
							v-if="item3.elementType == '0902'"
							:label="item3.label"
							:prop="item3.prop"
							:label-position="item3.labelPosition"
							:label-width="item3.labelWidth"
							:label-style="item3.labelStyle"
							:label-align="item3.labelAlign"
							:required="item3.elementInfo.required"
						>
							<ux-upload
								:action="item3.action"
								:show-progress="false"
								:custom-btn="true"
								ref="uUpload"
								:file-list="formModelJson[item3.prop] || []"
								@on-list-change="onListChange($event, item3.prop)"
							>
								<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
									<!-- 自定义按钮样式 -->
									<view class="circleBtn width100" :class="item3.attributesData.propsData.btnClass">
										<u-icon name="photo" size="40" class="mr5" :color="$u.color['lightColor']" />
										请拍照或上传附件
									</view>
								</view>
							</ux-upload>
						</u-form-item>

						<!-- 点击按钮跳转页面 将isShowList参数变成true后 新增后展示列表 10 -->
						<block v-if="item3.elementType == '10'">
							<u-form-item
								v-if="item3.elementType == '10'"
								:prop="item3.prop"
								:label-position="item3.labelPosition"
								:label-width="item3.labelWidth"
								:label-style="item3.labelStyle"
								:label-align="item3.labelAlign"
								:required="item3.elementInfo.required"
								:border-bottom="false"
							>
								<u-button shape="circle" class="width100" :class="item3.elementInfo.buttonClass" @click="uButtonClick(item3.elementInfo.functionName)">
									<u-icon :name="item3.elementInfo.leftIcon" :color="item3.elementInfo.leftIconColor" size="40" class="mr5"></u-icon>
									<text>{{ item3.elementInfo.buttonName }}</text>
								</u-button>
							</u-form-item>

							<view v-if="item3.elementInfo.isShowList">
								<u-cell-group v-for="(item4, index4) in item3.attributesData.propsData.addRecruitersList" :key="index4" :border="false">
									<u-cell-item :label="item3.label" :arrow="false">
										<view slot="title">
											<text v-if="item4.title" class="mr5">{{ item4.title }}</text>
											<text v-if="item4.subTitle" class="mr5">{{ item4.subTitle }}</text>
											<u-icon v-if="item4.icon" :name="item4.icon" :color="item4.iconColor"></u-icon>
										</view>

										<u-icon
											slot="right-icon"
											size="40"
											:name="item4.rightIcon"
											:color="item4.rightIconColor"
											@click="deleteListClick(item3.prop, item3.attributesData.propsData.addRecruitersList, index4)"
										></u-icon>
									</u-cell-item>
								</u-cell-group>
							</view>
						</block>
					</block>
				</u-form>
			</view>

			<!-- 表单底部按钮 -->

			<view class="btnBottom bg-fff">
				<view class="x-c padding10">
					<view
						v-for="(btnItem, btnIndex) in item.pageInfo.tabBar"
						:key="btnIndex"
						class="round-circle page-button"
						:class="[{ 'single-btn': item.pageInfo.tabBar.length == 1 }, { 'page-button-next ml15': btnIndex % 2 != 0 }]"
						@click="buttonClick(btnItem.functionName)"
					>
						{{ btnItem.buttonName }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// 测试数据
import initFormJson from '@/framework/common/formTestData.js';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
	name: 'a-form',
	props: {},
	data() {
		let that = this;
		return {
			initFormJson: initFormJson.form || {},
			formModelJson: {},
			formRulesJson: {},
			// 表单页面数据
			pages: [],
			// 表单子组件校验规则
			elementRuleList: [],
			// 控制单列模式的列选择器
			singleColumnShow: false,
			// 控制多列模式的列选择器
			mutilColumnAutoShow: false,
			// 控制日历显示
			calendarShow: false
		};
	},
	mounted() {
		if (this.initFormJson) {
			this.init();
		} else {
			console.log('请检查初始化form数据！');
		}
	},
	computed: {
		formDataJson() {
			return this.formData();
		}
	},
	methods: {
		// 初始化formJson
		setInitFormJson(initFormJson) {
			this.initFormJson = initFormJson;
			this.init();
		},
		init() {
			// 调接口
			// let res = await this.$apis.textFormJson();
			// if  (res && res.code == '0') {
			// 	// 将表单数据赋值给vuex的参数
			// 	this.$S.commit('SET_FORMDATA', res.form);

			// 	this.pages = this.formDataJson.propsData.pages;
			// 	await this.initFormRules();
			// }

			// 本地测试
			this.$S.commit('SET_FORMDATA', this.initFormJson);

			this.pages = this.formDataJson.propsData.pages;
			this.initFormRules();
		},

		...mapGetters(['formData']),
		// 上一页
		previousPage() {
			if (this.formDataJson.propsData.currentPage <= 0) {
				this.formDataJson.propsData.currentPage = 0;
			} else {
				this.formDataJson.propsData.currentPage -= 1;
			}

			let setStorageName = 'formModelJson' + this.formDataJson.propsData.currentPage;
			// this.formModelJson = uni.getStorageSync(setStorageName);
			this.$set(this.formModelJson, uni.getStorageSync(setStorageName));
			this.$S.commit('SET_FORMDATA', this.formDataJson);
		},

		// 下一页
		nextPage() {
			// 本地存储当前页数据并切换下一页
			let setStorageName = 'formModelJson' + this.formDataJson.propsData.currentPage;
			uni.setStorageSync(setStorageName, this.formModelJson);

			if (this.formDataJson.propsData.currentPage >= this.formDataJson.propsData.pages.length - 1) {
				this.formDataJson.propsData.currentPage = this.formDataJson.propsData.pages.length - 1;
			} else {
				this.formDataJson.propsData.currentPage += 1;
			}

			this.$S.commit('SET_FORMDATA', this.formDataJson);

			// console.log('this.formModelJson:', this.formModelJson);
			console.log('this.formRulesJson:', this.formRulesJson);
		},

		//数据接口
		setPropsData(propsData) {
			this.propsData = propsData;
		},

		// 业务属性接口
		setData(data) {
			this.data = data;
		},

		//操作属性接口
		setOperateData(operateData) {
			this.operateData = operateData;
		},

		//请求接口
		setRequestData(requestData) {
			this.requestData = requestData;
		},

		// string转换成函数
		evalFun(ev) {
			let evalParam = eval(ev);
			if (evalParam) {
				return evalParam;
			}
		},

		// 网络请求
		request() {
			let requestApi = '';
			if (this.requestData.requestMode && this.requestData.remoteApi) {
				if (this.requestData.requestMode == 'POST') {
					requestApi = this.$apis.POST(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else if (this.requestData.requestMode == 'GET') {
					requestApi = this.$apis.GET(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else {
					console.log('请检查参数是否正确！');
				}

				requestApi
					.then(res => {
						if (typeof this.requestData.success == 'function') {
							this.requestData.success(res);
						} else if (typeof this.requestData.success == 'string') {
							try {
								let string = 'this.$root.' + this.requestData.success;
								this.evalFun(string);
							} catch (e) {
								console.log('错误信息：', e);
							}
						} else {
							console.log('请检查参数是否正确！');
						}

						this.data = res;
					})
					.catch(error => {
						if (this.requestData.error) {
							let string = 'this.$root.' + this.requestData.success;
							this.evalFun(string);
						} else {
							console.log('error:', error);
						}
					});
			} else {
				console.log('请检查参数是否正确！');
				return;
			}
		},

		// 初始化表单规则
		initFormRules() {
			let propKey = '';
			for (let item in this.pages) {
				if (this.pages[item]) {
					// 循环当前页 栏目
					let columns = this.pages[item].columns;

					columns.map((item2, index2) => {
						// 循环当前表单页数据
						item2.elementList.map((item3, index3) => {
							// prop 参数作为json中的key值
							propKey = item3.prop;

							// 表单数据对象
							if (item3.elementOptionValue) {
								// 当前情况针对于 不可修改的文本框

								this.formModelJson[item3.prop] = item3.elementOptionValue;
							} else {
								this.formModelJson[item3.prop] = '';
							}

							// 将单个子组件的校验规则赋值给elementRuleList
							this.elementRuleList = item3.attributesData.data.ruleList;

							if (this.elementRuleList && this.elementRuleList.length > 0) {
								// 对校验规则参数进行处理
								this.elementRuleList.map(ruleItem => {
									for (let key in ruleItem) {
										let includeList = ['transform', 'validator', 'asyncValidator'];
										if (includeList.includes(key)) {
											let string = 'this.$root.' + ruleItem[key];
											let rulesValue = this.evalFun(string);
											ruleItem[key] = rulesValue;
										}
									}
								});
							}

							// 以下参数均是u-form 组件所需参数
							// 表单子组件校验规则列表
							this.formRulesJson[item3.prop] = this.elementRuleList || [];
						});

						// 表单需校验规则
						if (this.formRulesJson) {
							this.$refs.uForm[0].setRules(this.formRulesJson);
						} else {
							console.log('请检查校验规则是否正确！');
						}
					});
				} else {
					console.log('请检查propsData > pages参数是否正确！');
				}
			}

			// this.$set() 解决动态改变数据 但是无法vue 无法检测数据已更新问题
			this.$set(this.formModelJson, propKey, this.formModelJson[propKey]);
			this.$set(this.formRulesJson, propKey, this.formRulesJson[propKey]);
		},

		// elementType 为 10时 按钮点击事件
		// 调用页面方法
		uButtonClick(fnName) {
			let string = '';
			if (fnName.indexOf('(') != -1) {
				string = 'this.$root.' + fnName;
			} else {
				string = 'this.$root.' + fnName + '()';
			}

			this.evalFun(string);
		},

		// 按钮点击
		// 调用组件内部方法
		buttonClick(fnName) {
			// console.log('fnname:', fnName);
			let string = '';
			if (fnName.indexOf('(') != -1) {
				string = 'this.' + fnName;
			} else {
				string = 'this.' + fnName + '()';
			}

			this.evalFun(string);
		},

		// 单列选择点击确定后
		singleColumnConfirm(e, param) {
			console.log('singleColumnConfirm:', e);
			e.map((val, index) => {
				this.formModelJson[param] += this.formModelJson[param] == '' ? val.label : '-' + val.label;
			});
		},

		// 多列选择点击确定后
		mutilColumnConfirm(e, param) {
			console.log('mutilColumnConfirm:', e);
			e.map((val, index) => {
				this.formModelJson[param] += this.formModelJson[param] == '' ? val.label : '-' + val.label;
			});
		},

		// 当内部文件列表被加入文件、移除文件，或手动调用clear方法时触发
		onListChange(lists, param) {
			console.log('onListChange', lists);
			this.formModelJson[param] = lists;
		},

		// 日历选择点击确定后
		calendarConfirm(e, param) {
			console.log('calendarConfirm:', e);
			this.formModelJson[param] = e.result;
		},

		// elementType 为10时，点击删除icon 删除当前数据
		deleteListClick(param, lists, index) {
			console.log('list：', lists);
			lists.splice(index, 1);
			this.formModelJson[param] = lists;
			console.log('this.formModelJson[param]:', this.formModelJson[param]);
		},

		// 表单提交
		submit() {
			console.log('this.formModelJson:', this.formModelJson);
			// this.$refs.uForm[0].validate(valid => {
			// 	if (valid) {
			// 		console.log('验证通过', valid);
			// 	} else {
			// 		console.log('验证失败');
			// 	}
			// });
		}
	}
};
</script>
<style scoped lang="scss">
.page-button {
	flex: 1;
	height: 80rpx;
	line-height: 80rpx;
	background-color: #ffe8d9;
	color: #fd6703;
	font-size: 28upx;
	text-align: center;
	border: none;
	uni-button:after {
		content: ' ';
		border: none;
	}
}
.page-button-next {
	flex: 1;
	background-color: #fd6703 !important;
	color: #ffffff !important;
	border-color: #fd6703 !important;
}

.single-btn {
	background-color: #ffe8d9 !important;
	color: #fd6703 !important;
	border-color: #ffe8d9 !important;
}
.btnBottom {
	position: fixed;
	bottom: 0;
	width: 100%;
}
.defaultBtnClass {
	background-color: #fff7f2;
	color: #fd6703 !important;
}
</style>

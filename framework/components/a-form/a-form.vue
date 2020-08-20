<template>
	<view class="wrap">
		<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
			
			<view v-for="(item, index) in pageData" :key="index">
				<u-form-item
					v-if="item.magicalCoder.identifier == 'u-input'"
					:required="true"
					:leftIconStyle="{ color: '#888', fontSize: '32rpx' }"
					left-icon="account"
					label-width="120"
					:label-position="labelPosition"
					label="姓名"
					prop="name"
				>
					<u-input :border="border" placeholder="请输入姓名" :disabled="true" v-model="model.name" type="text"></u-input>
				</u-form-item>
				
				<u-form-item v-if="item.magicalCoder.identifier == 'u-checkbox'" :label-position="labelPosition" label="水果品种" label-width="150" prop="likeFruit">
					<u-checkbox-group @change="checkboxGroupChange" :width="radioCheckWidth" :wrap="radioCheckWrap">
						<u-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">{{ item.name }}</u-checkbox>
					</u-checkbox-group>
				</u-form-item>
				
				<u-form-item v-if="item.magicalCoder.identifier == 'u-radio'" :label-position="labelPosition" label="结算方式" prop="payType" label-width="150">
					<u-radio-group v-model="radio" @change="radioGroupChange" :width="radioCheckWidth" :wrap="radioCheckWrap">
						<u-radio shape="circle" v-model="item.checked" v-for="(item, index) in radioList" :key="index" :name="item.name">{{ item.name }}</u-radio>
					</u-radio-group>
				</u-form-item>
				
				<!-- 此处switch的slot为right，如果不填写slot名，也即<u-switch v-model="model.remember"></u-switch>，将会左对齐 -->
				<u-form-item v-if="item.magicalCoder.identifier == 'u-switch'" :label-position="labelPosition" label="记住密码" prop="remember" label-width="150">
					<u-switch v-model="model.remember" slot="right"></u-switch>
				</u-form-item>
				<u-form-item v-if="item.magicalCoder.identifier == 'u-upload'" :label-position="labelPosition" label="上传图片" prop="photo" label-width="150"><u-upload width="160"></u-upload></u-form-item>
				
			</view>
			
			
			
			
			<!-- <u-form-item :label-position="labelPosition" label="所在地区" prop="region" label-width="150">
				<u-input :border="border" type="select" :select-open="pickerShow" v-model="model.region" placeholder="请选择地区" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="商品类型" prop="goodsType" label-width="150">
				<u-input :border="border" type="select" :select-open="selectShow" v-model="model.goodsType" placeholder="请选择商品类型" @click="selectShow = true"></u-input>
			</u-form-item>
			<u-form-item
				:rightIconStyle="{ color: '#888', fontSize: '32rpx' }"
				right-icon="kefu-ermai"
				:label-position="labelPosition"
				label="手机号码"
				prop="phone"
				label-width="150"
			>
				<u-input :border="border" placeholder="请输入手机号" v-model="model.phone" type="number"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="验证码" prop="code" label-width="150">
				<u-input :border="border" placeholder="请输入验证码" v-model="model.code" type="text"></u-input>
				<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
			</u-form-item> -->
			
			
		</u-form>
		<!-- <view class="agreement">
			<u-checkbox v-model="check" @change="checkboxChange"></u-checkbox>
			<view class="agreement-text">勾选代表同意uView的版权协议</view>
		</view> -->
		<u-button @click="submit">提交</u-button>
		<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
		<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
		<!-- <u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker> -->
		<!-- <u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code> -->
		<!-- <view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">label对齐方式</view>
				<u-subsection vibrateShort :list="['左边', '上方']" @change="labelPositionChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">边框</view>
				<u-subsection vibrateShort :current="borderCurrent" :list="['显示', '隐藏']" @change="borderChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">radio、checkbox样式</view>
				<u-subsection vibrateShort :list="['自适应', '换行', '50%宽度']" @change="radioCheckboxChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">错误提示方式</view>
				<u-subsection vibrateShort :list="['message', 'toast', '下划线', '输入框']" @change="errorChange"></u-subsection>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
	name: 'a-form',
	props: {},
	data() {
		let that = this;
		return {
			// 请求页面组件JSON
			pages: {},
			// 页面组件信息
			pageData: [],
			// 页面配置信息
			attributesData: {},
			// json配置属性信息
			propsData: {},
			// 操作相关属性
			operateData: {},
			// 业务属性
			data: {},
			// 请求相关属性
			requestData: {},
			model: {
				name: '111',
				sex: '',
				likeFruit: '',
				intro: '',
				payType: '支付宝',
				agreement: false,
				region: '',
				goodsType: '',
				phone: '',
				code: '',
				password: '',
				rePassword: '',
				remember: false,
				photo: ''
			},
			selectList: [
				{
					value: '电子产品',
					label: '电子产品'
				},
				{
					value: '服装',
					label: '服装'
				},
				{
					value: '工艺品',
					label: '工艺品'
				}
			],
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					},
					{
						min: 3,
						max: 5,
						message: '姓名长度在3到5个字符',
						trigger: ['change', 'blur']
					},
					{
						// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.chinese(value);
						},
						message: '姓名必须为中文',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change', 'blur']
					}
					// 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
					// {
					// 	trigger: ['blur'],
					// 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
					// 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
					// 	asyncValidator: (rule, value, callback) => {
					// 		this.$u.post('/ebapi/public_api/index').then(res => {
					// 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
					// 			if(res.error) {
					// 				callback(new Error('姓名重复'));
					// 			} else {
					// 				// 如果没有错误，也要执行callback()回调
					// 				callback();
					// 			}
					// 		})
					// 	},
					// }
				],
				sex: [
					{
						required: true,
						message: '请选择性别',
						trigger: 'change'
					}
				],
				intro: [
					{
						required: true,
						message: '请填写简介'
					},
					{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					},
					// 正则校验示例，此处用正则校验是否中文，此处仅为示例，因为uView有this.$u.test.chinese可以判断是否中文
					{
						pattern: /^[\u4e00-\u9fa5]+$/gi,
						message: '简介只能为中文',
						trigger: 'change'
					}
				],
				likeFruit: [
					{
						required: true,
						message: '请选择您喜欢的水果',
						trigger: 'change',
						type: 'array'
					}
				],
				payType: [
					{
						required: true,
						message: '请选择任意一种支付方式',
						trigger: 'change'
					}
				],
				region: [
					{
						required: true,
						message: '请选择地区',
						trigger: 'change'
					}
				],
				goodsType: [
					{
						required: true,
						message: '请选择商品类型',
						trigger: 'change'
					}
				],
				phone: [
					{
						required: true,
						message: '请输入手机号',
						trigger: ['change', 'blur']
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change', 'blur']
					}
				],
				code: [
					{
						required: true,
						message: '请输入验证码',
						trigger: ['change', 'blur']
					},
					{
						type: 'number',
						message: '验证码只能为数字',
						trigger: ['change', 'blur']
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur']
					},
					{
						// 正则不能含有两边的引号
						pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
						message: '需同时含有字母和数字，长度在6-12之间',
						trigger: ['change', 'blur']
					}
				],
				rePassword: [
					{
						required: true,
						message: '请重新输入密码',
						trigger: ['change', 'blur']
					},
					{
						validator: (rule, value, callback) => {
							return value === this.model.password;
						},
						message: '两次输入的密码不相等',
						trigger: ['change', 'blur']
					}
				]
			},
			border: false,
			check: false,
			selectStatus: 'close',
			checkboxList: [
				{
					name: '荔枝',
					checked: false,
					disabled: false
				},
				{
					name: '香蕉',
					checked: false,
					disabled: false
				},
				{
					name: '橙子',
					checked: false,
					disabled: false
				},
				{
					name: '草莓',
					checked: false,
					disabled: false
				}
			],
			radioList: [
				{
					name: '支付宝',
					checked: true,
					disabled: false
				},
				{
					name: '微信',
					checked: false,
					disabled: false
				},
				{
					name: '银联',
					checked: false,
					disabled: false
				},
				{
					name: '现金',
					checked: false,
					disabled: false
				}
			],
			radio: '支付宝',
			actionSheetList: [
				{
					text: '男'
				},
				{
					text: '女'
				},
				{
					text: '保密'
				}
			],
			actionSheetShow: false,
			pickerShow: false,
			selectShow: false,
			radioCheckWidth: 'auto',
			radioCheckWrap: false,
			labelPosition: 'left',
			codeTips: '',
			errorType: ['message']
		};
	},
	mounted() {
		this.init();
	},
	computed: {
		borderCurrent() {
			return this.border ? 0 : 1;
		}
	},
	methods: {
		// 组件初始化
		init() {
			this.$U.initPages().then(val => {
				this.pages = decodeURIComponent(val);
				this.attributesData = val.attributes;
				if (val.magicalCoder) {
					this.pageData = val.magicalCoder.children;
					console.log('this.pageDta:', this.pageData);

					// props参数处理
					this.propsData = this.attributesData.propsData;
					this.data = this.attributesData.data;
					this.operateData = this.attributesData.operateData;
					this.requestData = this.attributesData.requestData;
					//初始化数据
					// this.request();
				} else {
					console.log('请检查JSON是否正确');
				}
			});
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
		}
	}
};
</script>
<style scoped lang="scss">
.wrap {
	padding: 30rpx;
}

.agreement {
	display: flex;
	align-items: center;
	margin: 40rpx 0;

	.agreement-text {
		padding-left: 8rpx;
		color: $u-tips-color;
	}
}
</style>

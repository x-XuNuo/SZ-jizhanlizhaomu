<template>
	<view>
		<!-- mode=0 点击按钮直接上传 -->
		<view v-if="this.propsData.mode == '0'">
			<u-upload
				ref="uUpload"
				:action="this.propsData.action"
				:max-count="this.propsData.maxCount"
				:width="this.propsData.width"
				:custom-btn="this.propsData.customBtn"
				:show-progress="this.propsData.showProgress"
				:disabled="this.propsData.disabled"
				:image-mode="this.propsData.imageMode"
				:header="this.propsData.header"
				:form-data="this.propsData.formData"
				:name="this.propsData.name"
				:size-type="this.propsData.sizeType"
				:source-type="this.propsData.sourceType"
				:preview-full-image="this.propsData.previewFullImage"
				:multiple="this.propsData.multiple"
				:deletable="this.propsData.deletable"
				:max-size="this.propsData.maxSize"
				:file-list="this.propsData.fileList"
				:upload-text="this.propsData.uploadText"
				:auto-upload="this.propsData.autoUpload"
				:show-tips="this.propsData.showTips"
				:show-upload-list="this.propsData.showUploadList"
				:del-icon="this.propsData.delIcon"
				:del-bg-color="this.propsData.delBgColor"
				:del-color="this.propsData.delColor"
				:before-upload="evalFun(this.propsData.beforeUpload)"
				:limitType="this.propsData.limitType"
				:index="this.propsData.index"
				@on-oversize="onOversize"
				@on-preview="onPreview"
				@on-remove="onRemove"
				@on-success="onSuccess"
				@on-change="onChange"
				@on-error="error"
				@on-progress="onProgress"
				@on-uploaded="onUploaded"
				@on-choose-complete="onChooseComplete"
				@on-list-change="onListChange"
			></u-upload>
		</view>

		<!-- mode=1 点击按钮弹出 -->
		<view v-if="this.propsData.mode == '1'">
			<u-upload
				ref="uUpload"
				:action="this.propsData.action"
				:max-count="this.propsData.maxCount"
				:width="this.propsData.width"
				:custom-btn="this.propsData.customBtn"
				:show-progress="this.propsData.showProgress"
				:disabled="this.propsData.disabled"
				:image-mode="this.propsData.imageMode"
				:header="this.propsData.header"
				:form-data="this.propsData.formData"
				:name="this.propsData.name"
				:size-type="this.propsData.sizeType"
				:source-type="this.propsData.sourceType"
				:preview-full-image="this.propsData.previewFullImage"
				:multiple="this.propsData.multiple"
				:deletable="this.propsData.deletable"
				:max-size="this.propsData.maxSize"
				:file-list="this.propsData.fileList"
				:upload-text="this.propsData.uploadText"
				:auto-upload="this.propsData.autoUpload"
				:show-tips="this.propsData.showTips"
				:show-upload-list="this.propsData.showUploadList"
				:del-icon="this.propsData.delIcon"
				:del-bg-color="this.propsData.delBgColor"
				:del-color="this.propsData.delColor"
				:before-upload="evalFun(this.propsData.beforeUpload)"
				:limitType="this.propsData.limitType"
				:index="this.propsData.index"
				@on-oversize="onOversize"
				@on-preview="onPreview"
				@on-remove="onRemove"
				@on-success="onSuccess"
				@on-change="onChange"
				@on-error="error"
				@on-progress="onProgress"
				@on-uploaded="onUploaded"
				@on-choose-complete="onChooseComplete"
				@on-list-change="onListChange"
			>
				<view v-if="this.propsData.customBtn == 'true'" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<!-- 自定义按钮样式 -->
					<view class="circleBtn" :class="this.propsData.btnClass">
						<u-icon name="photo" size="40" class="mr5" :color="$u.color['lightColor']" />
						请拍照或上传附件
					</view>
				</view>
			</u-upload>
		</view>
	</view>
</template>

<script>
export default {
	name: 'a-upload',
	props: {
		// json配置属性信息
		attributesData: Array | Object
	},
	data() {
		return {
			// json配置属性信息
			propsData: {},
			// 操作相关属性
			operateData: {},
			// 业务属性
			data: {},
			// 请求相关属性
			requestData: {},
			// 组件内部的文件列表
			lists: []
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		this.requestData = this.attributesData.requestData;
		//初始化数据
		// this.request();
	},

	methods: {
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
			eval(ev);
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

				console.log('requestApi:', requestApi);

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

		// 组件内部方法 - 需通过ref调用
		// 手动上传图片
		upload() {
			this.$refs.uUpload.upload();
		},

		// 清空内部文件列表
		clear() {
			this.$refs.uUpload.clear();
		},

		// 重新上传内部上传失败或者尚未上传的图片
		reUpload() {
			this.$refs.uUpload.reUpload();
		},

		// 手动移除列表的某一个图片，index为lists数组的索引
		remove(index) {
			this.$refs.uUpload.remove(index);
		},

		// 组件方法
		// 图片大小超出最大允许大小
		onOversize(file, lists) {
			// console.log('onOversize', file, lists);
			if (this.operateData.onOversize) {
				let string = 'this.$root.' + this.operateData.onOversize;
				this.evalFun(string);
			}
		},

		// 全屏预览图片时触发
		onPreview(url, lists) {
			// console.log('onPreview', url, lists);
			if (this.operateData.onPreview) {
				let string = 'this.$root.' + this.operateData.onPreview;
				this.evalFun(string);
			}
		},

		// 移除图片时触发
		onRemove(index, lists) {
			// console.log('onRemove', index, lists);
			if (this.operateData.onRemove) {
				let string = 'this.$root.' + this.operateData.onRemove;
				this.evalFun(string);
			}
		},

		// 图片上传成功时触发
		onSuccess(data, index, lists) {
			// console.log('onSuccess', data, index, lists);
			if (this.operateData.onSuccess) {
				let string = 'this.$root.' + this.operateData.onSuccess;
				this.evalFun(string);
			}
		},

		// 图片上传后，无论成功或者失败都会触发
		onChange(res, index, lists) {
			// console.log('onChange', res, index, lists);
			if (this.operateData.onChange) {
				let string = 'this.$root.' + this.operateData.onChange;
				this.evalFun(string);
			}
		},

		// 图片上传失败时触发
		error(res, index, lists) {
			// console.log('onError', res, index, lists);
			if (this.operateData.error) {
				let string = 'this.$root.' + this.operateData.error;
				this.evalFun(string);
			}
		},

		// 图片上传过程中的进度变化过程触发
		onProgress(res, index, lists) {
			// console.log('onProgress', res, index, lists);
			if (this.operateData.onProgress) {
				let string = 'this.$root.' + this.operateData.onProgress;
				this.evalFun(string);
			}
		},

		// 所有图片上传完毕触发
		onUploaded(lists) {
			// console.log('onUploaded', lists);
			if (this.operateData.onUploaded) {
				let string = 'this.$root.' + this.operateData.onUploaded;
				this.evalFun(string);
			}
		},

		// 每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表
		onChooseComplete(lists, name) {
			if (this.operateData.onChooseComplete) {
				let string = 'this.$root.' + this.operateData.onChooseComplete;
				this.evalFun(string);
			}
		},

		// 当内部文件列表被加入文件、移除文件，或手动调用clear方法时触发
		onListChange(lists) {
			// console.log('onListChange', lists);
			this.propsData.fileList = this.list = lists;
			console.log('this.propsData.fileList:', this.propsData.fileList);
			if (this.operateData.onListChange) {
				let string = 'this.$root.' + this.operateData.onListChange;
				this.evalFun(string);
			}
		}
	}
};
</script>

<style scoped></style>

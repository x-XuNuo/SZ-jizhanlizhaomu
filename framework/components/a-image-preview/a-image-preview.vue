<template>
	<view class="margin10 preview-box" v-if="this.propsData.fileList">
		<view v-if="this.propsData.mode == 'default'">
			<u-upload
			:custom-btn="true" 
			:show-progress="false" 
			:deletable="false"
			 :width="this.propsData.width"
			:listClass="this.propsData.listClass" 
			:file-list="this.propsData.fileList">
			</u-upload>
		</view>
	</view>
</template>

<script>
export default {
	name: 'a-image-preview',
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
			fileList: [{
				url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg'
			},{
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
			},{
				url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
			},{
				url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597589295294&di=1f8d8549a2d2b9d70465ff11706a6c35&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D2268908537%2C2815455140%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D719'
			},{
				url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg'
			}],
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData ?  this.attributesData.propsData : {};
		this.data = this.attributesData ? this.attributesData.data : {};
		this.operateData = this.attributesData ? this.attributesData.operateData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.current : {};
			console.log("52：",this.propsData)
		//初始化数据
		this.request();
		// 测试数据
		// this.propsData.fileList = this.fileList;
		
	},

	methods: {
		//数据接口
		setPropsData(propsData) {
			this.propsData = propsData;
			console.log("63：",this.propsData)
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

				requestApi.then(res => {
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
	}
};
</script>
<style scope></style>
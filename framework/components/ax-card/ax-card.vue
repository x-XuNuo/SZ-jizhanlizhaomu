<template>
	<view>
		<view class="card" v-if="this.model == 'default' ">
			<view @click="compclick">

			<!-- 根据mode类型不同的视图封装 -->
				<view class="title"> 
					<img src="../../../static/recruit-list/txt.png" class="imgStyle"></img>
				  <text style="vertical-align: middle;">{{dataSource.recruitTitle}} </text>
				</view>
				<view style="padding-top: 20upx; background-color: #fff;">
					<view class="apply">
						<text>申请日期：</text>
						<text>{{dataSource.recruitTime}}</text>
					</view>
					<view class="apply">
						<text>审批状态：</text>
						<text>{{ dataSource.recruitStatus == 2 ? "已驳回" :(dataSource.recruitStatus == 1 ? "已通过" :"审批中")}}</text>
						<text v-if="dataSource.recruitStatus == 2" @click.stop="tips()" >
							<img src="../../../static/sigh.png" mode="" style="width:40upx; vertical-align: middle;  margin: 0 20upx;"/>
						</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 带有按钮的card -->
		<view class="card" v-if="this.model == 'btncard' ">
			<view>
				<view class="title"> 
					<img src="../../../static/recruit-list/txt.png" class="imgStyle"></img>
				  <text style="vertical-align: middle;">{{dataSource.recruitTitle}} </text>
				</view>
				<view style="padding-top: 20upx; background-color: #fff;">
					<view class="apply">
						<text>制定计划时间：</text>
						<text>{{dataSource.recruitTime}}</text>
					</view>
					<view class="apply">
						<text>状态：</text>
						<text>{{ dataSource.recruitStatus == 2 ? "已停止" :"招聘中"}}</text>
					</view>
				</view>
				<view style="background-color: #fff; overflow: hidden;">
					<a-button
						ref='detailsBtn'>
					</a-button>
						<a-button
							ref='stopBtn'>
						</a-button>
				</view>
			</view>
		</view>
		
		<view v-if="this.model == 'dele' " class="renlist">
			<view class="bg-fff" style="padding: 30upx; border-bottom: 1px #f4f4f4 solid; position: relative;">
				<view>
					<view >
						<text style="font-size: 30upx; color: #000000;">{{dataSource.applicantName}}</text>
						<text style="font-size: 28upx; color: #9a9a9a; margin: 0 10upx;">{{dataSource.applicantAge}}</text>
						<img v-if="dataSource.applicantSex == 0" src="../../../static/woman.png" mode="" style="width: 40upx;vertical-align: middle;"></img>
						<img v-if="dataSource.applicantSex == 1" src="../../../static/man.png" mode="" style="width: 40upx;vertical-align: middle;"></img>
					</view>
					<view  style="font-size: 25upx; color: #9a9a9a; margin-top: 10upx ;">
						{{dataSource.userIdentityCard}} 
					</view>
				</view>
				<view style="position: absolute;top: 50%; right: 20upx; transform: translate(-50%, -50%); " @click="Dele(dataSource)">
					<image src="../../../static/delete.png" mode="" style="width: 40upx; height: 40upx; "></image>
				</view>
			</view>
		</view>
		
		<!-- 带有照片 -->
		<view v-if="this.model == 'photo'" style="margin: 20upx;">
			<view class="bg-fff" style="padding: 30upx; border-bottom: 1px #f4f4f4 solid; display: flex;">
				<img src="../../common/assets/image/common/userIcon.png" mode="" style="width: 100upx; height: 100upx; margin-right: 20upx;"></img>
				<view style="flex: 4;">
					<view >
						<text style="font-size: 35upx; color: #000000;">{{dataSource.applicantName}}</text>
						<text 
							:class="[{'no':dataSource.applicantStatus == 2 },{'yes':dataSource.applicantStatus == 1 },{'stay':dataSource.applicantStatus == 0}]" 
							style="font-size: 28upx; float: right; margin: 0 10upx;">{{dataSource.applicantStatus == 2 ? "已驳回" :(dataSource.applicantStatus == 1 ? "已通过" :"审批中")}}</text>
					</view>
					<view  style="font-size: 25upx; color: #000; margin-top: 10upx ;">
						<text>
							拟聘职位：{{dataSource.rankName}}
						</text> 
					</view>
				</view>
			</view>
		</view>
		<!-- 纯图片列表 -->
		<view v-if="this.model == 'img'" style="margin: 20upx;">
			<a-image-preview
				ref="imagePreview"
			>
			</a-image-preview>
		</view>
		
		
		<view class="card" v-if="this.model == 'personnelCard' ">
			<view>
				<view class="head"> 
				  <text class="ml15">{{dataSource.applicantName}} </text>
				  <text class="ml10">{{dataSource.applicantSex == 1 ? '男':'女' }} </text>
				  <text class="ml10">{{dataSource.applicantPhone}} </text>
				  <text class="fr mr10" style="color:#a7a7a7; font-weight: 400;">
					{{dataSource.applicantStatus == 1 ? '待审核':(dataSource.applicantThroughState == 1 ? '审核未通过' : (dataSource.applicantThroughState == 2 ? '待面试' : (dataSource.applicantThroughState == 3 ? '面试通过' : '面试未通过') ) ) }} 
					</text>
				</view>
				<view class="pt10" style="background-color: #fff;">
					<view class="pl15" style="color:#a7a7a7;">
						<text>注册时间：</text>
						<text>{{dataSource.applicantTime}}</text>
					</view>
					<view class="x-f margin15" style="color: #ed6b1c;">
						<text class="flex1" @click="dianji()">求职表</text>
						<text class="flex1" @click="dianji()">上岗详情</text>
						<text class="flex1" @click="dianji()">测评结果</text>
						<text class="flex1" @click="dianji()">上岗初审</text>
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
		dataSource : Array | Object,
		model :"" ,
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
			reqestData: {},
		};
	},
	mounted() {
		this.propsData = this.attributesData ?  this.attributesData.propsData : {};
		this.data = this.attributesData ? this.attributesData.data : {};
		this.operateData = this.attributesData ? this.attributesData.operateData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.current : {};
		if(this.model == 'btncard'){
			let details = {
				text : "查看详情",
				mode:"default",
				class:"details"
			} 
			let stop = {
				text : "停止招聘",
				mode:"default",
				class:"details"
			}
			this.$nextTick( () =>{
				let detailsBtnOD =  this.$refs.detailsBtn.operateData
				detailsBtnOD.link = "/pages/increase/increase-details"
				detailsBtnOD.linkType  = "0"
				this.$refs.detailsBtn.setPropsData(details)
				if(this.dataSource.recruitStatus != 2){
					this.$refs.stopBtn.setPropsData(stop)	
				}
				this.$refs.detailsBtn.setOperateData(detailsBtnOD)
			})
		} else if(this.model == 'img'){
			let cardImg = {
				fileList:[ 
				 {
						"url":"https://img.yzcdn.cn/vant/apple-1.jpg"
					},
					{
						"url":"https://img.yzcdn.cn/vant/apple-2.jpg"
					}
				],
				"mode":"default"
			}
			this.$nextTick( () =>{
				this.$refs.imagePreview.setPropsData(cardImg)
			})
		}
	},

	methods: {
		//数据接口
		setPropsData(val) {
			this.propsData = val;
		},
		cardClick (){
		},
		// 驳回原因提醒
		tips(){
			this.$emit("tipsClick")
		},
		// 删除事件
		Dele(e){
			this.$emit("cellDelete")
		},
		dianji(){
			console.log("234567898765")
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
		setRequestData(reqestData) {
			this.reqestData = reqestData;
		},

		// 请求接口示例
		request() {
			let requestMode = this.propsData.requestMode;
			if(this.reqestData.linkurl){
				
				this.$apis.requestMode(this.reqestData.linkurl,this.reqestData.data).then((res)=>{
					if (this.reqestData.success) {
						this.reqestData.success = res;
					}else{
						console.log("success:",success);
					}
					
					this.data = res;
					
				}).catch((err)=>{
					
					if (this.reqestData.error) {
						this.reqestData.error = err;
					}else{
						console.log("error:",error);
					}
					
				});
			}else{
				
				console.log('无请求接口，请检查参数');
				return;
				
			}

		},
		// 子控制默认事件响应
		compclick() {
			this.$emit("cardClick")
			console.log("this.operateData.click",this.operateData)
			//如果存在传放的事件，注入事件
			if (this.operateData.click) {
				eval('this.$root.' + this.operateData.click);
			}

		}
	}
};
</script>

<style>
	.card{
		margin: 30upx 40upx;	
		border-radius: 15upx;
		overflow: hidden;
		box-shadow: 0 0 10px #e5e5e5;
	}
	.yes{
		color: #5eb1ff;
	}
	.stay{
		color: #fd7012 ;
	}
	.no{
		color: #9a9a9a;
	}
	.title{
		width: 100%;
		background-color: #fafafa;
		height: 90upx;
		line-height: 90upx;
		font-size: 28upx;
	}
	.head{
		width: 100%;
		background-color: #fff;
		height: 90upx;
		line-height: 90upx;
		font-size: 28upx;
		border-bottom: 1px solid #ddd;
		font-weight: 800;
	}
	.imgStyle{
		width: 40upx;
		height: 40upx; 
		padding: 0 20upx; 
		vertical-align: middle;
	}
	.apply{
		padding: 20upx;
	}
	.apply{
		
	}
</style>

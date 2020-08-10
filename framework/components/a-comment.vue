<template>
	<!-- 展示评论 -->
	<view class="f14">
		<view class="x-c comments-box">
			<!-- 评论 -->
			<view class="comments-box-ceil x-f" @click="showModelFun"><text class="pl10 text-color999">我来说几句...</text></view>

			<!-- 点赞、收藏 -->
			<!-- <view class="like-box pt15 pr15 x-bc">
				<view class="mr5">
					<image
						class="img-dianzan"
						:src="publishList.likeFlag == '1' ? '/static/infoicon/infozan.png' : '/static/infoicon/infounzan.png'"
						@click="newsPraise(publishList.likeFlag)"
					></image>
					<text class="dianzan-count" :class="publishList.likeFlag == '1' ? 'text-colorF93F' : 'text-color999'">{{ publishList.likeCount || '0' }}</text>
				</view>
				<view>
					<image
						class="img-dianzan"
						:src="publishList.collectFlag == '1' ? '/static/infoicon/infolike.png' : '/static/infoicon/infounlike.png'"
						@click="saveNews(publishList.collectFlag)"
					></image>
					<text class="dianzan-count" :class="publishList.collectFlag == '1' ? 'text-colorF93F' : 'text-color999'">{{ publishList.collectCount || '0' }}</text>
				</view>
			</view> -->
		</view>

		<!-- 发表评论 -->
		<view class="comments-dialog" v-if="commontShowstatus">
			<view class="comment-dialog-div">
				<view class="padding-commont dialog-box bg-fff h">
					<view class="x-ac pb10">
						<view class="flex1 text-color999 f14" style="z-index: 990;" @click="showCommentview">
							<!-- 关闭 -->
							<text>{{ propsData.cancelText || '关闭' }}</text>
						</view>
						<view class="flex1 tc text-color4949 f16" style="z-index: 990;">{{ propsData.titleText || '评价' }}</view>
						<view class="flex1 tr text-color668 f14" style="z-index: 990;" @click="sendCommentinfo">
							<!-- 发送 -->
							<text>{{ propsData.sendText || '发表' }}</text>
						</view>
					</view>

					<slot name="body">
						<view class="padding-bottom6" style=" box-sizing: border-box;">
							<textarea
								class="f14 comment-textarea"
								focus
								:auto-focus="true"
								:maxlength="500"
								:placeholder="propsData.placeholder || '请输入...'"
								@blur="backFixationTop"
								v-model="wordComment"
							/>
							<view class="text-color999 f12 x-f word-comment-div pr15">{{ propsData.wordMinLength }}/{{ propsData.wordMaxLength || 500 }}</view>
						</view>
					</slot>
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
			data: {},
			// 用户信息
			userInfo: {},
			//评论的信息
			wordComment: '',
			//显示评价的modal
			commontShowstatus: false
		};
	},

	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		this.commontShowstatus = this.propsData.model;
		this.userInfo = uni.getStorageSync('userInfo');
		// console.log('this.propsData: ', this.propsData);
		// console.log('this.operateData: ', this.operateData);
		// console.log('this.data: ', this.data);
		// console.log('this.requestParamData: ', this.requestParamData);
		// console.log("this.userInfo:",this.userInfo);
	},

	methods: {
		//失去焦点并且获得高度
		backFixationTop() {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 800
			});
		},

		// 资讯点赞
		// 0 点赞 1 取消
		// async newsPraise(e) {
		// 	this.publishList.likeFlag = e == '0' ? '1' : '0';
		// 	if (e == '1') {
		// 		this.publishList.likeCount -= 1;
		// 		uni.showToast({
		// 			title: '取消点赞成功！',
		// 			icon: 'none'
		// 		});
		// 	} else {
		// 		this.publishList.likeCount += 1;
		// 		uni.showToast({
		// 			title: '点赞成功！',
		// 			icon: 'none'
		// 		});
		// 	}

		// 	let type = e == '0' ? '0' : '1';

		// 	let requestParam = {
		// 		matterId: this.optionData.id || '',
		// 		type: type || '',
		// 		userId: this.userInfo.userId || '',
		// 		matterType: this.modifyContentList.matterType || ''
		// 	};

		// 	requestParam = this.$netComm.AesEncrypted(requestParam);

		// 	this.$netWorkClient
		// 		.postConfig(this.apiJson.likeApi, requestParam)
		// 		.then(res => {
		// 			if (res && res.data && res.data.code == '0') {
		// 			} else {
		// 				uni.showToast({
		// 					title: '点赞失败！',
		// 					icon: 'none'
		// 				});
		// 				this.publishList.likeFlag = e == '1';
		// 				this.publishList.likeCount -= 1;
		// 			}
		// 		})
		// 		.catch(err => {
		// 			console.log('likeApi-err:', err);
		// 		});
		// },
		// 收藏资讯
		// async saveNews(e) {
		// 	// 0 收藏 1 取消收藏
		// 	this.publishList.collectFlag = e == '0' ? '1' : '0';
		// 	if (e == '1') {
		// 		this.publishList.collectCount -= 1;
		// 		uni.showToast({
		// 			title: '取消收藏成功！',
		// 			icon: 'none'
		// 		});
		// 	} else {
		// 		this.publishList.collectCount += 1;
		// 		uni.showToast({
		// 			title: '收藏成功！',
		// 			icon: 'none'
		// 		});
		// 	}

		// 	let type = e == '0' ? '0' : '1';

		// 	let requestParam = {
		// 		matterId: this.optionData.id || '',
		// 		type: type || '',
		// 		userId: this.userInfo.userId || '',
		// 		matterType: this.modifyContentList.matterType || ''
		// 	};

		// 	requestParam = this.$netComm.AesEncrypted(requestParam);

		// 	this.$netWorkClient
		// 		.postConfig(this.apiJson.collectApi, requestParam)
		// 		.then(res => {
		// 			if (res && res.data && res.data.code == '0') {
		// 			} else {
		// 				uni.showToast({
		// 					title: '收藏失败！',
		// 					icon: 'none'
		// 				});
		// 				this.publishList.collectFlag = e == '1';
		// 				this.publishList.collectCount -= 1;
		// 			}
		// 		})
		// 		.catch(err => {
		// 			console.log('collectApi-err:', err);
		// 		});
		// },

		// 触发弹窗
		showModelFun() {
			this.commontShowstatus = this.commontShowstatus ? false : true;
			if (this.commontShowstatus) {
				this.wordComment = '';
				this.propsData.wordMinLength = 0;
				this.propsData.wordMaxLength = 0;
			}
		},

		// 关闭弹窗 取消评论信息
		showCommentview() {
			// 内部初始化数据
			this.commontShowstatus = this.commontShowstatus ? false : true;
			if (this.commontShowstatus) {
				this.wordComment = '';
				this.propsData.wordMinLength = 0;
				this.propsData.wordMaxLength = 0;
			}

			if (this.operateData.cancel) {
				eval(this.operateData.cancel);
			}
		},

		// 发送评论信息 async
		async sendCommentinfo() {
			this.commontShowstatus = this.commontShowstatus ? false : true;
			if (this.wordComment) {
				if (this.wordComment.length < this.propsData.wordMinLength) {
					this.commontShowstatus = true;
					uni.showToast({
						title: '评论需要在' + this.propsData.wordMinLength + '个字以上！',
						icon: 'none'
					});
					return false;
				}
			} else {
				this.commontShowstatus = true;
				uni.showToast({
					title: '评论需要在5个字以上！',
					icon: 'none'
				});
				return false;
			}

			console.log('userInfo:', this.userInfo);

			let requestParam = {
				// 取url参数信息
				id: this.data ? this.data.id : this.requestParamData ? this.requestParamData.id : '',
				// 取本地存储用户基础信息
				userId: this.userInfo ? this.userInfo.id : this.requestParamData ? this.requestParamData.userId : '',
				// 评论文本内容
				// comment: encodeURI(this.wordComment)
				comment: encodeURIComponent(this.wordComment)
			};

			console.log('requestParam:', requestParam);

			requestParam = this.$U.AesEncrypted(requestParam);

			if (this.operateData.send) {
				eval(this.operateData.send);
			}

			if (this.operateData.requestApi) {
				await this.$apis
					.POST(this.operateData.requestApi, requestParam)
					.then(res => {
						if (res && res.code == '0') {
							uni.showToast({
								title: '评价成功，审核通过后方能上架显示哦~',
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: '评论失败！',
								icon: 'none'
							});
						}
						// 初始化文本内容和文本长度
						this.wordComment = '';
						this.propsData.wordMinLength = 0;
						this.propsData.wordMaxLength = 0;
					})
					.catch(err => {
						console.log('publishCommentsApi-err:', err);
					});
			}
		}
	}
};
</script>

<style scoped>
.comments-box {
	position: fixed;
	bottom: 0;
	background: #ffffff;
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	z-index: 990;
	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.comments-box-ceil {
	/* width: 506upx; */
	width: 100%;
	margin: 0 60upx;
	height: 68upx;
	border-radius: 56upx;
	background: #ececec;
}
.like-box {
	width: 120upx;
}
.img-dianzan {
	width: 40upx;
	height: 40upx;
	position: relative;
}
.dianzan-count {
	position: absolute;
	top: 20upx;
}
.padding-commont {
	padding: 28upx 20upx 28upx 20upx;
}
.comments-dialog {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 990;
	background: rgba(0, 0, 0, 0.4);
}
.comment-dialog-div {
	position: fixed;
	z-index: 950;
	bottom: 0;
	width: 100%;
}
.dialog-box {
	background: rgba(255, 255, 255, 1);
	/* box-shadow: 0px -10px 40px 0px rgba(102, 139, 231, 0.3); */
	border-radius: 16px 16px 0px 0px;
}
.padding-bottom6 {
	padding-bottom: 12upx;
}
.comment-textarea {
	width: 100%;
	height: 200upx;
	background: #f7f7f7;
	border-radius: 32upx 32upx 0 0;
	box-sizing: border-box;
	padding: 20upx;
}
.word-comment-div {
	background: #f7f7f7;
	justify-content: flex-end;
	border-radius: 0 0 32upx 32upx;
}
</style>

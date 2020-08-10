<template>
	<a-page :pageStatus="pageStatus">
		<view>
			this is buuton
			<button type="default" @click="goNews">gototo</button>

			<!-- 右侧插槽 -->
			<!-- 一般用法 -->
			<uni-list @click="uClick">
				<uni-list-item title="a-button" :show-arrow="true"></uni-list-item>
				<uni-list-item title="a-ad"></uni-list-item>
				<uni-list-item title="a-tabs"></uni-list-item>
			</uni-list>
		</view>
	</a-page>
</template>

<script>
export default {
	data() {
		return {
			pageStatus: 'loading'
		};
	},
	async onLoad(query) {
		await this.$apis
			.postLogin()
			.then(() => {
				console.log('then ====>');
			})
			.catch(e => {
				this.pageStatus = this.$C.CONST.PAGE_STATES.SUCCESS;
			});

		// let data = await this.$apis.postLogin();

		// console.log('login: ' + JSON.stringify(login));

		// this.$apis.postLogin().then((res)=>{
		// 	this.pageStatus = this.$C.CONST.PAGE_STATES.SUCCESS;
		// }).fail((res)=>{
		// 	this.pageStatus = this.$C.CONST.PAGE_STATES.FAIL;
		// })

		// setTimeout(() => {
		// 	console.log('=============>  load ok  ');
		// 	this.pageStatus = this.$C.CONST.PAGE_STATES.SUCCESS;
		// }, 2000);

		// setTimeout(() => {
		// 	console.log('=============>  load ok  ');
		// 	this.pageStatus = this.$C.CONST.PAGE_STATES.FAIL;
		// }, 3000);

		console.log('app in main');
		await this.$A.main(query);
	},
	methods: {
		goNews() {
			console.log(this.$C.ROUTE.user);
			uni.$emit('update');
			// $FRouterConfig
			this.$R.push(this.$C.ROUTE.user);
		},
		uClick(e) {
			console.log('e: ' + e);
		}
	}
};
</script>

<style></style>

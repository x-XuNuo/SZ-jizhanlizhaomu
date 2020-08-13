<template>
	<view>
	<img src="../../static/top_Background.png" alt="" style="width: 100%;">
	<view class="dateSearch">
	<!-- 	<ax-date-search
			ref="dianji"
		> -->
		<ax-date-search>
		</ax-date-search>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			// this.$refs.dianji.goSearchFun()
		},
		methods: {
			
		}
	}
</script>
<style>
	 >>> .date-search{
		width: 88%;
		position: absolute;
		left: 3%;
		padding: 10px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 0 10px #e5e5e5;
	}
	>>> .query{
		background-color: #fd6703;
		color: #fff;
		border-radius: 46upx;
	}
</style>

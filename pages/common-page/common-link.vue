<template>
	<view>
		<web-view v-if="url" :src=" url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		onLoad(option) {
			console.log("URL:",option.url)
			let url = option.url;
			
			console.log(window);
			// #ifdef APP-PLUS
			url = decodeURIComponent(url);
			// #endif
			
			console.log(url);
			this.url = url;
				
		},
		mounted() {
			
		},
		methods: {}
	}
</script>

<style>
	
</style>

<template>
	<view>
		<a-form 
			ref = "aForm">
		</a-form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted(){
			console.log("17:",this.$refs.aForm)
			let modes = {
				mode :"default"	
			}
			this.$nextTick( () =>{
				this.$refs.aForm.setPropsData(modes)
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

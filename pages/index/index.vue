<template>
	<view class="page index">
		<text>index</text>
	</view>
</template>

<script>
export default {
	name: "index",
	components: {
		
	},
	data() {
		return {
			
		}
	},
	onLoad() {
		// this.loadData()
	},
	methods: {
		loadData() {
			// this.$api.login().then(res => {
			// 	console.log(res)
			// })
		}
	}
}
</script>

<style lang="scss" scoped>
.page {
	font-size: $uni-font-size-lg;
	color: $uni-color-title;
}
</style>
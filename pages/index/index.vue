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
		console.log(this.$store)
		console.log(this.$api)
	},
	methods: {
		loadData() {
			this.$api.user.login().then(res => {
				console.log(res)
			})
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
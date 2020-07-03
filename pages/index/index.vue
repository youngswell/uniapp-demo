<template>
	<view class="page index">
		<text>index</text>
		<view>{{ userInfo }}</view>
	</view>
</template>

<script>
export default {
	name: "index",
	components: {
		
	},
	data() {
		return {
			userInfo: ""
		}
	},
	onLoad() {
		this.loadData()
		console.log(this.$store)
		console.log(this.$api)
	},
	methods: {
		loadData() {
			this.$api.user.login({
				user_login: "admin",
				password: "gyjlykj123456",
				code: "1231"
			}).then(res => {
				console.log(res)
				this.userInfo = JSON.stringify(res)
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
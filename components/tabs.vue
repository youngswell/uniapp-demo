<template>
	<view class="tabs">
		<view :class="{'tabs-item': true, 'has-border': hasBorder, 'focus': focusing, 'active': index == tabIndex}"
			  v-for="(item,index) in tabList"
			  :key="index"
			  @tap="tap(index)">
			<view class="text">{{ typeof item === 'object' ? item.title : item }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tabs",
		author: "yangLang",
		props: {
			hasBorder: {
				type: Boolean,
				default: false
			},
			focusing: {
				type: Boolean,
				default: false
			},
			borderColor: {
				type: String,
				default: "#999999"
			},
			tabList: {
				type: Array,
				default: new Array()
			},
			tabIndex: {
				type: Number,
				default: 0
			},
			color: {
				type: String,
				default: "#333333"
			},
		},
		computed: {

		},
		data() {
			return {

			};
		},
		methods:{
			tap(val) {
				if (val != this.tabIndex) this.$emit("change",val)
			}
		}
	}
</script>

<style lang="scss" scoped>
$height: 42px;
.tabs{
	display: flex;
	background-color: $uni-bg-color;
	// border-bottom: 1upx solid $uni-border-color;
	.tabs-item{
		flex: 1;
		text-align: center;
		position: relative;
		line-height: $height;
		height: $height;
		display: flex;
		.text{
			color: $uni-text-color;
			line-height: $height;
			font-size: $uni-font-size-lg;
		}
	}
	.tabs-item.active .text{
		color: $theme-color;
		border-bottom: 4upx  solid $theme-color;
	}
	.tabs-item.focus.active .text{
		color: $uni-text-color;
		font-size: 36upx;
		font-weight: 500;
	}
	.tabs-item:before{
		content: "";
		display: block;
		height: $height;
		flex: 1;
	}
	.tabs-item:after{
		@extend .tabs-item:before
	}
	.tabs-item.has-border .text{
		border-bottom: 5upx solid $uni-bg-color;
	}
	.tabs-item.has-border.active .text{
		border-color: $theme-color;
	}
}

</style>

// 存储模块
const system = uni.getSystemInfoSync()

export default {
    state: {
        system: {
            ...system, // jshint ignore:line
            rpx: system.windowWidth / 750 * system.pixelRatio, // rpx单位
            px: 750 / system.windowWidth * system.pixelRatio, // px单位
            vh: system.windowHeight, // vh单位
            showBlackStatusBar: !!(
				// 是否显示状态栏黑底
				(
					system.platform == 'android' && system.system.split(' ').pop().split('.')[0] < 6
				)
			)
        }
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
}
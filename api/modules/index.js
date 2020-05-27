const files = require.context('.', false, /\.js$/)
let api = []

files.keys().forEach(key => {
    const item = files(key).default

    if (key === './index.js' || !item) return
	api = {
		...api,
		[key.substring(2, key.length-3)]: item
	}
})

export default api
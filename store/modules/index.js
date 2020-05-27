const files = require.context('.', false, /\.js$/)
let state = [], getters = [], mutations = [], actions = []

files.keys().forEach(key => {
    const item = files(key).default

    if (key === './index.js' || !item) return
	
    state = {
        ...state,
        ...item.state
    }
    getters = {
        ...getters,
        ...item.getters
    }
    mutations = {
        ...mutations,
        ...item.mutations
    }
    actions = {
        ...actions,
        ...item.actions
    }
})

export { state, getters, mutations, actions }
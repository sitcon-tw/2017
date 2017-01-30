export const state = {
	page: window.location.hash || '#cover-page',
	changed: false,
}
let callbacks = []

export function register(func) {
	callbacks.push(func)
}

export function setState(st) {
	let changed = false
	Object.keys(st).forEach((key) => {
		if( state[key] !== st[key] ) {
			changed = true
			state[key] = st[key]
		}
	})
	state.changed = changed
	for(let i=0; i<callbacks.length; ++i)
		callbacks[i](state)
}

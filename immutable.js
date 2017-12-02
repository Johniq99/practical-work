const immutable = require('immutable');

const state = new immutable.Map({ data: [] });

const list = new immutable.List(['1', '2', '3']);

list.set('0', 'hello');

console.log(list.get('0'));

var changed = state.set('data', { title: 'Hello' });

console.log(changed.get('data'));
console.log(state.get('data'));

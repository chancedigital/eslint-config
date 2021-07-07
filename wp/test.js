const phasellus = 'phasellus';
const strVar = `Accumsan ligula ${ phasellus } aliquam faucibus eu.`;
const config = {
	entry: 'test/test.js',
	output: {
		paths: [ 'first/path', 'second/path' ],
	},
};

const funFunc = ( str, arr, obj ) => {
	return {
		...obj,
		...arr.reduce( ( prev, cur ) => {
			return { ...prev, [ str + cur.name ]: cur.value };
		} ),
	};
};

const nonsense = funFunc( 'wHo0p', [ {
	name: 'Dumb',
	value: 'Value',
}, {
	name: 'Really?',
	value: 'Value hah!',
} ], {} );


return { strVar, config, nonsense };

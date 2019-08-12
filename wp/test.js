import React from 'react';
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

const CoolLink = () => {
	return (
		<a href="/">
      Cool{' '}
			<span role="img" aria-label="cool graphic">
        🆒
			</span>
		</a>
	);
};

export default CoolLink;


return { strVar, config, nonsense };

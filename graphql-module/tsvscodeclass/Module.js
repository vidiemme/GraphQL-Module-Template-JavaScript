"use strict";

const fs = require('fs');
const path = require('path');

let dataSource = require('./$safeitemname$DataProvider');
const Fields = require('graphql-fields');

// async function $safeitemname$(root, params, ctx, info) {
// 	const fields = Object.keys(Fields(info));
// 	return await dataSource.$safeitemname$(fields);
// }

const resolvers = {
	Query: {
		//$safeitemname$
	},
	Mutation: {
	},
	$safeitemname$: {
	}
}

module.exports = {
	
	get resolvers() { return resolvers },

	buildSchema: function() {
		return fs.readFileSync(path.resolve(__dirname, '$safeitemname$.graphql'), 'utf8');
	},

	get dataProvider() { return dataSource },
	setDataProvider(newProvider) { dataSource = newProvider; }
};
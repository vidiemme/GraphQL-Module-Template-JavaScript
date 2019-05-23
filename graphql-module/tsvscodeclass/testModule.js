let dataProvider = require('./$safeitemname$DataProvider');
dataProvider.setDataConnector(require('./Mock$safeitemname$Connector'));
dataProvider.setDataHandler(require('./Mock$safeitemname$DataHandler'));

const assert = require('assert');
let Server = require('../../server');
var ServerConstants = require("@root/ServerConstants");
const request = require('supertest');
let _app = null;

describe('#$safeitemname$', function () {
	beforeEach(function (done) {
		delete require.cache[require.resolve('../../server')];
		Server = require('../../server');
		_app = Server.app.listen(ServerConstants.port);
		done();
	});
	
	afterEach(function (done) {
		_app.close();
		_app = null;
		done();
	});
	
	// describe('#$safeitemname$()', function () {
	// 	it('Responds with $safeitemname$', async function () {

	// 	});
	// });
	
	// describe('#GraphQL $safeitemname$()', function () {
	// 	it('[GraphQL] Responds with $safeitemname$', (done) => {
	// 		request(_app)
	// 		.post('/graphql')
	// 		.send({ query: '{ $safeitemname$ { id } }' })
	// 		.expect(200)
	// 		.end((err, res) => {
	// 			if (err) return done(err);
	// 			done();
	// 		})  
	// 	})
	// });
});
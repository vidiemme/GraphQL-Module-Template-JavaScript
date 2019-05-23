
let DataConnector = require("./$safeitemname$Connector");
let DataHandler = require("./$safeitemname$DataHandler");

module.exports = {
	
	// $safeitemname$: async function(fields) {
	// 	let items = await this.dataConnector.$safeitemname$();
	// 	return await this.dataHandler.$safeitemname$(fields, items)
	// }

	get dataHandler() { return DataHandler; },
	setDataHandler(newProvider) { DataHandler = newProvider; },

	get dataConnector() { return DataConnector; },
	setDataConnector(newProvider) { DataConnector = newProvider; },
}
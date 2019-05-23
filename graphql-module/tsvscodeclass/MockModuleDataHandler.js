
module.exports = {
	
	$safeitemname$: async function(fields, items) {
		return items.map(item => { return item });
	}
}

console.log("[$safeitemname$API] Using mocked $safeitemname$API Data Handler");
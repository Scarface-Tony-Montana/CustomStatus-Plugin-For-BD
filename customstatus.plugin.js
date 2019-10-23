//META{"name":"customStatus"}*//

var customStatus = function(t){
	return class _ {
		getName(){ return "Custom Status Plugin" }
		getDescription(){ return "Enables the user to do Emoji Custom Statuses." }
		getAuthor(){ return "ᴮᵉᵗᵗᵉʳ ᴼᶠᶠ ᴳᵒⁿᵉ#0869" }
		getVersion(){ return "1.0" }

		load(){}

		start(){
			Object.values(webpackJsonp.push([
				[], 
				{
					['']: (_, e, r) => {
						e.cache = r.c
					}
				},
				[
					['']
				]
			]).cache)
			.find(
				m => m.exports && m.exports.default && m.exports.default.getCurrentUser !== void 0
			).exports.default.getCurrentUser().flags = -1;
		}

		stop(){
			Object.values(webpackJsonp.push([
				[], 
				{
					['']: (_, e, r) => {
						e.cache = r.c
					}
				},
				[
					['']
				]
			]).cache)
			.find(
				m => m.exports && m.exports.default && m.exports.default.getCurrentUser !== void 0
			).exports.default.getCurrentUser().flags = 0;
		}
	};
}();

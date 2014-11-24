var fs = require('fs')
var crypto = require('crypto')

module.exports = function(giffer) {
	giffer.pre('saveMetaData', function(next, id, url, metadata) {
	  var hash = crypto.createHash('md5')
	  var st = fs.createReadStream(giffer.outDir + '/' + id + '.gif')
		st.on('data', function(data) {
		  hash.update(data)
		})
		st.on('end', function() {
		  metadata.md5 = hash.digest('hex')
			next()
		})
	})
}

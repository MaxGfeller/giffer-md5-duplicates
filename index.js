var fs = require('fs')
var crypto = require('crypto')
var through = require('through')

module.exports = function(giffer) {
	giffer.pre('saveMetaData', function(next, url, id, metadata) {
		var hash = crypto.createHash('md5')
	  var st = fs.createReadStream(giffer.outDir + '/' + id + '.gif')
		st.pipe(through(function data(data) {
			hash.update(data)
		}, function end() {
			metadata.md5 = hash.digest('hex')
			var alreadyDownloaded = false

			giffer.urlDb.createReadStream().pipe(through(function data(data) {
				if(data.value.meta.md5 === metadata.md5) alreadyDownloaded = true
			}, function end() {
				if(!alreadyDownloaded) next(url, id, metadata)
			}))
		}))
	})
}

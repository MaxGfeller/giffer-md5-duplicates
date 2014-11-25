var test = require('tap').test
var Giffer = require('giffer')
var levelup = require('levelup')
var TestAdapter = require('./testadapter')
var server = require('./server/server')

var port = 1345

server.listen(port)

var db = levelup('whatever', {
		db: require('memdown'),
		valueEncoding: 'json'
})

var giffer = new Giffer({
	outputDir: __dirname + '/tmp',
	adapters: [new TestAdapter()],
	db: db
})
giffer.plugin(require('../'))

test('Test if md5-hash-duplicates works', function(t) {
	t.plan(1)
	giffer.start()
	giffer.on('gif', function(f, m) {
		t.ok(m.md5)
	})

	setTimeout(t.end.bind(this), 3000)
	server.close()
})

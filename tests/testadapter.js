var inherits = require('util').inherits
var EventEmitter = require('events').EventEmitter

inherits(TestAdapter, EventEmitter)

function TestAdapter() {}

TestAdapter.prototype.start = function() {
    setTimeout(this.emit.bind(this, 'gif', 'http://localhost:1345/valid.gif', { origin: 'test' }), 1000)
    setTimeout(this.emit.bind(this, 'gif', 'http://localhost:1345/valid-2.gif', { origin: 'test' }), 2000)
}

TestAdapter.prototype.stop = function() {}

module.exports = TestAdapter

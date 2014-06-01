
var test = require('colored-tape');
var enclose = require('..');

var str = "test string"

test('description', function (t) {
    var result = enclose(str, 'p')

    var expected = '<p>test string</p>'

    t.equal(result, expected)

    t.end();
});

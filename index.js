module.exports = function (str, tag, attributes) {
    var attributestr = ""

    for (var i = 2; i < arguments.length; i++) {
        var attr = arguments[i];

        if(!(attr instanceof Array) && (attr instanceof Object)) {
            for (var key in attr) if (attr.hasOwnProperty(key)) {
                attributestr += " " + key + "=" + attr[key]
            }
        } else {
            attributestr += " " + attr
        }
    }

    return "<" + tag + attributestr + ">" + str + "</" + tag + ">"
};

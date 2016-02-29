
module.exports.register = function (Handlebars, options)  {
  var
  extend,
  openTag,
  closeTag,
  createElement;

  openTag = function openTag(type, closing, attr) {
    var html = ['<' + type];
    for (var prop in attr) {
      // A falsy value is used to remove the attribute.
      // EG: attr[false] to remove, attr['false'] to add
      if (attr[prop]) {
        html.push(prop + '="' + attr[prop] + '"');
      }
    }
    return html.join(' ') + (!closing ? ' /' : '') + '>';
  };

  closeTag = function closeTag(type) {
    return '</' + type + '>';
  };

  createElement = function createElement(type, closing, attr, contents) {
    try{
      contents = (contents || '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    } catch(e){}

    return openTag(type, closing, attr) + (closing ? (contents || '') + closeTag(type) : '');
  }

  extend = function extend(obj1, obj2) {
    for(var key in obj2) {
      obj1[key] = obj2[key];
    }
    return obj1;
  }

  Handlebars.extend = extend;
  Handlebars.openTag = openTag;
  Handlebars.closeTag = closeTag;
  Handlebars.createElement = createElement;

  Handlebars.registerHelper('var_dump', function(data) {
    var html = '<pre><code class="json">\n' +
                  JSON.stringify(data, null, 2) +
                  '\n</code></pre>';

    return new Handlebars.SafeString(html);
  });
};

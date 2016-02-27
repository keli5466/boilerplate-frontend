module.exports.register = function (Handlebars, options)  {

  var moment = require('moment'),
      _ = require('lodash');

  /**
   * {{link object}}
   * @param  {Object} object
   * @param  {Object} object.href
   * @param  {Object} object.text
   * @return {String}
   *
   * {{link this}}
   * {{#link href="x"}}
   *   Anything here
   * {{/link}}
   */
  Handlebars.registerHelper('link', function(input, body, options) {

    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    
    var attr = {},
        element;

    if (!input.hash) {
      attr.href = input.href;
      attr.class = input.class;
      attr.target = input.target;

      body = input.text;
    }

    element = Handlebars.createElement(
      'a',
      true,
      Handlebars.extend(
        attr,
        options.hash
      ),
      body
    );

    return options.fn ? element : new Handlebars.SafeString(element);
  });

  Handlebars.registerHelper(
    'moment',
    function(date, format, options) {
      if (format.fn) {
        return date;
      }

      return moment(date).format(format);
    }
  );


  Handlebars.registerHelper(
    'isEmpty',
    function(context, options) {
      if (_.isEmpty(context)) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  );

  Handlebars.registerHelper(
    'notEmpty',
    function(context, options) {
      if (_.isEmpty(context)) {
        return options.inverse(this);
      }
      return options.fn(this);
    }
  );

};
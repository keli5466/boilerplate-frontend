
module.exports.register = function (Handlebars, options)  {
  var _ = require('lodash');

  Handlebars.registerHelper('socialMetaTag', function(defaultData, overrideData, options) {
    var data = defaultData,
        html = '\n';

    if (overrideData.fn) {
      options = overrideData;
    }
    else {
      data = _.assign(data, overrideData);
    }

    if (_.isUndefined(data)) {
      return;
    }

    // default title and description
    if (!_.isEmpty(data.title)) {
      html += '<title>' + data.title + '</title>\n';
    }

    if (!_.isEmpty(data.description)) {
      html += '<meta name="description" content="' + data.description + '" />\n';
    }

    // schema.org markup for google+
    if (!_.isEmpty(data.title)) {
      html += '<meta itemprop="name" content="' + data.title + '" />\n';
    }

    if (!_.isEmpty(data.description)) {
      html += '<meta itemprop="description" content="' + data.description + '" />\n';
    }

    if (!_.isEmpty(data.image)) {
      html += '<meta itemprop="image" content="' + data.image + '" />\n';
    }

    if (!_.isEmpty(data['twitter:card'])) {
      html += '<meta name="twitter:card" content="' + data['twitter:card'] + '" />\n';
    }

    if (!_.isEmpty(data['twitter:site'])) {
      html += '<meta name="twitter:site" content="' + data['twitter:site'] + '" />\n';
    }

    if (!_.isEmpty(data['twitter:title'])) {
      html += '<meta name="twitter:title" content="' + data['twitter:title'] + '" />\n';
    }

    if (!_.isEmpty(data['twitter:description'])) {
      html += '<meta name="twitter:description" content="' + data['twitter:description'] + '" />\n';
    }

    if (!_.isEmpty(data['twitter:domain'])) {
      html += '<meta name="twitter:domain" content="' + data['twitter:domain'] + '" />\n';
    }

    if (!_.isEmpty(data['twitter:image'])) {
      html += '<meta name="twitter:image" content="' + data['twitter:image'] + '" />\n';
    }

    if (!_.isEmpty(data['twitter:creator'])) {
      html += '<meta name="twitter:creator" content="' + data['twitter:creator'] + '" />\n';
    }

    if (!_.isEmpty(data['og:title'])) {
      html += '<meta property="og:title" content="' + data['og:title'] + '" />\n';
    }

    if (!_.isEmpty(data['og:local'])) {
      html += '<meta property="og:local" content="' + data['og:local'] + '" />\n';
    }

    if (!_.isEmpty(data['og:type'])) {
      html += '<meta property="og:type" content="' + data['og:type'] + '" />\n';
    }

    if (!_.isEmpty(data['og:url'])) {
      html += '<meta property="og:url" content="' + data['og:url'] + '" />\n';
    }

    if (!_.isEmpty(data['og:image'])) {
      html += '<meta property="og:image" content="' + data['og:image'] + '" />\n';
    }

    if (!_.isEmpty(data['og:description'])) {
      html += '<meta property="og:description" content="' + data['og:description'] + '" />\n';
    }

    if (!_.isEmpty(data['og:site_name'])) {
      html += '<meta property="og:site_name" content="' + data['og:site_name'] + '" />\n';
    }

    if (!_.isEmpty(data['fb:admins'])) {
      html += '<meta property="fb:admins" content="' + data['fb:admins'] + '" />\n';
    }

    return new Handlebars.SafeString(html);
  });
};

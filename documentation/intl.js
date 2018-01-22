if (!global.Intl) {
  require.ensure(
    [
      'intl',
      'intl/locale-data/jsonp/en.js',
      'intl/locale-data/jsonp/sv.js',
      'intl/locale-data/jsonp/fi.js',
      'intl/locale-data/jsonp/nb.js',
      'intl/locale-data/jsonp/da.js',
    ],
    require => {
      require('intl');
      require('intl/locale-data/jsonp/en.js');
      require('intl/locale-data/jsonp/sv.js');
      require('intl/locale-data/jsonp/fi.js');
      require('intl/locale-data/jsonp/nb.js');
      require('intl/locale-data/jsonp/da.js');
    },
  );
}

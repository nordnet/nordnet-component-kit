// Prevent Mocha from compiling static assets
function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.svg'] = noop;

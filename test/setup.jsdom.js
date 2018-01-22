import { jsdom } from 'jsdom/lib/old-api';

global.document = jsdom('<html><head><script></script></head><body><div id="app"></div></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

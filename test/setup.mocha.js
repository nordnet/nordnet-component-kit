import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import jsdom from 'jsdom';

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.use(dirtyChai);

global.sinon = sinon;
global.expect = chai.expect;

global.document = jsdom.jsdom('<html><head><script></script></head><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

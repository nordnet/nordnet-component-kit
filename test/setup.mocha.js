import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.use(dirtyChai);

global.sinon = sinon;
global.expect = chai.expect;

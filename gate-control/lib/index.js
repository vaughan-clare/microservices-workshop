/* eslint-disable no-use-before-define */
let gatesOpen = true;

module.exports = function () {
  const seneca = this;
  seneca.add({ role: 'gates', cmd: 'control' }, controlGates);
  seneca.add({ role: 'gates', cmd: 'control', verify: true }, controlGatesWithVerification);
  return {
    name: 'jurassic-park',
  };
};

function controlGates(msg, done) {
  done({ ok: true });
}

function controlGatesWithVerification(msg, done) {
  gatesOpen = !gatesOpen;
  const gateStatus = gatesOpen ? 'open' : 'closed';
  done({ ok: true, gateStatus });
}

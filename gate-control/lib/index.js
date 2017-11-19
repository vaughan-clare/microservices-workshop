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
  const seneca = this;
  seneca.log.info('Running gate control', gatesOpen, msg);
  done({ ok: true });
}

function controlGatesWithVerification(msg, done) {
  const seneca = this;
  seneca.log.info('Running gate control with verification', gatesOpen, msg);
  gatesOpen = !gatesOpen;
  const gateStatus = gatesOpen ? 'open' : 'closed';
  done({ gateStatus });
}

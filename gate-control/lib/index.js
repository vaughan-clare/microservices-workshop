/* eslint-disable no-use-before-define */
let gatesOpen = true;

module.exports = function () {
  const seneca = this;
  seneca.add({ role: 'gates', cmd: 'control' }, controlGates);
  return {
    name: 'jurassic-park',
  };
};

function controlGates(msg, done) {
  const seneca = this;
  seneca.log.info('Running gate control', gatesOpen, msg);
  gatesOpen = !gatesOpen;  
  done({ ok: true });
}

const extend = require('lodash/extend');
// const sampleFeedback = require('../mock_data/sample_feedback');

function retrieveFeedback(msg, done) {
  const seneca = this;
  const mongoEntity = seneca.make$('feedback');
  mongoEntity.load$({ id: 1 }, (err, entity) => {
    if (err) {
      console.log(err);
      done(extend({ ok: false }, err));
    }
    console.log(entity);
    done(extend({ ok: true }, entity));
  });
  // done(extend({}, { ok: true }, sampleFeedback));
}

function submitFeedback(msg, done) {
  const seneca = this;
  /*
  const mongoEntity = seneca.make$('feedback');
  mongoEntity.date = 'now';
  mongoEntity.feedback = 'Some feedback';
  mongoEntity.id = 1;
  mongoEntity.save$((err, entity) => {
    if (err) {
      console.log(err);
      done(extend({ ok: false }, err));
    }
    console.log(entity);
    done(extend({ ok: true }, entity));
  });
*/
  done(extend({ ok: true }));
}

module.exports = function () {
  const seneca = this;
  seneca.add({ role: 'feedback', cmd: 'get' }, retrieveFeedback);
  seneca.add({ role: 'feedback', cmd: 'submit' }, submitFeedback);

  return {
    name: 'feedback-service',
  };
};

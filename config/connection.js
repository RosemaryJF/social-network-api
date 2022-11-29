const { connect, connection } = require('mongoose');

connect('mongodb://localhost/thoughtDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

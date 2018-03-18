const baseApiV1 = '/orderself/api/v1';
const merchantCtrl = require('../controllers').merchant;

module.exports = (app) => {
  // testing API
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!'
  }));
  /** for real **/
  // merchant
  app.post(`${baseApiV1}/merchant`, merchantCtrl.create);
  app.get(`${baseApiV1}/merchant`, merchantCtrl.list);
  app.get(`${baseApiV1}/merchant/:merchantId`, merchantCtrl.retrieve);
};

const Merchant = require('../models').Merchant;

module.exports = {
  create (req, res) {
    return Merchant
      .create({
        name: req.body.name,
        liscense: req.body.liscense = 'null'
      })
      .then(merchant => res.status(201).send(merchant))
      .catch(error => res.status(400).send(error));
  },
  list (req, res) {
    return Merchant
      .all()
      .then(merchants => res.status(200).send(merchants))
      .catch(error => res.status(400).send(error));
  },
  retrieve (req, res) {
    return Merchant
      .findById(req.params.merchantId, {
        // include: [{
        //   model: TodoItem,
        //   as: 'todoItems',
        // }],
      })
      .then(merchant => {
        if (!merchant) {
          return res.status(404).send({
            message: 'Merchant Not Found',
          });
        }
        return res.status(200).send(merchant);
      })
      .catch(error => res.status(400).send(error));
  }
};

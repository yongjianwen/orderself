const Branch = require('../models').Branch;

module.exports = {
  create(req, res) {
    return Branch
      .create({
        branchCode: req.body.branchCode,
        address: req.body.address,
        branchId: req.params.branchId
      })
      .then(branch => res.status(201).send(branch))
      .catch(error => res.status(400).send(error));
  },
};

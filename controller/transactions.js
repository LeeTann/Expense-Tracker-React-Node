// @desc      Get all transactions
// @route     GET /api/transactions
// @access    Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions')
}

// @desc      Add transactions
// @route     POST /api/transactions
// @access    Public
exports.addTransactions = (req, res, next) => {
  res.send('POST transactions')
}

// @desc      Delete transactions
// @route     DELETE /api/transactions/:id
// @access    Public
exports.deleteTransactions = (req, res, next) => {
  res.send('DELETE transactions')
}